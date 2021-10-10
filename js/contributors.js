$(document).ready(function() {
    $.get('https://api.github.com/repos/beedevservices/beedev-helper/contributors', function(res) {
        console.log(res)
        var html_str = "";
        for(var i = 0; i < res.length; i++) {
            html_str += "<div class='contrib'>";
            html_str += "<h3>Github User</h3>"
            html_str += "<h4>";
            html_str += "<a href='" + res[i].html_url + "' target='_blank'>";
            html_str += res[i].login;
            html_str += "</a></h4>";
            html_str += "<img src='" + res[i].avatar_url + "' alt='" + res[i].login + "' class='contribImg'>";
            html_str += "</div>"
        }
        $(".contribs").html(html_str);
    }, "json");
})


// avatar_url: "https://avatars.githubusercontent.com/u/59035920?v=4"
// html_url: "https://github.com/melissa-24"
// login: "melissa-24"