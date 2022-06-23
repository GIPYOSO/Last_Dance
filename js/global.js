var selectBox = null;
var selectButton = null;

$(document).ready(function(){
    init();
    toggleBox(selectBox,selectButton);
});
function init(){
    selectBox = $('header > div > div ul');
    selectButton = $('header > div > div button');
}
function toggleBox(selectBox,selectButton){
    $(selectButton).click(function(){
        $(selectBox).toggleClass('active');
    });
}