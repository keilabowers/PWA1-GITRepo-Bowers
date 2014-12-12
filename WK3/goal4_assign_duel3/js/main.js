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

    //removed seperate variables and added an arrary variable for players' information
    var playerOne = ["Agent Coulson", 20, 100]; //Array of player one's information (name, max damage, max health)
    var playerTwo = ["Loki", 20, 100]; //Array of player two's information (name, max damage, max health)

    var round = 0; //the number the rounds start at

        //over all function that randomly depletes a fighters health and shows results and who one at that end of each round
    function fight() {
        console.log('in the fight function'); //prints to console so we know the fight function is working
        //pop alert to user to start the function that shows the name and health for both users and the word START
        alert(playerOne[0] + ":" + playerOne[2] + " *Start* " + playerTwo[0] + ":" + playerTwo[2]); //edit variable to look at array ones
        for(var i=0; i<10; i++){ //incremental loop ten times
            //random formula: Math.floor(Math.random()*(max-min)+min);
            var minDamage1 = playerOne[1] * .5; //Player 1 determines minimum damage by taking max and dividing it in half //edit var to look at array
            var minDamage2 = playerTwo[1] * .5; //Player 2 determines minimum damage by taking max and dividing it in half // edit var to look at array
            //next two lines Determines the amount of damage (Random number that is rounded between the max and min damage)
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1); //edit var to look at array
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2); //edit var to look at array
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOne[2] -= f1; //Player 1 takes the above damage and subtracts it from current health
            playerTwo[2] -= f2; //Player 2 takes the above damage and subtracts it from current health
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //writes to console the new health amounts
            console.log(playerOne[0] + ":" + playerOne[2] + "  " + playerTwo[0] + ":" + playerTwo[2]); //edit vars to look at array

            var results = winnerCheck(); //executes the winnerCheck Function
            console.log(results); //prints the results from the winnerCheck Function to the console

            if(results === "no winner"){ //if no winner
                round ++; //add to previous round number
                //pop up alert to show user new health for each player and which round just ended
                alert(playerOne[0] + ":" + playerOne[2] + " *ROUND " + round + " OVER* " + playerTwo[0] + ":" + playerTwo[2]); //edit var to look at array
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

        if(playerOne[2]<1 && playerTwo[2]<1){ //if the health for both players is below 1
            result = "You Both Die"; //then the result is the string "You Both Die"
        } else if(playerOne[2]<1){ //if player One health is below 1
            result = playerTwo[0] + " WINS!!!" //then player two wins + Shows concatenated string that says name + "wins"
        } else if(playerTwo[2]<1) { //if player Two's health is below 1
            result = playerOne[0] + " WINS!!!" //then player one wins + Shows concatenated string that says name + "wins"
        };

        return result; //sends the results to the fight function to display who one
    };

    console.log('program starts'); //prints to console "program starts" to make sure that it is running properly
    fight(); //runs fight function from above


})();