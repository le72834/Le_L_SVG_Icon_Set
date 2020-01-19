// this is a self-invoking anonymous function
// also called an function(){}
// also called a module

(() => {
  console.log("some message - from JavaScript");
  //find the button element on the page by its ID with JavaScript
  let allSVGs = document.querySelectorAll(".svg");

  //log the id of the svg to the console when user hovers on it
  function logSVG() {
    console.log(this.id);
  }

  //loop through the collection and apply our event handling to each element
  allSVGs.forEach(item => item.addEventListener("click", logSVG));












})();
