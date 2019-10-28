// Find the input field and slider in the html
const div = document.querySelector('.output-div');
const textInput = document.querySelector('.input-text');
const slider = document.querySelector('.slider');

// Get localstorage values
const previousTextValue = localStorage.getItem('text');
const previousSliderValue = localStorage.getItem('slider');

// Set input fields and output div with previous values
const defaultString = 'Natural Cycles';
div.innerHTML = previousTextValue || defaultString;
textInput.value = previousTextValue || defaultString;
slider.value = previousSliderValue;
div.style.width = previousSliderValue + 'vw';

// Get the height of the output div as an integer
const divHeight = parseInt(window.getComputedStyle(div).getPropertyValue('height'));

// Use textFit Library to size the outputted text with the div width and height as max font size
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
// and call the sizing function
const updateText = () => {
  div.style.width = slider.value + 'vw';
  div.innerHTML = textInput.value;
  doFit();

  // save values to localstorage to access on browser refresh
  localStorage.setItem('slider', slider.value);
  localStorage.setItem('text', textInput.value);
}

slider.addEventListener('input', updateText);
textInput.addEventListener('input', updateText);