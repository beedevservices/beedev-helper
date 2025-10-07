const fakeTerminal = document.getElementById('fakeTerminal')
const termPrompt = document.getElementById('term')
const commandInput = document.getElementById('commandInput')
const outputContainer = document.getElementById('output')
const fileList = ['Documents', 'Pictures'];
var fileLocation = '/Users/guest'
var baseLocation = 'BeeDevHelper $~/'


function startTerminal() {
    fakeTerminal.style.display = 'flex'
    commandInput.style.display = 'inline'
    termPrompt.innerHTML = 'BeeDevHelper $~/'
    outputContainer.innerHTML = ''
    commandInput.value = ''
    commandInput.focus()
    if(fileList.length > 2) {
        fileList.pop()
        fileList.pop()
    }
}

function getTimestamp() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `[${hours}:${minutes}:${seconds}]`;
}
function executeBasicTerm() {
    const command = commandInput.value
    // Display the typed command in the terminal
    termPrompt.innerHTML += `<span class="user-command"> ${command}</span><br>`;
    var outputText = ''
    // Simulate output based on the command
    if (command == 'pwd') {
        outputText = fileLocation
        termPrompt.innerHTML += `${outputText}<br>`
        unhideSteps(command)
    } 
    else if (command === 'ls') {
        outputText = fileList.map(item => `<span class="file">${item}</span>`).join(' ');
        termPrompt.innerHTML += `${outputText}<br>`
        unhideSteps(command)
    }
    else if (command === 'cd Documents') {
        baseLocation = `${baseLocation}Documents/`
        fileLocation = `${fileLocation}/Documents`
        unhideSteps(command)
    } 
    else {
        const outputText = `Executing: ${command}\nCommand not found!`;
        termPrompt.innerHTML += `${outputText}<br>`;
        unhideSteps(command)
    }
    termPrompt.innerHTML += `${baseLocation}`
    commandInput.value = ''
    commandInput.focus()
}

var idToShow = ''
var step = 0
function unhideSteps(command) {
    if(command == 'pwd') {
        if(step === 0) {
            idToShow = document.getElementById('step1desc')
            step = 1
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
            console.log(step)
        }
    } else if (command == 'ls') {
        if(step === 1) {
            idToShow = document.getElementById('step2desc')
            step = 2
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'

                setTimeout(function() {
                    idToShow = document.getElementById('step3Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
            console.log(step)
        }
    } else if ( command === 'cd Documents'){
        if(step === 2) {
            idToShow = document.getElementById('step3desc')
            step = 3
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
    else {
        console.log('wait')
    }

}