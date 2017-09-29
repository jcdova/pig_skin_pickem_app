$(document).ready(function(){

  function tableGenerate(Sweek) {
    var winnerArr =[];
    $.get("/api/fantasy/" + Sweek, function(apiData) {
      // GET FANTASY DATA FOR THIS WEEK AND MAKE ARRAY OF WINNERS TO COMPARE
      for (let j = 0; j < apiData.length; j++) {
        if (apiData[j].AwayScore > apiData[j].HomeScore) {
          winnerArr.push(apiData[j].AwayTeam);
        } else {
          winnerArr.push(apiData[j].HomeTeam);
        }
      }
      // GET USER DATA FOR THIS WEEK AND POPULATE TABLE
      $.get("/api/picks/" + Sweek, function(data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].game_15 == null || data[i].game_16 == null || data[i].game_14 == null) {
            data[i].game_15 = "-";
            data[i].game_16 = "-";
            data[i].game_14 = "-";
          }
          $('#tableTime').append('<tr><td>' + data[i].username + '</td><td id="game1-' + i + '">' + data[i].game_1 + '</td><td id="game2-' + i + '">' + data[i].game_2 + '</td><td id="game3-' + i + '">' + data[i].game_3 + '</td><td id="game4-' + i + '">' + data[i].game_4 + '</td><td id="game5-' + i + '">' + data[i].game_5 + '</td><td id="game6-' + i + '">' + data[i].game_6 + '</td><td id="game7-' + i + '">' + data[i].game_7 + '</td><td id="game8-' + i + '">' + data[i].game_8 + '</td><td id="game9-' + i + '">' + data[i].game_9 + '</td><td id="game10-' + i + '">' + data[i].game_10 + '</td><td id="game11-' + i + '">' + data[i].game_11 + '</td><td id="game12-' + i + '">' + data[i].game_12 + '</td><td id="game13-' + i + '">' + data[i].game_13 + '</td><td id="game14-' + i + '">' + data[i].game_14 + '</td><td id="game15-' + i + '">' + data[i].game_15 + '</td><td id="game16-' + i + '">' + data[i].game_16 + '</td><td>' + data[i].mnf + '</td></tr>');
         
          // TERRIBLE LAND OF IF STATEMENTS OF SHAME (TO APPLY COLORS)
          var counter = 0;
          var points = [];
          if (winnerArr[0] == data[i].game_1) {
            counter ++;
            $("#game1-" + i).addClass("green");
          } else {
            $("#game1-" + i).addClass("red");
          }
          if (winnerArr[1] == data[i].game_2) {
            counter ++;
            $("#game2-" + i).addClass("green");
          } else {
            $("#game2-" + i).addClass("red");
          }
          if (winnerArr[2] == data[i].game_3) {
            counter ++;
            $("#game3-" + i).addClass("green");
          } else {
            $("#game3-" + i).addClass("red");
          }
          if (winnerArr[3] == data[i].game_4) {
            counter ++;
            $("#game4-" + i).addClass("green");
          } else {
            $("#game4-" + i).addClass("red");
          }
          if (winnerArr[4] == data[i].game_5) {
            counter ++;
            $("#game5-" + i).addClass("green");
          } else {
            $("#game5-" + i).addClass("red");
          }
          if (winnerArr[5] == data[i].game_6) {
            counter ++;
            $("#game6-" + i).addClass("green");
          } else {
            $("#game6-" + i).addClass("red");
          }
          if (winnerArr[6] == data[i].game_7) {
            counter ++;
            $("#game7-" + i).addClass("green");
          } else {
            $("#game7-" + i).addClass("red");
          }
          if (winnerArr[7] == data[i].game_8) {
            counter ++;
            $("#game8-" + i).addClass("green");
          } else {
            $("#game8-" + i).addClass("red");
          }
          if (winnerArr[8] == data[i].game_9) {
            counter ++;
            $("#game9-" + i).addClass("green");
          } else {
            $("#game9-" + i).addClass("red");
          }
          if (winnerArr[9] == data[i].game_10) {
            counter ++;
            $("#game10-" + i).addClass("green");
          } else {
            $("#game10-" + i).addClass("red");
          }
          if (winnerArr[10] == data[i].game_11) {
            counter ++;
            $("#game11-" + i).addClass("green");
          } else {
            $("#game11-" + i).addClass("red");
          }
          if (winnerArr[11] == data[i].game_12) {
            counter ++;
            $("#game12-" + i).addClass("green");
          } else {
            $("#game12-" + i).addClass("red");
          }
          if (winnerArr[12] == data[i].game_13) {
            counter ++;
            $("#game13-" + i).addClass("green");
          } else {
            $("#game13-" + i).addClass("red");
          }
          if (winnerArr[13] == data[i].game_14) {
            counter ++;
            $("#game14-" + i).addClass("green");
          } else {
            $("#game14-" + i).addClass("red");
          }
          if (winnerArr[14] == data[i].game_15) {
            counter ++;
            $("#game15-" + i).addClass("green");
          } else {
            $("#game15-" + i).addClass("red");
          }
          if (winnerArr[15] == data[i].game_16) {
            counter ++;
            $("#game16-" + i).addClass("green");
          } else {
            $("#game16-" + i).addClass("red");
          }
          points.push(counter);
          counter = 0;

        }
        console.log(points);
      })
    })
  }
  $("#getStats").on("click", function() {
    $("#tableTime").html("");
    let Sweek = $("#weekSelect").val();
    tableGenerate(Sweek);
  });
});