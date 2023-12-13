const fakeTerminal = document.getElementById('fakeTerminal')
const termPrompt = document.getElementById('term')
const commandInput = document.getElementById('commandInput')
const outputContainer = document.getElementById('output')
var noEnv = true

function startTerminal() {
    fakeTerminal.style.display = 'flex'
    commandInput.style.display = 'inline'
    termPrompt.innerHTML = 'BeeDevHelper $~/ '
    outputContainer.innerHTML = ''
    noEnv = true
    commandInput.value = ''
    commandInput.focus()
}

const fileList = ['server.py', 'flask_app/'];


function executeCommand() {
    const command = commandInput.value;
    // Display the typed command in the terminal
    termPrompt.innerHTML += `<span class="user-command"> ${command}</span><br>`;
    var outputText = ''
    // Simulate output based on the command
    if(command == 'ls') {
        outputText = fileList.map(item => `<span class="file">${item}</span>`).join(' ');
        termPrompt.innerHTML += `${outputText}<br>`;
        noEnv = true
    }
    else if (command === 'pipenv install flask') {
        outputText = "<span class='file'>Creating a virtualenv for this project...\nTo activate this project's virtualenv, run pipenv shell.\nAlternatively, run a command inside the virtualenv with pipenv run.</span>"
        termPrompt.innerHTML += `${outputText}<br>`;
        fileList.push('Pipfile')
        fileList.push('Pipfile.lock')
        noEnv = true
    } 
    else if (command == 'pipenv shell') {
        outputText = '<span class="file">Launching subshell in virtual environment...</span>'
        termPrompt.innerHTML += `${outputText}<br>`;
        noEnv = false
     }
    else if(command == 'exit') {
        if(noEnv) {
            outputText = `<span class="file">${command} Not found!`
        } else {
            noEnv = true
            termPrompt.innerHTML += `BeeDevHelper $~/ ${getTimestamp()}$ `;
        }
    } else {
        const outputText = `Executing: ${command}\nCommand not found!`;
        termPrompt.innerHTML += `${outputText}<br>`;
    }
    if (noEnv) {
        // Add a new BeeDevHelper $~/ line
        termPrompt.innerHTML += `BeeDevHelper $~/ ${getTimestamp()}$ `;
    } else {
        // Add a new BeeDevHelper $~/ line
        termPrompt.innerHTML += `((flaskEnv)) BeeDevHelper $~/ ${getTimestamp()}$ `;
    }
    commandInput.value = '';
    commandInput.focus();
}


function getTimestamp() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `[${hours}:${minutes}:${seconds}]`;
}
