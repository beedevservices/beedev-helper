$(document).ready(function(){
    $('#showHTML').click(function() {
        $('#htmlHide').animate( {
            width: 'toggle'
        })
        $('#htmlHide').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showCSS').click(function() {
        $('#cssHide').animate( {
            width: 'toggle'
        })
        $('#cssHide').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showJS').click(function() {
        $('#jsHide').animate( {
            width: 'toggle'
        })
        $('#jsHide').css({
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

function copyTriangle() {
    var copyText = document.querySelector('#triangle')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }
  function copyStop() {
    var copyText = document.querySelector('#stop')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }
  function copyHeart() {
    var copyText = document.querySelector('#heart')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }
  function copyDiamond() {
    var copyText = document.querySelector('#diamond')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }