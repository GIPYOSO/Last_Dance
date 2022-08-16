$(document).ready(function(){
    accordionUI();
});
function accordionUI(){
    var listTarget = $(".accordionContainer li");
    $(listTarget).click(function(){
        $(this).toggleClass('active');
    });
}

$(document).ready(function(){
    mapaccordionUI();
});
function mapccordionUI(){
    var listTarget1 = $(".mapslist");
    $(listTarget1).click(function(){
        $('.mapslist').toggleClass('active');
    });
}

