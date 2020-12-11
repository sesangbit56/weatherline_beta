var fileFullName = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
var nav = document.getElementsByClassName("nav-bar")[0];

if (fileFullName == "user.html") {
    nav.className = "nav-bar-user";
} else if(fileFullName == "main.html") {
    nav.className = "nav-bar";
} else {}

