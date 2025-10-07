const fakeTerminal = document.getElementById('fakeTerminal')
const termPrompt = document.getElementById('term')
const commandInput = document.getElementById('commandInput')
const outputContainer = document.getElementById('output')
const fileList = ['Documents', 'Pictures'];
var fileLocation = '/Users/guest'
var baseLocation = 'BeeDevHelper $~/'
var step = 0
var final = 'Commands practiced:\ngit clone\ngit status\n git add\ngit commit\ngit push'

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
function clearTerminal() {
    fakeTerminal.style.display = 'flex'
    commandInput.style.display = 'inline'
    termPrompt.innerHTML = `${baseLocation}`
    outputContainer.innerHTML = ''
    commandInput.value = ''
    commandInput.focus()
}
function finalTerm() {
    fakeTerminal.style.display = 'flex'
    commandInput.style.display = 'inline'
    termPrompt.innerHTML = ``
    outputContainer.innerHTML = ''
    commandInput.value = ''
    commandInput.focus()
}

function executeBasicTerm() {
    console.log("Start Step #", step, baseLocation)
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
        fileList.pop()
        fileList.pop()
        fileList.push('hello-world.html')
        fileList.push('Project')
        baseLocation += 'Documents/'
        fileLocation += '/Documents'
        unhideSteps(command)
    } 
    else if (command === 'cd ..') {
        fileList.pop()
        fileList.pop()
        fileList.pop()
        fileList.push('Documents')
        fileList.push('Pictures')
        if (step === 4) {
            baseLocation = 'BeeDevHelper $~/'
            fileLocation = '/Users/guest'
        }
        unhideSteps(command)
    }
    else if (command === 'cd ../..') {
        if (step === 13) {
            fileList.pop()
            fileList.pop()
            fileList.pop()
            fileList.push('Documents')
            fileList.push('Pictures')
            baseLocation = 'BeeDevHelper $~/'
            fileLocation = '/Users/guest'
            unhideSteps(command)
        }
    }
    else if (command === 'clear') {
        clearTerminal()
        unhideSteps(command)
        commandInput.value = ''
        commandInput.focus()
        return
    }
    else if (command === 'mkdir Test') {
        if (step === 7) {
            fileList.push('Test')
            unhideSteps(command)
        } else if (baseLocation = 'BeeDevHelper $~/Documents/'){
            outputText = `Can not ${command}\nAlready exists`
        } else {
            outputText = `${command} not valid at this location`
        }
    }
    else if (command === 'cd Test') {
        if (step === 9) {
            fileList.pop()
            fileList.pop()
            fileList.pop()
            fileList.pop()
            baseLocation += 'Test/'
            fileLocation += `/Test`
            unhideSteps(command)
        } else {
            outputText = `cd: no such file or directory: Test`
        }
    }
    else if (command === 'touch index.html') {
        if (step === 11) {
            fileList.push('index.html')
            unhideSteps(command)
        } else {
            outputText = `${command} not valid at this location`
        }
    }
    else {
        const outputText = `Executing: Command not found ${command}`;
        termPrompt.innerHTML += `${outputText}<br>`;
        unhideSteps(command)
    }
    termPrompt.innerHTML += `${baseLocation}`
    commandInput.value = ''
    commandInput.focus()
    console.log("End Step #", step, baseLocation)
}

var idToShow = ''
var hide = ''
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
    } 
    else if (command == 'ls') {
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
        else if (step === 3.5) {
            idToShow = document.getElementById('step3adesc')
            step = 4
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
        else if (step == 8) {
            idToShow = document.getElementById('step8desc')
            step = 9
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'
                

                setTimeout(function() {
                    idToShow = document.getElementById('step9Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        } 
        else if (step === 10) {
            idToShow = document.getElementById('step10desc')
            step = 11
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'
                

                setTimeout(function() {
                    idToShow = document.getElementById('step11Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
        else if (step === 12) {
            idToShow = document.getElementById('step12desc')
            step = 13
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'
                

                setTimeout(function() {
                    idToShow = document.getElementById('step13Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
    } 
    else if ( command === 'cd Documents'){
        if(step === 2) {
            idToShow = document.getElementById('step3desc')
            step = 3.5
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'

                setTimeout(function() {
                    idToShow = document.getElementById('step3aStart')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
        else if (step === 6) {
            idToShow = document.getElementById('step6desc')
            step = 7
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'

                setTimeout(function() {
                    idToShow = document.getElementById('step7Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
    } 
    else if ( command === 'cd ..' ) {
        if (step === 4) {
            idToShow = document.getElementById('step4desc')
            step = 5
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
    } 
    else if (command === 'clear') {
        if (step === 5) {
            idToShow = document.getElementById('step5desc')
            hide = document.getElementById('step1Start')
            step = 6
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'
                hide.style.display = 'none'
                hide = document.getElementById('step2Start')
                hide.style.display = 'none'
                hide = document.getElementById('step3Start')
                hide.style.display = 'none'
                hide = document.getElementById('step3aStart')
                hide.style.display = 'none'

                setTimeout(function() {
                    idToShow = document.getElementById('step6Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
    }
    else if (command === 'mkdir Test') {
        if(step === 7) {
            idToShow = document.getElementById('step7desc')
            step = 8
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'

                setTimeout(function() {
                    idToShow = document.getElementById('step8Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
    }
    else if (command === 'cd Test') {
        if (step === 9) {
            idToShow = document.getElementById('step9desc')
            hide = document.getElementById('step4Start')
            step = 10
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'
                hide.style.display = 'none'
                hide = document.getElementById('step5Start')
                hide.style.display = 'none'
                hide = document.getElementById('step6Start')
                hide.style.display = 'none'
                hide = document.getElementById('step7Start')
                hide.style.display = 'none'

                setTimeout(function() {
                    idToShow = document.getElementById('step10Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
    }
    else if (command == 'touch index.html') {
        if (step === 11) {
            idToShow = document.getElementById('step11desc')
            step = 12
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'

                setTimeout(function() {
                    idToShow = document.getElementById('step12Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
        }
    }
    else if (command === 'cd ../..') {
        if(step === 13) {
            idToShow = document.getElementById('step13desc')
            hide = document.getElementById('step8Start')
            step = 14
            setTimeout(function() {
                idToShow.style.display = 'block'
                idToShow.style.backgroundColor = 'green'
                idToShow.style.color = 'white'
                idToShow.style.padding = '.5em'
                hide.style.display = 'none'
                hide = document.getElementById('step9Start')
                hide.style.display = 'none'
                hide = document.getElementById('step10Start')
                hide.style.display = 'none'
                hide = document.getElementById('step11Start')
                hide.style.display = 'none'
                hide = document.getElementById('step12Start')
                hide.style.display = 'none'

                setTimeout(function() {
                    idToShow = document.getElementById('step14Start')
                    idToShow.style.display = 'table-row'
                    hide = document.getElementById('step13Start')
                    hide.style.display = 'none'

                    setTimeout(function() {
                        clearTerminal()

                        setTimeout(function() {
                            finalTerm()
                        }, 1000)
                    }, 1000)
                }, 2000)
            }, 2000)
        }
    }
    else {
        console.log('wait')
    }

}