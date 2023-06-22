// ***** The console element and reusable code ***** //
let result = document.getElementById('update')
function clearTerm() {
    result.innerHTML = ''
}
function tryAgain() {
    result.innerText = 'Please try again'
}

// ***** Code for Events page ***** //
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

// ***** Reusable Code ***** //
function nextStep() {
    result.style.color = 'white'
    result.innerText = 'PROCEED TO NEXT QUESTION ON THE LEFT'
}
function great() {
    result.style.color = '#95BD83'
    result.innerText = 'Great Job'
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

// ***** Actual loop code ***** //
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

// ***** Manipulating Arrays Code ***** //
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

// ***** Conditional Code ***** //

let x = document.condition.num.value
let inpVar = document.getElementById('inpVar01')
let ver01 = document.getElementById('version01')
let ver02 = document.getElementById('version02')
let condForm = document.getElementById('condForm')
let f = document.getElementById('first')
let s = document.getElementById('second')

function v01(x) {
    if(x < 10) {
        return true
    } else {
        return false
    }
}
function v02(x) {
    let if01 = ''
    let if02 = ''
    let newElse = ''
    let arr02 = []
    if(x < 5) {
        if01 = 'if01'
    }
    if(x <= 5) {
        if02='if02'
    } else {
        newElse = 'else'
    }
    arr02.push(if01)
    arr02.push(if02)
    arr02.push(newElse)
    return arr02
}

function startCond() {
    x = document.condition.num.value
    if(x > 20 || x < 0) {
        result.style.color = 'red'
        result.style.fontSize = '2em'
        result.innerText = 'Please chose a number between 0 and 20'
    } else {
        result.style.fontSize = '1.2em'
        result.style.color = '#95BD83'
        result.innerText = `x = ${x} for the following formulas`
        theAnswer()
        setTimeout(function() {
            ver02.style.display = 'none'
            condForm.style.display = 'none'
            clearTerm()
            ver01.style.display = 'block'
            inpVar.innerText = x
            setTimeout(function() {
                f.style.display = 'flex'
                console.log(x)
                return x
            }, 2000)
        }, 2000)
    }
}
function onToSecond(x) {
    setTimeout(function() {
        result.innerText = 'Lets try another one'
        setTimeout(function() {
            clearTerm()
            ver01.style.display = 'none'
            f.style.display = 'none'
            setTimeout(function() {
                result.innerText = `x is still ${x}`
                setTimeout(function() {
                    inpVar = document.getElementById('inpVar02')
                    inpVar.innerText = x
                    ver02.style.display = 'block'
                    setTimeout(function() {
                        s.style.display = 'flex'

                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}
function correctIf01(x) {
    setTimeout(function() {
        result.innerText = `${x}, is less than 10`
        onToSecond(x)
    },2000)
}
function correct1If(x) {
    setTimeout(function() {
        result.innerText =`${x}, is less than or equal to 5`
        finish()
    }, 2000)
}
function correct2If(x) {
    setTimeout(function() {
        result.innerText = `
        ${x}, is less than 5
        ${x}, is less than or equal to 5
        `
        finish()
    }, 2000)
}
function correctElse01(x) {
    setTimeout(function() {
        result.innerText = `${x} is bigger than 10`
        onToSecond(x)
    }, 2000)
}
function correctElse02(x) {
    setTimeout(function() {
        result.innerText = `${x} is bigger than 5`
        finish()
    }, 2000)
}
function theFirst() {
    let choice = document.first.ifCond.value
    let answer = v01(x)
    console.log(choice, answer)
    if(answer == true && choice == 'true') {
        great()
        correctIf01(x)
    }
    else if(answer == false && choice == 'false') {
        great()
        correctElse01(x)
    } else {
        tryAgain()
    }
}
function theAnswer() {
    let answer = v02(x)
    let opt01 = answer[0]
    let opt02 = answer[1]
    let opt03 = answer[2]
    console.log('01',opt01, '02', opt02, '03', opt03)
}
function finish() {
    setTimeout(function() {
        clearTerm()
        ver01.style.display = 'none'
        ver02.style.display = 'none'
        f.style.display = 'none'
        s.style.display = 'none'
        condForm.style.display = 'none'
        setTimeout(function() {
            result.innerText = `
            Thank you for using this playground
            Feel free to play again! 
            Just give me a moment to get it set back up
            `
            setTimeout(function() {
                clearTerm()
                setTimeout(function() {
                    condForm.style.display = 'block'
                }, 4000)
            }, 4000)
        }, 2000)
    }, 2000)
}

function theSecond() {
    let choice = document.second.ifCond.value
    // answer = theAnswer(x)
    answer = v02(x)
    console.log(choice, answer)
    if(choice == 'if02' && answer[0] == '' && answer[1] == 'if02')  {
        great()
        correct1If(x)
    }
    else if(choice == 'both' && answer[0] == 'if01' && answer[1] == 'if02')  {
        great()
        correct2If(x)
    }
    else if(choice == 'newElse' && answer[2] == 'else')  {
        great()
        correctElse02(x)
    }
    else {
        result.innerText = 'Please take another look and try again'
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
