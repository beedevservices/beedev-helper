const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
  
// setting up session
const session = axios.create({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
  },
});

// code is for logging in to your local DVWA
const loginPayload = {
  username: 'admin',
  password: 'password',
  Login: 'Login',
};

// change URL to the login page of your DVWA login URL
const loginUrl = 'http://localhost:8080/DVWA-master/login.php';

etch(loginUrl, {
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
  },
})
  .then(response => response.text())
  .then(body => {
    const tokenMatch = body.match(/user_token'\s*value='(.*?)'/);
    const token = tokenMatch ? tokenMatch[1] : null;

    if (token) {
      loginPayload.user_token = token;
      return fetch(loginUrl, {
        method: 'POST',
        body: new URLSearchParams(loginPayload),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    } else {
      throw new Error('Token not found in the login page');
    }
  })
  .then(response => response.text())
  .then(() => {
    const url = window.location.href; // or provide a specific URL
    scanSqlInjection(url);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// login
session.get(loginUrl)
  .then((response) => {
    const tokenMatch = response.data.match(/user_token'\s*value='(.*?)'/);
    const token = tokenMatch ? tokenMatch[1] : null;

    if (token) {
      loginPayload.user_token = token;
      return session.post(loginUrl, loginPayload);
    
    } else {
      throw new Error('Token not found in the login page');
    }
  })
  .then(() => {
    // URL to be scanned, passed as a command-line argument
    const url = process.argv[2];
    scanSqlInjection(url);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

function getFormDetails(form) {
  const details = {};
  details.action = form.attr('action') || null;
  details.method = (form.attr('method') || 'get').toLowerCase();

  const inputs = [];
  form.find('input').each((index, input) => {
    const inputType = input.attribs.type || 'text';
    const inputName = input.attribs.name;
    const inputValue = input.attribs.value || '';
    inputs.push({ type: inputType, name: inputName, value: inputValue });
  });

  details.inputs = inputs;
  return details;
}

function isVulnerable(response) {
  const errors = [
    // MySQL
    "you have an error in your sql syntax;",
    "warning: mysql",
    // SQL Server
    "unclosed quotation mark after the character string",
    // Oracle
    "quoted string not properly terminated",
  ];

  const lowerCaseContent = response.data.toLowerCase();

  return errors.some((error) => lowerCaseContent.includes(error));
}

// ... (rest of your code)

function scanSqlInjection(url) {
  const characters = ["\"", "'"];

  // test on URL
  characters.forEach(c => {
    // add quote/double quote character to the URL
    const newUrl = `${url}${c}`;
    console.log(`[!] Trying ${newUrl}`);

    // Make the HTTP request
    fetch(newUrl)
      .then(response => {
        if (isVulnerable(response)) {
          // SQL Injection detected on the URL itself
          console.log(`[+] SQL Injection vulnerability detected, link: ${newUrl}`);
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  });

  // test on HTML forms
  // retrieve all HTML forms from the given URL
  fetch(url)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);
      const forms = $('form');
      console.log(`[+] Detected ${forms.length} forms on ${url}.`);

      forms.each((index, form) => {
        const formDetails = getFormDetails($(form));

        characters.forEach(c => {
          // the data body to submit
          const data = {};
          formDetails.inputs.forEach(inputTag => {
            if (inputTag.value || inputTag.type === 'hidden') {
              // any input form that has some value or hidden,
              // just use it in the form body
              data[inputTag.name] = inputTag.value + c;
            } else if (inputTag.type !== 'submit') {
              // all others except submit, use some junk data with special character
              data[inputTag.name] = `test${c}`;
            }
          });

          // join the URL with the action (form request URL)
          const formUrl = new URL(formDetails.action || '', url).toString();
          const requestConfig = {
            method: formDetails.method.toUpperCase(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          };

          if (formDetails.method === 'post') {
            requestConfig.body = new URLSearchParams(data);
          } else {
            formUrl.search = new URLSearchParams(data).toString();
          }

          // make the HTTP request
          fetch(formUrl, requestConfig)
            .then(res => {
              // test whether the resulting page is vulnerable
              if (isVulnerable(res)) {
                console.log(`[+] SQL Injection vulnerability detected, link: ${formUrl}`);
                console.log('[+] Form:');
                console.dir(formDetails, { depth: null });
              }
            })
            .catch(error => {
              console.error('Error:', error.message);
            });
        });
      });
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

  // test on HTML forms
  // retrieve all HTML forms from the given URL
  fetch(url)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);
      const forms = $('form');
      console.log(`[+] Detected ${forms.length} forms on ${url}.`);

      forms.each((index, form) => {
        const formDetails = getFormDetails($(form));

        characters.forEach(c => {
          // the data body to submit
          const data = {};
          formDetails.inputs.forEach(inputTag => {
            if (inputTag.value || inputTag.type === 'hidden') {
              // any input form that has some value or hidden,
              // just use it in the form body
              try {
                data[inputTag.name] = inputTag.value + c;
              } catch (error) {
                console.error('Error:', error.message);
              }
            } else if (inputTag.type !== 'submit') {
              // all others except submit, use some junk data with special character
              data[inputTag.name] = `test${c}`;
            }
          });

          // join the URL with the action (form request URL)
          const formUrl = new URL(formDetails.action || '', url).toString();
          const requestConfig = {
            method: formDetails.method.toUpperCase(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          };

          if (formDetails.method === 'post') {
            requestConfig.body = new URLSearchParams(data);
          } else {
            formUrl.search = new URLSearchParams(data).toString();
          }

          // make the HTTP request
          fetch(formUrl, requestConfig)
            .then(res => {
              // test whether the resulting page is vulnerable
              if (isVulnerable(res)) {
                console.log(`[+] SQL Injection vulnerability detected, link: ${formUrl}`);
                console.log('[+] Form:');
                console.dir(formDetails, { depth: null });
              }
            })
            .catch(error => {
              console.error('Error:', error.message);
            });
        });
      });
    })
    .catch(error => {
      console.error('Error:', error.message);
    });

  // test on HTML forms
  // retrieves all HTML forms from a given URL
  axios.get(url)
    .then((response) => {
      const $ = cheerio.load(response.data);
      const forms = $('form');
      console.log(`[+] Detected ${forms.length} forms on ${url}.`);

      forms.each((index, form) => {
        const formDetails = getFormDetails($(form));
        for (const c of characters) {
          // the data body we want to submit
          const data = {};
          formDetails.inputs.forEach((inputTag) => {
            if (inputTag.value || inputTag.type === 'hidden') {
              // any input form that has some value or hidden,
              // just use it in the form body
              try {
                data[inputTag.name] }
                try {
                  // code that might throw an exception
                } catch (error) {
                  // handle the exception
                  console.error('Error:', error.message);
                } finally {
              }
}               