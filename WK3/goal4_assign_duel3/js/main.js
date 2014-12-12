/*
Keila Bowers
Student #: 0004632583
WDD244-0 Section 01
December 12, 2014
Week 3 - Develop Duel 2
 */

//self executing function
(function() {

    console.log("fight"); //prints to console the words "Fight"

    //Dom Pieces
    var playerOne_txt = document.getElementById("coulson");
    var players[1]_txt = document.getElementById("loki");
    var round = document.getElementById("round");
    var button = document.getElementById("fight_btn");

    //Button Event
    button.addEventListener("click", fight, false);

    //Converted to object array
    var players = [
        {
            name:"Agent Coulson",
            Damage:20,
            Health:100
        },
        {
            name: "Loki",
            Damage: 20,
            Health: 100
        }];

    var round = 0; //the number the rounds start at

        //over all function that randomly depletes a fighters health and shows results and who one at that end of each round
    function fight() {
        console.log('in the fight function'); //prints to console so we know the fight function is working
        //pop alert to user to start the function that shows the name and health for both users and the word START
        alert(players[0].name + ":" + playerOne.maxHealth + " *Start* " + players[1].name + ":" + players[1].maxHealth); //edit variable to look at object
        for(var i=0; i<10; i++){ //incremental loop ten times
            //random formula: Math.floor(Math.random()*(max-min)+min);
            var minDamage1 = players[0].maxDamage * .5; //Player 1 determines minimum damage by taking max and dividing it in half //edit var to look at object
            var minDamage2 = players[1].maxDamage * .5; //Player 2 determines minimum damage by taking max and dividing it in half // edit var to look at object
            //next two lines Determines the amount of damage (Random number that is rounded between the max and min damage)
            var f1 = Math.floor(Math.random()*(players[0].maxDamage-minDamage1)+minDamage1); //edit var to look at object
            var f2 = Math.floor(Math.random()*(players[1].maxDamage-minDamage2)+minDamage2); //edit var to look at object
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            players[0].maxHealth -= f1; //Player 1 takes the above damage and subtracts it from current health
            players[1].maxHealth -= f2; //Player 2 takes the above damage and subtracts it from current health
            //console.log(players[0]Health);
            //console.log(players[1]Health);

            //writes to console the new health amounts
            console.log(players[0].name + ":" + players[0].maxHealth + "  " + players[1].name + ":" + players[1].maxHealth); //edit vars to look at object

            var results = winnerCheck(); //executes the winnerCheck Function
            console.log(results); //prints the results from the winnerCheck Function to the console

            if(results === "no winner"){ //if no winner
                round ++; //add to previous round number
                //pop up alert to show user new health for each player and which round just ended
                alert(players[0].name + ":" + players[0].maxHealth + " *ROUND " + round + " OVER* " + players[1].name + ":" + players[1].maxHealth); //edit var to object
            } else{
                alert(results); //if there was a winner it shows a pop up alert with the results of who won from the winnerCheck Function
                break; //if there was a winner it stops the loop
            }

        };

    };

        //function that determines who won the round
    function winnerCheck() {
        //console.log("in winner check");
        var result = "no winner"; //assumes that there is no winner

        if(players[0].maxHealth<1 && players[1].maxHealth<1){ //if the health for both players is below 1
            result = "You Both Die"; //then the result is the string "You Both Die"
        } else if(players[0].maxHealth<1){ //if player One health is below 1
            result = players[1].name + " WINS!!!" //then player two wins + Shows concatenated string that says name + "wins"
        } else if(players[1].maxHealth<1) { //if player Two's health is below 1
            result = players[0].name + " WINS!!!" //then player one wins + Shows concatenated string that says name + "wins"
        };

        return result; //sends the results to the fight function to display who one
    };

    console.log('program starts'); //prints to console "program starts" to make sure that it is running properly
    fight(); //runs fight function from above


})();