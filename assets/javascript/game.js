var randomResults;
var win;
var lost;


for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12)
    console.log(random);

    var crystal = ("<div>");

    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystal").append(crystal);




}