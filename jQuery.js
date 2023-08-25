$(document).ready(function()  {
    const box = $(".box");
});

box.mouseover(function() {
    box.text = 'Mouse over';

});

box.mouseout(function() {
    box.text = 'Hover over me';

});

box.click(function() {
    box.text = 'Click me';

});