// ***** The console element and reusable code ***** //
let result = document.getElementById('update')
function clearTerm() {
    result.innerHTML = ''
}
function tryAgain() {
    result.innerText = 'Please try again'
}
function great() {
    result.style.color = '#95BD83'
    result.innerText = 'Great Job'
}
function nextStep() {
    result.style.color = 'white'
    result.innerText = 'PROCEED TO NEXT QUESTION ON THE LEFT'
}
function jobDone() {
    result.style.color = 'white'
    result.innerText = 'Function is complete'
}
function followInstructions() {
    result.innerText = 'I will now follow my instructions'
}
function running() {
    result.innerText = 'Running the Code'
}
function over() {
    result.innerText = 'You have run out of tries.  I will now show you the solution'
}

// ***** Reusable Code ***** //

function printValue(a) {
    result.style.color = 'yellow'
    result.innerText = `the value of i is: ${a}`
}
function altPrintValue(a) {
    result.style.color = 'yellow'
    result.innerText = `${a}`
}
var roundCount = 0
function runCode(a) {
        clearTerm()
        altPrintValue(a)
}

// ***** Python Loops ***** //

function pyLoopOne() {
    var thePrint = `0\n1\n2\n3\n4`
    var selection = document.loopOneStart.guess.value
    console.log(selection)
    roundCount++
    console.log(roundCount)
    if(roundCount < 2) {
        console.log('in if')
        if(selection == '4') {
            console.log('in next if')
            great()
            setTimeout(function() {
                running()
                setTimeout(function() {
                    
                    runCode(thePrint)
                }, 2000)
            }, 2000)
            roundCount = 0
        } else {
            tryAgain()
            setTimeout(function() {
                clearTerm()
            }, 2000)
        }
    } else {
        over()
        setTimeout(function() {
            clearTerm()
            setTimeout(function() {
                runCode(thePrint)
            }, 2000)
        }, 2000)
    }
}