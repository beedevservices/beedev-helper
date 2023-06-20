let result = document.getElementById('update')

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
$(document).ready(function() {
    $('#showConsole').click(function() {
        $('#hideConsole').animate( {
            width: 'toggle'
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