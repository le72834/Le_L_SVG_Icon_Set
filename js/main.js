// this is a self-invoking anonymous function
// also called an function(){}
// also called a module

(() => {
  console.log("some message - from JavaScript");
// find the button element on the page by its ID with JavaScript
  let theHeading = document.querySelector('h1'),
      //svgImage = document.querySelector("#svgGraphic")
      allSVGs = document.querySelectorAll(".svg");

  // this is function changes the heading text

  /* function changeText() {
    theHeading.textContent ="Hello World";
  }
  */
  //log the id of the svg to the console when user hovers on it
  function logSVG() {
    console.log(this.id);
  }


  //theButton.addEventListener("click", changeText);
  //svgImage.addEventListener("click", logSVG);
  //svgImage2.addEventListener("click", logSVG);
  //loop through the collection and apply our event handling to each element
  allSVGs.forEach(item => item.addEventListener("click", logSVG));

  //document.querySelector('h1').textContent ="Hello World";







})();
