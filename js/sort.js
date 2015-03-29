var title = document.getElementsByTagName("h3");
var paras = document.getElementsByClassName("package");
var inputs = document.getElementsByClassName("alphabetSort");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = function() {
    var letter = this.value[0];
    for (var j = 0; j < paras.length; j++) {
      if (title[j].innerHTML.toUpperCase()[0] != letter.toUpperCase()) {
        paras[j].style.display = "none";
      } else {
        paras[j].style.display = "inherit";
      }
    }
  };
}

function showAll() {
    for (var j = 0; j < paras.length; j++) {
        paras[j].style.display = "inherit";
    }
}



var hot = document.getElementsByClassName("hot");
var mild = document.getElementsByClassName("mild");
var cold = document.getElementsByClassName("cold");

function hot() {
    if(hot = hot) {
    hot.style.display = "inherit";
    } else {
    hot.style.display = "none";   
    }
}