const fakeTerminal = document.getElementById('fakeTerminal')
const termPrompt = document.getElementById('term')
const commandInput = document.getElementById('commandInput')
const outputContainer = document.getElementById('output')
const fileList = ['Documents', 'Pictures'];
var fileLocation = '/Users/guest'
var baseLocation = 'BeeDevHelper $~/'
var step = 0
var final = 'Commands practiced:\ngit clone\ngit status\n git add\ngit commit\ngit push'
var idToShow = ''
var hide = ''
var outputText = ''
const gitClone = "Cloning into 'beedev-helper'...\nremote: Enumerating objects: 613, done.\nremote: Counting objects: 100% (613/613), done.\nremote: Compressing objects: 100% (341/341), done.\nremote: Total 613 (delta 368), reused 486 (delta 252), pack-reused 0 (from 0)\nReceiving objects: 100% (613/613), 217.63 KiB | 3.11 MiB/s, done.\nResolving deltas: 100% (368/368), done."
const gitStatus = 'On branch main\nChanges not staged for commit:\n(use "git add <file>..." to update what will be committed)\n(use "git restore <file>..." to discard changes in working directory)\n    modified:   index.html\nno changes added to commit (use "git add" and/or "git commit -a")'
const gitCommit = '[main 2069748] updated index page\n1 file changed, 4 insertions(+), 3 deletions(-)'
const gitPush = 'Enumerating objects: 9, done.\nCounting objects: 100% (9/9), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (5/5), done.\nWriting objects: 100% (5/5), 471 bytes | 471.00 KiB/s, done.\nTotal 5 (delta 3), reused 0 (delta 0), pack-reused 0\nremote: Resolving deltas: 100% (3/3), completed with 3 local objects.\nTo https://github.com/beedevservices/beedev-helper.git\n   74c7fc0..2069748  main -> main'

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
    termPrompt.innerHTML = `${final}`
    outputContainer.innerHTML = ''
    commandInput.value = ''
    commandInput.focus()
}
function resetFileList() {
    fileList.pop()
    fileList.pop()
    fileList.pop()
    fileList.pop()
    fileList.pop()
    fileList.pop()
    fileList.pop()
}
function unhide() {
    idToShow.style.display = 'block'
    idToShow.style.backgroundColor = 'green'
    idToShow.style.color = 'white'
    idToShow.style.padding = '.5em'
}

function executeBasicTerm() {
    var command = commandInput.value
    termPrompt.innerHTML += `<span class="user-command"> ${command}</span><br>`;
    outputText = ''
    if (command === 'pwd') {
        outputText = fileLocation
        termPrompt.innerHTML += `${outputText}<br>`
    }
    else if (command === 'ls') {
        outputText = fileList.map(item => `<span class="file">${item}</span>`).join(' ');
        termPrompt.innerHTML += `${outputText}<br>`
    }
    else if (command == 'cd Documents') {
        resetFileList()
        fileList.push('hello-world.html')
        fileList.push('Project')
        baseLocation += 'Documents/'
        fileLocation += '/Documents'
    }
    else if (command === 'git clone https://github.com/beedevservices/beedev-helper.git') {
        fileList.push('beedev-helper')
        outputText = gitClone
        termPrompt.innerHTML += `${outputText}<br>`
    } 
    else if (command === 'cd beedev-helper') {
        baseLocation += 'beedev-helper/'
        fileLocation += '/beedev-helper'
        clearTerminal()
        resetFileList()
        fileList.push('css')
        fileList.push('js')
        fileList.push('README.md')
        fileList.push('about.html')
        fileList.push('index.html')
        commandInput.value = ''
        commandInput.focus()
        unhideSteps(command)
        return
    }
    else if (command === 'git status') {
        outputText = gitStatus
        termPrompt.innerHTML += `${outputText}<br>`
    }
    else if (command === 'git add .') {
        termPrompt.innerHTML += `${baseLocation}`
        commandInput.value = ''
        commandInput.focus()
        unhideSteps(command)
        return
    }
    else if (command === "git commit -m 'updated index page'") {
        clearTerminal()
        termPrompt.innerHTML += `<span class="user-command"> ${command}</span><br>`;
        outputText = ''
        outputText = gitCommit
        termPrompt.innerHTML += `${outputText}<br>`
        termPrompt.innerHTML += `${baseLocation}`
        commandInput.value = ''
        commandInput.focus()
        unhideSteps(command)
        return
    }
    else if (command === 'git push') {
        clearTerminal()
        termPrompt.innerHTML += `<span class="user-command"> ${command}</span><br>`;
        outputText = ''
        outputText = gitPush
        termPrompt.innerHTML += `${outputText}<br>`
        termPrompt.innerHTML += `${baseLocation}`
        commandInput.value = ''
        commandInput.focus()
        unhideSteps(command)
        return
    }
    else {
        const outputText = `Executing: Command not found ${command}`;
        termPrompt.innerHTML += `${outputText}<br>`;
    }
    termPrompt.innerHTML += `${baseLocation}`
    commandInput.value = ''
    commandInput.focus()
}


function unhideSteps(command) {
    if(command == 'pwd') {
        if(step === 0) {
            idToShow = document.getElementById('step1desc')
            step = 1
            setTimeout(function() {
                unhide()

                setTimeout(function() {
                    idToShow = document.getElementById('step2Start')
                    idToShow.style.display = 'table-row'
                }, 2000)
            }, 2000)
            console.log(step)
        }
    } 
    else {
        console.log('wait')
    }

}