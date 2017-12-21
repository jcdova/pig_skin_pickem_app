
$(document).ready(function(){
    
     // Variables
     var userWinningTeams = [];
     var winnersArray = [];
     var userPoints = 0;

//requests to each week:

     $("#submit").on("click", function() {
         $("#weekDisplay").html("");   
         $("#awayTeam").html("");
         $("#homeTeam").html("");
         let chosenWeek = $("#weekNumber").val();
         if (chosenWeek > 16 || chosenWeek < 1) {
             alert("Please Pick a week number between 1 and 16.");
             return;
         }
         
         console.log(chosenWeek);
         $.get('api/fantasy/' + chosenWeek, function(data){
            //POPULATE AWAY TEAMS AND INFO
            for (let i = 0; i < data.length; i++) {
                if (data[i].Week == chosenWeek) {
                    console.log(data[i].AwayTeam);                    
                    
                    $("#awayTeam").append("<div class='card wow fadeIn'><h5><span class='label label-primary'></span> " + "<input type='radio' name='" + (i +1) + "' value='" + data[i].AwayTeam + "'>" + data[i].AwayTeam + " | " + "<strong>" + " Week " + data[i].Week + " | " + moment(data[i].Date).format('MMMM Do YYYY, h:mm a') + "<strong></h5></div>");

                }
            }
            //POPULATE HOME TEAMS AND INFO
            for (let i = 0; i < data.length; i++) {
                if (data[i].Week == chosenWeek) {
                    console.log(data[i].HomeTeam);
                    
                    $("#homeTeam").append("<div class='card wow fadeIn'><h5><span class='label label-primary'></span> " + "<input type='radio' name='" + (i +1) + "' value='" + data[i].HomeTeam + "'>" + data[i].HomeTeam + " | " + "<strong>" + " Week " + data[i].Week + " | " + moment(data[i].Date).format('MMM Do YYYY, h:mm a') + "<strong></h5></div>");

                }
            }
            $("#weekDisplay").html("<h3>Week #" + chosenWeek + "</h3>");
            $("#hideyHole").removeClass("hider");

     

         })
        return chosenWeek;
     });
     

  
     $("#submitPicks").on("click", function() {
 
         function checkScore() {
             var valid = true;
             $(".form-control").each(function() {
                 if ($(this).val() === '') {
                     valid = false;
                 }
             })
             return valid;	
         };
         userPicks();
         getPicks();
         console.log(userPoints);
         
 
         if (checkScore() === true) {
            var mnfScore = {
                mnf: $('#mnf').val().trim(),
                uname: $('#uname').val().trim()
            };
            console.log(mnfScore);
                     
         } else {
               alert("Please enter the Total Monday Night Score and your Display Name before Submitting");
         }
         alert("Thank you! Your Picks have been Submitted!");
          return false;

         let Picks1 = $('input:radio[name=1]:checked').val();
         let Picks2 = $('input[name=2]:checked').val();
        
         console.log(Picks1);
         console.log(Picks2);

         alert("Thank you! Your Picks have been Submitted!");
 
     });
 
 
     function userPicks() {
 

        let Picks = {
             game_1: $('input:radio[name=1]:checked').val(),
             game_2: $('input:radio[name=2]:checked').val(),
             game_3: $('input:radio[name=3]:checked').val(),
             game_4: $('input:radio[name=4]:checked').val(),
             game_5: $('input:radio[name=5]:checked').val(),
             game_6: $('input:radio[name=6]:checked').val(),
             game_7: $('input:radio[name=7]:checked').val(),
             game_8: $('input:radio[name=8]:checked').val(),
             game_9: $('input:radio[name=9]:checked').val(),
             game_10: $('input:radio[name=10]:checked').val(),
             game_11: $('input:radio[name=11]:checked').val(),
             game_12: $('input:radio[name=12]:checked').val(),
             game_13: $('input:radio[name=13]:checked').val(),
             game_14: $('input:radio[name=14]:checked').val(),
             game_15: $('input:radio[name=15]:checked').val(),
             game_16: $('input:radio[name=16]:checked').val(),
             username: $("#uname").val(),
             mnf: $("#mnf").val(),
             week: $("#weekNumber").val()
        }

        $.post("api/picks", Picks, function() {
            console.log(Picks);
        })

            
               
         };
         
 
         function getPicks() {
 
             for (i = 0; i < winnersArray.length; i++) {
                     if (winnersArray[i] === userWinningTeams[i]) {
                         userPoints++
                     }	
                 }
         };
 
 
         function clearForm(){
             $('#mnfScore input[type="text"]').each(function(){
                   $(this).val("");  
             });
             $('#username input[type="text"]').each(function(){
                   $(this).val("");  
             });
            
             $("#userInput").empty();
         }
 
 
         $("#clearAll").on("click", function() {
 
             clearForm();
         });      

 
 });