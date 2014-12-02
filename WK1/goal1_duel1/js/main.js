/*
Keila Bowers
Student #: 0004632583
WDD244-0 Section 01
December 1, 2014
Week 1 - Analyze Duel1
 */

//self executing function
(function() {

    console.log("fight"); //prints to console the words "Fight"

    var playerOneName = "Agent Coulson"; //creates variable for player one's name
    var playerTwoName = "Loki"; //creates variable for player two's name

    var playerOneHealth = 100; //creates variable for player one's maximum health
    var playerTwoHealth = 100; //creates variable for player two's maximum health

    var playerOneDamage = 20; //creates variable for player one's maximum damage per round
    var playerTwoDamage = 20; //creates variable for player two's maximum damage per round

    var round = 0; //the number the rounds start at

        //over all function that randomly depletes a fighters health and shows results and who one at that end of each round
    function fight() {
        console.log('in the fight function'); //prints to console so we know the fight function is working
        alert(playerOneName + ":" + playerOneHealth + " *Start* " + playerTwoName + ":" + playerTwoHealth); //pop alert to user to start the function that shows the name and health for both users and the word START
        for(var i=0; i<10; i++){ //incremental loop ten times
            //random formula: Math.floor(Math.random()*(max-min)+min);
            var minDamage1 = playerOneDamage * .5; //Player 1 determines minimum damage by taking max and dividing it in half
            var minDamage2 = playerTwoDamage * .5; //Player 2 determines minimum damage by taking max and dividing it in half
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1); //Player 1 Determines the amount of damage (Random number that is rounded between the max and min damage)
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2); //Player 2 Determines the amount of damage (Random number that is rounded between the max and min damage)
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth -= f1; //Player 1 takes the above damage and subtracts it from current health
            playerTwoHealth -= f2; //Player 2 takes the above damage and subtracts it from current health
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOneName + ":" + playerOneHealth + "  " + playerTwoName + ":" + playerTwoHealth); //writes to console the new health amounts

            var results = winnerCheck(); //executes the winnerCheck Function
            console.log(results); //prints the results from the winnerCheck Function to the console

            if(results === "no winner"){ //if no winner
                round ++; //add to previous round numbber
                alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth); //pop up alert to show user new health for each player and which round just ended
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

        if(playerOneHealth<1 && playerTwoHealth<1){ //if the health for both players is below 1
            result = "You Both Die"; //then the result is the string "You Both Die"
        } else if(playerOneHealth<1){ //if player One health is below 1
            result = playerTwoName + " WINS!!!" //then player two wins + Shows concatenated string that says name + "wins"
        } else if(playerTwoHealth<1) { //if player Two's health is below 1
            result = playerOneName + " WINS!!!" //then player one wins + Shows concatenated string that says name + "wins"
        };

        return result; //sends the results to the fight function to display who one
    };

    console.log('program starts'); //prints to console "program starts" to make sure that it is running properly
    fight(); //runs fight function from above


})();