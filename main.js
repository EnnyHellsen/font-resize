const div = document.querySelector('.output-div');
const textInput = document.querySelector('.input-text');
const slider = document.querySelector('.slider');

// Get the height of the output div as an integer
const divHeight = parseInt(window.getComputedStyle(div).getPropertyValue('height'));

// Use textFit Library to size the outputted text with the div height as max font size
const doFit = () => {
  textFit(document.querySelector('.output-div'), { maxFontSize: divHeight });
}

// Wait for textFit to load
const waitForTextFit = () => {
  let interval = setInterval(function () {
    if (window.textFit) {
      clearInterval(interval);
      doFit();
    }
  }, 50);
}
waitForTextFit();

// Set the output div to size depending on range slider value and contain input field text string
// Call the sizing function
const updateText = () => {
  div.style.width = slider.value + 'vw';
  div.innerHTML = textInput.value;
  doFit();
}

slider.addEventListener('input', updateText);
textInput.addEventListener('input', updateText);