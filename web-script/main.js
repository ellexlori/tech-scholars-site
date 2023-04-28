//NAV BAR//
function myFunction() {
  var x = document.getElementById("interNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}