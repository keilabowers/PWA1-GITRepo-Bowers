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
    var playerOneText = document.getElementById("coulson");
    var playerTwoText = document.getElementById("loki");
    var roundText = document.getElementById("round");
    var button = document.getElementById("fight_btn");

    //Button Event
    button.onclick = fight;


    //Converted to object array
    var players = [
        {
            name:"Agent Coulson",
            damage:20,
            health:100
        },
        {
            name: "Loki",
            damage: 20,
            health: 100
        }];

    var round = 1; //the number the rounds start at

    //Getting the DOM for the fight
    playerOneText.innerHTML = players[0].name + ": " + players[0].health;
    playerTwoText.innerHTML = players[1].name + ": " + players[1].health;
    roundText.innerHTML = "Let's get ready to rumble! Click the FIGHT button to start!";


    //over all function that randomly depletes a fighters health and shows results and who one at that end of each round
    function fight() {
       //removed alert function

        playerOneText.innerHTML = players[0].name + ": " + players[0].health;
        playerTwoText.innerHTML = players[1].name + ": " + players[1].health;

        // removed for loop
        // for(var i=0; i<10; i++){ //incremental loop ten times


            //next two lines Determines the amount of damage (Random number that is rounded between the max and min damage)
            var f1 = Math.floor(Math.random()* players[0].damage + players[0].damage *.5); //edit var to look at object
            var f2 = Math.floor(Math.random()* players[1].damage + players[1].damage *.5); //edit var to look at object


            //inflict damage
            players[0].health -= f1; //Player 1 takes the above damage and subtracts it from current health
            players[1].health -= f2; //Player 2 takes the above damage and subtracts it from current health

            //writes to console the new health amounts
            console.log(players[0].name + ":" + players[0].health + "  " + players[1].name + ":" + players[1].health); //edit vars to look at object

            var results = winnerCheck(); //executes the winnerCheck Function
            console.log(results); //prints the results from the winnerCheck Function to the console

            roundText.innerHTML = "Round " + round + " Results";
            round ++; //add to previous round number

        if (results === "no winner") { //if no winner
            //removed alert
            playerOneText.innerHTML = players[0].name + ": " + players[0].health;
            playerTwoText.innerHTML = players[1].name + ": " + players[1].health;
        } else {
            //removed break

            playerOneText.innerHTML = "GAME OVER";
            playerTwoText.innerHTML = results;
            button.onclick = "return false";
            button.disabled = true;

            document.querySelector(".buttonblue").innerHTML = "DONE";
        }

    };

        //function that determines who won the round
    function winnerCheck() {
        //console.log("in winner check");
        var result = "no winner"; //assumes that there is no winner

        if(players[0].health<1 && players[1].health<1){ //if the health for both players is below 1
            result = "You Both Die"; //then the result is the string "You Both Die"
        } else if(players[0].health<1){ //if player One health is below 1
            result = players[1].name + " WINS!!!" //then player two wins + Shows concatenated string that says name + "wins"
        } else if(players[1].health<1) { //if player Two's health is below 1
            result = players[0].name + " WINS!!!" //then player one wins + Shows concatenated string that says name + "wins"
        };

        return result; //sends the results to the fight function to display who one
    };

    console.log('program starts'); //prints to console "program starts" to make sure that it is running properly
    //removed call for fight function



})();