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