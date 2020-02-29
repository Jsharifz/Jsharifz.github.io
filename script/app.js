myID = document.getElementById("nav")

var navScroll = function() {
    var y = window.scrollY
    if (y >= 350) {
        myID.className = "nav-show"
    } else {
        myID.className = "nav-hide"
    }
}

window.addEventListener("scroll", navScroll)
