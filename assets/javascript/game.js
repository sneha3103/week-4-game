alert ("hi");
$(document).ready(function() {
    var indianImage = Math.floor(Math.random() * 12) + 1
    var balletImage = Math.floor(Math.random() * 12) + 1
    var flamencoImage = Math.floor(Math.random() * 12) + 1
    var hipHopImage = Math.floor(Math.random() * 12) + 1
    var computerPick = Math.floor(Math.random() * 101) + 19
    var totalSteps = 0;
    var winCount = 0;
    var lossCount = 0;
    
    // $("#computerPicked").text("<div>Hello</div>");

    $("#computerPicked").html(computerPick);

    $(".Danceimage").on("click",function() {
    var dancerId = $(this).attr("id");
    var dancePoints = 0;
      console.log(dancerId);

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

    

    });
        



});