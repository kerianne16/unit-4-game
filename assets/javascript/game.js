
$(document).ready(function () {
    alert("Get Ready to Play!");
    var targetNum = Math.floor((Math.random() * 120) + 19);
    $("#target").text(targetNum);


    var crystalOne = Math.floor((Math.random() * 12) + 1);
    var crystalTwo = Math.floor((Math.random() * 12) + 1);
    var crystalThree = Math.floor((Math.random() * 12) + 1);
    var crystalFour = Math.floor((Math.random() * 12) + 1);

    var wins = 0;
    var losses = 0;
    var total = 0;



    $("#crystalOne").on('click', function () {
        $("#crystalOne").justFlipIt({
            Click: true,
            Template: '<img id="crystalOne" src="./assets/images/crystalone.jpg" height="200px" width="200px" ;></img>'
        });
        total = total + crystalOne;
        $("#current").text(("" + total));
        console.log("crystal1 total:" + total);
        checkWin();
        checkLoss();
    });

    $("#crystalTwo").on('click', function () {
        $("#crystalTwo").justFlipIt({
            Click: true,
            Template: '<img id="crystalTwo" src="./assets/images/crystalone.jpg" height="200px" width="200px" ;></img>'
        });
        total = total + crystalTwo;
        $("#current").text(("" + total));
        console.log("crystal2 total:" + total);
        checkWin();
        checkLoss();
    });


    $("#crystalThree").on('click', function () {
        $("#crystalThree").justFlipIt({
            Click: true,
            Template: '<img id="crystalThree" src="./assets/images/crystalone.jpg" height="200px" width="200px"></img>'
        });
        total = total + crystalThree;
        $("#current").text(("" + total));
        console.log("crystal3 total:" + total);
        checkWin();
        checkLoss();
    });


    $("#crystalFour").on('click', function () {
        $("#crystalFour").justFlipIt({
            Click: true,
            Template: '<img id="crystalFour" src="./assets/images/crystalone.jpg" height="200px" width="200px"></img>'
        });
        total = total + crystalFour;
        $("#current").text(("" + total));
        console.log("crystal4 total:" + total);
        checkWin();
        checkLoss();
    });


    $("button").click(function () {
        resetGame();
    });

    function continueGame() {
        alert("Game continues...");
        targetNum = Math.floor((Math.random() * 100) + 4);

        crystalOne = Math.floor((Math.random() * 10) + 1);
        crystalTwo = Math.floor((Math.random() * 10) + 1);
        crystalThree = Math.floor((Math.random() * 10) + 1);
        crystalFour = Math.floor((Math.random() * 10) + 1);

        total = 0;


        $("#target").text(targetNum);
        $("#current").text(total);
        $("#green").text(crystalOne);
        $("#pink").text(crystalTwo);
        $("#purple").text(crystalThree);
        $("#white").text(crystalFour);
    };

    function checkWin() {
        if (total === targetNum) {
            wins++;
            $("#win").text(("" + wins));
            alert('You win!');

            continueGame();
        };
    }

    function checkLoss() {
        if (total !== targetNum && total > targetNum) {
            losses++;
            alert('Sorry. You lose!');
            $("#loss").text(("" + losses));
            continueGame();
        };
    }


    setInterval(blinktext, 500);
    var txt = "";
    var count = 0;
    function blinktext() {
        var cntrl = document.getElementById("txtblinkingtext");
        if (!!cntrl) {
            if (count == 0)
                txt = cntrl.value;
            if (count % 2 == 0)
                cntrl.value = "";
            else
                cntrl.value = txt;
            count++;
        }
    }




    function resetGame() {
        alert("Game over.");

        var targetNum = Math.floor((Math.random() * 100) + 4);

        var crystalOne = Math.floor((Math.random() * 10) + 1);
        var crystalTwo = Math.floor((Math.random() * 10) + 1);
        var crystalThree = Math.floor((Math.random() * 10) + 1);
        var crystalFour = Math.floor((Math.random() * 10) + 1);

        var wins = 0;
        var losses = 0;
        var total = 0;

        $("#target").text(targetNum);
        $("#current").text(total);
        $("#win").text(wins);
        $("#loss").text(losses);
        $("#green").text(crystalOne);
        $("#pink").text(crystalTwo);
        $("#purple").text(crystalThree);
        $("#white").text(crystalFour);
        alert("Get Ready!");
    };
});

