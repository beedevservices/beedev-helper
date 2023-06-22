// The console element
let result = document.getElementById('update')

// Code for Events page
function aPrint() {
    result.innerText = 'Hello World'
}
function theAlert() {
    alert("Hello World")
    result.innerText = "An alert said Hello World"
}
function valueC() {
    var a = 2
    var b = 3
    var c = a + b
    result.innerText = "the value of c is: 5"
}
function growMe(element) {
    element.style.height = "200px"
    element.style.width = "500px"
}
function returnMe(element) {
    element.style.height = "50px"
    element.style.width = "300px"
}

// Reusable Code for Loop Page
function nextStep() {
    result.style.color = 'white'
    result.innerText = 'PROCEED TO NEXT QUESTION ON THE LEFT'
}
function great() {
    result.style.color = '#95BD83'
    result.innerText = 'Great Job'
}
function tryAgain() {
    result.innerText = 'Please try again'
}
function clearTerm() {
    result.innerHTML = ''
}
function jobDone() {
    result.style.color = 'white'
    result.innerText = 'the loop is now finished nothing to print'
}
function printValue(a) {
    result.style.color = 'yellow'
    result.innerText = `the value of i is: ${a}`
}
function followInstructions() {
    result.innerText = 'I will now follow my instructions'
}

// Actual loop code
function stepOne() {
    var selection = document.loopStart.lessThan.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    // Correct choice
    if(selection == 'Yes') {
        // Run this
        great()
        // Then wait 2 seconds
        setTimeout(function() {
            // And run this
            followInstructions()

            // Wait 2 seconds
            setTimeout(function() {
                // Run this
                printValue(0)
                // Wait 2 seconds
                setTimeout(function() {
                    // Run this
                    clearTerm()
                    stepOne.style.display = 'none'
                    // Wait 2 seconds
                    setTimeout(function() {
                        // Run this
                        nextStep()
                        sTwo.style.display = 'flex'
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    } else {
        tryAgain()
        setTimeout(function() {
            clearTerm()
        }, 2000)
    }
}
function stepTwo() {
    var selection = document.sTwo.lessThan.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    var sThree = document.getElementById('sThree')
    if(selection == 'Yes') {
        great()
        setTimeout(function() {
            followInstructions()
            setTimeout(function() {
                printValue(1)
                setTimeout(function() {
                    clearTerm()
                    stepOne.style.display = 'none'
                    sTwo.style.display = 'none'
                    setTimeout(function() {
                        nextStep()
                        sThree.style.display = 'flex'
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    } else {
        tryAgain()
        setTimeout(function() {
            clearTerm()
        }, 2000)
    }
}
function stepThree() {
    var selection = document.sThree.lessThan.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    var sThree = document.getElementById('sThree')
    var sFour = document.getElementById('finalStep')
    if(selection == 'No') {
        great()
        setTimeout(function() {
            followInstructions()
            setTimeout(function() {
                jobDone()
                setTimeout(function() {
                    clearTerm()
                    stepOne.style.display = 'none'
                    sTwo.style.display = 'none'
                    sThree.style.display = 'none'
                    setTimeout(function() {
                        result.innerText = 'Another round?'
                        sFour.style.display = 'flex'
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    } else {
        tryAgain()
        setTimeout(function() {
            clearTerm()
        }, 2000)
    }
}
function final() {
    var again = document.startOver.choice.value
    var stepOne = document.getElementById('loopStart')
    var sTwo = document.getElementById('sTwo')
    var sThree = document.getElementById('sThree')
    var sFour = document.getElementById('finalStep')
    if(again == 'Yes') {
        stepOne.style.display = 'flex'
        sTwo.style.display = 'none'
        sThree.style.display = 'none'
        sFour.style.display = 'none'
    } else {
        result.innerText = 'Hope this helped!'
    }
}

// Manipulating Arrays Code
let arr01 = ['Bob', 'Jane', 'Mary', 'John']

function arrPrint() {
    result.innerText = `${arr01}`
}
function arrPush() {
    arr01.push('Billy')
    result.innerText = `${arr01}`
}
function arrPop() {
    arr01.pop()
    result.innerText = `${arr01}`
}
function arrShift() {
    arr01.shift()
    result.innerText = `${arr01}`
}
function arrUnshift() {
    arr01.unshift('Ninja')
    result.innerText = `${arr01}`
}
function arrSplice21() {
    arr01.splice(2,1)
    result.innerText = `${arr01}`
}
function arrSplice10Hello() {
    arr01.splice(1,0 ,'Hello')
    result.innerText = `${arr01}`
}
// Conditional Code

function v01(x) {
    if(x < 10) {
        result.innerText = `${x} is less than 10`
    } else {
        result.innerText = `${x} is bigger than 10`
    }
}
function v02(x) {
    if(x < 5) {
        result.innerText = `${x} is less than 5`
    }
    if(x <=5) {
        result.innerText = `${x} is less than or equal to 5`
    } else {
        result.innerText = `${x} is bigger than 5`
    }
}




$(document).ready(function() {
    $('#showConsole').click(function() {
        $('#hideConsole').animate( {
            width: 'toggle'
        })
        $('#hideAlert').css({
            'display': 'none',
        })
        $('#hideAdding').css({
            'display': 'none',
        })
        $('#hideGrow').css({
            'display': 'none',
        })
        $('#hideConsole').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showAlert').click(function() {
        $('#hideAlert').animate( {
            width: 'toggle'
        })
        $('#hideConsole').css({
            'display': 'none',
        })
        $('#hideAdding').css({
            'display': 'none',
        })
        $('#hideGrow').css({
            'display': 'none',
        })
        $('#hideAlert').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showAdding').click(function() {
        $('#hideAdding').animate( {
            width: 'toggle'
        })
        $('#hideAlert').css({
            'display': 'none',
        })
        $('#hideConsole').css({
            'display': 'none,'
        })
        $('#hideGrow').css({
            'display': 'none',
        })
        $('#hideAdding').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showGrow').click(function() {
        $('#hideGrow').animate( {
            width: 'toggle'
        })
        $('#hideAlert').css({
            'display': 'none',
        })
        $('#hideAdding').css({
            'display': 'none',
        })
        $('#hideConsole').css({
            'display': 'none',
        })
        $('#hideGrow').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
})
