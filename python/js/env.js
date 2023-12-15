const fakeTerminal = document.getElementById('fakeTerminal')
const termPrompt = document.getElementById('term')
const commandInput = document.getElementById('commandInput')
const outputContainer = document.getElementById('output')
var noEnv = true
const fileList = ['server.py', 'flask_app/'];

function startTerminal() {
    fakeTerminal.style.display = 'flex'
    commandInput.style.display = 'inline'
    termPrompt.innerHTML = 'BeeDevHelper $~/ '
    outputContainer.innerHTML = ''
    noEnv = true
    commandInput.value = ''
    commandInput.focus()
    if(fileList.length > 2) {
        fileList.pop()
        fileList.pop()
    }
}

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
        unhideSteps(command)
    }
    else if (command === 'pipenv install flask') {
        if (noEnv) {
            if(fileList.length == 2) {
                outputText = "<span class='file'>Creating a virtualenv for this project...\nTo activate this project's virtualenv, run pipenv shell.\nAlternatively, run a command inside the virtualenv with pipenv run.</span>"
                termPrompt.innerHTML += `${outputText}<br>`;
                fileList.push('Pipfile')
                fileList.push('Pipfile.lock')
                noEnv = true
            } else {
                outputText = "<span class='file'>Creating a virtualenv for this project...\nFlask requirements already satisfied \nTo activate this project's virtualenv, run pipenv shell.\nAlternatively, run a command inside the virtualenv with pipenv run.</span>"
                termPrompt.innerHTML += `${outputText}<br>`;
                noEnv = true
            }
            unhideSteps(command)
        } else {
            outputText = '<span class="file">Environment already running can not created Nested Environment'
            noEnv = false
        }
    } 
    else if (command == 'pipenv shell') {
        outputText = '<span class="file">Launching subshell in virtual environment...</span>'
        termPrompt.innerHTML += `${outputText}<br>`;
        noEnv = false
        unhideSteps(command)
     }
    else if(command == 'exit') {
        if(noEnv) {
            outputText = `<span class="file">${command} Not found!`
        } else {
            noEnv = true
            unhideSteps(command)
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
var idToShow = ''
function unhideSteps(command) {
    if(command == 'ls') {
        if(fileList.length == 2) {
            idToShow = document.getElementById('step1desc')
            console.log(idToShow)
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'

                setTimeout(function() {
                    idToShow = document.getElementById('step2Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        } else  {
            idToShow = document.getElementById(('step3desc'))
            console.log(idToShow)
            if(idToShow.style.display != 'block') {
                setTimeout(function() {
                    idToShow.style.display = 'block'
                    idToShow.style.backgroundColor = 'green'
                    idToShow.style.color = 'white'
                    idToShow.style.padding = '.5em'

                    setTimeout(function() {
                        idToShow = document.getElementById('step4Start')
                        idToShow.style.display = 'table-row'
                    }, 2000)
                }, 2000)
            }
        }
    }
    else if (command == 'pipenv install flask') {
        idToShow = document.getElementById('step2desc')
        setTimeout(function() {
            idToShow.style.display = 'block'
            idToShow.style.backgroundColor = 'green'
            idToShow.style.color = 'white'
            idToShow.style.padding = '.5em'
            if(!noEnv) {
                setTimeout(function() {
                    idToShow = document.getElementById('step2Bdesc')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }
            setTimeout(function() {
                idToShow = document.getElementById('step3Start')
                idToShow.style.display = 'table-row'
            }, 2000)
        }, 2000)
    }
    else if (command == 'pipenv shell') {
        idToShow = document.getElementById('step4desc')
        setTimeout(function() {
            idToShow.style.display = 'block'
            idToShow.style.backgroundColor = 'green'
            idToShow.style.color = 'white'
            idToShow.style.padding = '.5em'

            setTimeout(function() {
                idToShow = document.getElementById('step5Start')
                idToShow.style.display = 'table-row'
            }, 2000)
        }, 2000)
    }
    else if (command == 'exit') {
        idToShow = document.getElementById('step5desc')
        setTimeout(function() {
            idToShow.style.display = 'block'
            idToShow.style.backgroundColor = 'green'
            idToShow.style.color = 'white'
            idToShow.style.padding = '.5em'
        }, 2000)
    }
}