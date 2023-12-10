$(document).ready(function(){
    // Menu Items
    $('#showFundamentals').click(function() {
        $('#hideFundamentals').animate( {
            width: 'toggle'
        })
        $('#hidePython').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
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
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
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
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hidePython').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
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
    $('#showJava').click(function() {
        $('#hideJava').animate( {
            width: 'toggle'
        })
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hidePython').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showCSharp').click(function() {
        $('#hideCSharp').animate( {
            width: 'toggle'
        })
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hidePython').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
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
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hidePython').css({
            'display': 'none',
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
    $('#showCyberSecurity').click(function() {
        $('#hideCyberSecurity').animate( {
            width: 'toggle'
        })
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
        })
        $('#hidePython').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showDataScience').click(function() {
        $('#hideScience').animate( {
            width: 'toggle'
        })
        $('#hideFundamentals').css({
            'display': 'none',
        })
        $('#hideReact').css({
            'display': 'none',
        })
        $('#hideJava').css({
            'display': 'none',
        })
        $('#hideCSharp').css({
            'display': 'none',
        })
        $('#hideCommands').css({
            'display': 'none',
        })
        $('#hideCyberSecurity').css({
            'display': 'none',
        })
        $('#hidePython').css({
            'display': 'none',
        })
        $('#hideDataScience').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    // Starts Resources
    $('#showBasic').click(function() {
        $('#hideBasic').animate( {
            width: 'toggle'
        })
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideBlogRss').css({
            'display': 'none'
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
        $('#hideHtmlCss').css({
            'display': 'none'
        })
        $('#hideJs').css({
            'display': 'none'
        })
        $('#hideFullStack').css({
            'display': 'none'
        })
        $('#hideIde').css({
            'display': 'none'
        })
        $('#hidePlaygrounds').css({
            'display': 'none'
        })
        $('#hideResources').css({
            'display': 'none'
        })
        $('#hideChallenges').css({
            'display': 'none'
        })
        $('#hideBasic').css({
            'display': 'none'
        })
        $('#hideHackathons').css({
            'display': 'none'
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
    // CSS Playgrounds
    $('#showInlineBlock').click(function() {
        $('#hideInlineBlock').animate( {
            width: 'toggle'
        })
        $('#hideFlexWrap').css({
            'display': 'none'
        })
        $('#hideDisplayFlex').css({
            'display': 'none'
        })
        $('#hideBoxModel').css({
            'display': 'none'
        })
        $('#hidePosition').css({
            'display': 'none'
        })
        $('#hideInlineBlock').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showFlexWrap').click(function() {
        $('#hideFlexWrap').animate( {
            width: 'toggle'
        })
        $('#hideInlineBlock').css({
            'display': 'none'
        })
        $('#hideDisplayFlex').css({
            'display': 'none'
        })
        $('#hideBoxModel').css({
            'display': 'none'
        })
        $('#hidePosition').css({
            'display': 'none'
        })
        $('#hideFlexWrap').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showDisplayFlex').click(function() {
        $('#hideDisplayFlex').animate( {
            width: 'toggle'
        })
        $('#hideFlexWrap').css({
            'display': 'none'
        })
        $('#hideInlineBlock').css({
            'display': 'none'
        })
        $('#hideBoxModel').css({
            'display': 'none'
        })
        $('#hidePosition').css({
            'display': 'none'
        })
        $('#hideDisplayFlex').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showBoxModel').click(function() {
        $('#hideBoxModel').animate( {
            width: 'toggle'
        })
        $('#hideFlexWrap').css({
            'display': 'none'
        })
        $('#hideDisplayFlex').css({
            'display': 'none'
        })
        $('#hideInlineBlock').css({
            'display': 'none'
        })
        $('#hidePosition').css({
            'display': 'none'
        })
        $('#hideBoxModel').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showPosition').click(function() {
        $('#hidePosition').animate( {
            width: 'toggle'
        })
        $('#hideFlexWrap').css({
            'display': 'none'
        })
        $('#hideDisplayFlex').css({
            'display': 'none'
        })
        $('#hideBoxModel').css({
            'display': 'none'
        })
        $('#hideInlineBlock').css({
            'display': 'none'
        })
        $('#hidePosition').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    // Starts JS Playgrounds
    $('#showJsEvents').click(function() {
        $('#hideJsEvents').animate( {
            width: 'toggle'
        })
        $('#hideJsLoops').css({
            'display': 'none'
        })
        $('#hideJsArrayData').css({
            'display': 'none'
        })
        $('#hideJsConditionals').css({
            'display': 'none'
        })
        $('#hideJsEvents').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showJsLoops').click(function() {
        $('#hideJsLoops').animate( {
            width: 'toggle'
        })
        $('#hideJsEvents').css({
            'display': 'none'
        })
        $('#hideJsArrayData').css({
            'display': 'none'
        })
        $('#hideJsConditionals').css({
            'display': 'none'
        })
        $('#hideJsLoops').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showJsArrayData').click(function() {
        $('#hideJsArrayData').animate( {
            width: 'toggle'
        })
        $('#hideJsLoops').css({
            'display': 'none'
        })
        $('#hideJsEvents').css({
            'display': 'none'
        })
        $('#hideJsConditionals').css({
            'display': 'none'
        })
        $('#hideJsArrayData').css({
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#DBEBD4',
            'z-index': '2',
            'margin': '.5em'
        })
    })
    $('#showJsConditionals').click(function() {
        $('#hideJsConditionals').animate( {
            width: 'toggle'
        })
        $('#hideJsLoops').css({
            'display': 'none'
        })
        $('#hideJsEvents').css({
            'display': 'none'
        })
        $('#hideJsArrayData').css({
            'display': 'none'
        })
        $('#hideJsConditionals').css({
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