/*
Keila Bowers
Student #: 0004632583
WDD244-0 Section 01
December 1, 2014
Week 1 - Analyze Duel1
 */

//self executing function
(function() {

    console.log("fight");

    var playerOneName = "Agent Coulson";
    var playerTwoName = "Loki";

    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    var round = 0;


    function fight() {
        console.log('in the fight function');
        alert(playerOneName + ":" + playerOneHealth + " *Start* " + playerTwoName + ":" + playerTwoHealth);
        for(var i=0; i<10; i++){
            //random formula: Math.floor(Math.random()*(max-min)+min);
            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth -= f1;
            playerTwoHealth -= f2;
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOneName + ":" + playerOneHealth + "  " + playerTwoName + ":" + playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round ++;
                alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
            } else{
                alert(results);
                break;
            }

        };

    };


    function winnerCheck() {
        console.log("in winner check");
        var result = "no winner";

        if(playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result = playerTwoName + " WINS!!!"
        } else if(playerTwoHealth<1) {
            result = playerOneName + " WINS!!!"
        };

        return result;
    };

    console.log('program starts');
    fight();


})();