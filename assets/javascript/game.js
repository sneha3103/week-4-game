alert ("hi");
$(document).ready(function() {
    //Assigning variables to use throughout the code
    var indianImage = Math.floor(Math.random() * 12) + 1
    var balletImage = Math.floor(Math.random() * 12) + 1
    var flamencoImage = Math.floor(Math.random() * 12) + 1
    var hipHopImage = Math.floor(Math.random() * 12) + 1
    var computerPick = Math.floor(Math.random() * 101) + 19
    var totalSteps = 0;
    var winCount = 0;
    var lossCount = 0;
    
    // $("#computerPicked").text("<div>Hello</div>");
    //Jquery function to reflect the variable of computerPick and allow it do be displayed onto the div id of computer picked. 
    $("#computerPicked").html(computerPick);
   
    //When user clicks on the icon of a dance image, I created a variable called dancer Id to represent that when a certain image is clicked, it will grab the specific id of that dance style.
    $(".Danceimage").on("click",function() {
    var dancerId = $(this).attr("id");
    var dancePoints = 0;
      console.log(dancerId);
    //Created a switch case to allow dancer id to correspond to each specific dance style image and allow each icon to have a randomly generated number (which is already assigned from the global variables above)
    switch (dancerId) {
        case "IndianDance" : 
            dancePoints = indianImage;
            break;

        case "BalletDance" : 
            dancePoints = balletImage;
            break;

        case "FlamencoDance" : 
            dancePoints = flamencoImage;
            break;

        case "HipHop" : 
            dancePoints = hipHopImage;
            break;

    }
    

    totalSteps += dancePoints;
    $(".TotalScore").html("Your total step count is: " + totalSteps);
    
    //If total steps is equal to computer pick, then the win count increases by 1 and the total score is reset, and the dance icons and computer pick generates another random number. 
    if (totalSteps === computerPick) {
        winCount++;
        console.log(winCount);
        $(".WinLossBox").html("Wins: " + winCount + "<br> <br> Loss: " + lossCount);

    }

    //If total steps is greater than computer pick, then the loss count increases by 1 and the total score is reset, and the dance icons and computer pick generates another random number. 
    if (totalSteps > computerPick) {
        lossCount++;
        $(".WinLossBox").html("Wins: " + winCount + "<br> <br> Loss: " + lossCount);

    }


    });
        



});