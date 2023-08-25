let button = document.querySelector("#myButton");
let messageDisplay = document.querySelector("#messageDisplay");

button.addEventListener("click", function() {
    messageDisplay.textContent = "Button clicked"

    setTimeout(function() {
        messageDisplay.textContent = "";

    }, 1000) 
});

const box = document.querySelector('.box');
box.addEventListener("mouseover", function() {
    box.textContent = 'Mouse over';
});

box.addEventListener('mouseout', function() {
    box.textContent = 'Hover over me';

});


