$(document).ready(function(){
    $('#showFundamentals').click(function() {
        $('#hideFundamentals').animate( {
            width: 'toggle'
        })
        $('#hideFundamentals').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showPython').click(function() {
        $('#hidePython').animate( {
            width: 'toggle'
        })
        $('#hidePython').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showReact').click(function() {
        $('#hideReact').animate( {
            width: 'toggle'
        })
        $('#hideReact').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showCommands').click(function() {
        $('#hideCommands').animate( {
            width: 'toggle'
        })
        $('#hideCommands').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showBasic').click(function() {
        $('#hideBasic').animate( {
            width: 'toggle'
        })
        $('#hideBasic').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showHtmlCss').click(function() {
        $('#hideHtmlCss').animate( {
            width: 'toggle'
        })
        $('#hideHtmlCss').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showJs').click(function() {
        $('#hideJs').animate( {
            width: 'toggle'
        })
        $('#hideJs').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showFullStack').click(function() {
        $('#hideFullStack').animate( {
            width: 'toggle'
        })
        $('#hideFullStack').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showIde').click(function() {
        $('#hideIde').animate( {
            width: 'toggle'
        })
        $('#hideIde').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showPlaygrounds').click(function() {
        $('#hidePlaygrounds').animate( {
            width: 'toggle'
        })
        $('#hidePlaygrounds').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showResources').click(function() {
        $('#hideResources').animate( {
            width: 'toggle'
        })
        $('#hideResources').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showChallenges').click(function() {
        $('#hideChallenges').animate( {
            width: 'toggle'
        })
        $('#hideChallenges').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showHackathons').click(function() {
        $('#hideHackathons').animate( {
            width: 'toggle'
        })
        $('#hideHackathons').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showBlogRss').click(function() {
        $('#hideBlogRss').animate( {
            width: 'toggle'
        })
        $('#hideBlogRss').css({
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