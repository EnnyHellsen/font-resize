window.onerror = () => {
    const removeById = (id) => {
        var el = document.getElementById(id);
        el.parentElement.removeChild(el);
    }
    removeById('textFitLib');
    setTimeout(function () {
        removeById('slowMotion');
        // Switch to fast lib which doesn't use async/await
        var fastScript = document.createElement('script');
        fastScript.src = 'textFit.js';
        fastScript.onload = () => {
            waitForTextFit();
        }
        document.body.appendChild(fastScript);
    }, 16);
};