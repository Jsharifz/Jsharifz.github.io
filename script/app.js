myID = document.getElementById('nav')

myID.className = 'nav-hide'

var navScroll = function() {
  var y = window.scrollY
  if (y >= 350) {
    myID.className = 'nav-show'
  } else {
    myID.className = 'nav-hide'
  }
}

window.addEventListener('scroll', navScroll)
