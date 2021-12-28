
// const express = require("express");
// const bodyParser = require("bodyParser");
// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
//
//
//
//
//
//
//
//
// app.listen(3000,function(){
//   console.log("Server started on port 3000!");
// })
gameArray=[69,0,0,0,0,0,0,0,0,0];
var continues=1;
var ignore=1;
var counter=1;
var xscore=0;
var yscore=0;

$(document).keypress(function(){
  $("#player-text").html("Player X's Turn!");
  for(let i=1;i<10;i++){
  let divId = "#" + i;
  $(divId).on("click",function(){
    if(continues===1){
    if(counter%2==0){
      if(gameArray[i]===0){
      $(divId+i).attr("src","images/obg.png");
      gameArray[i]=2;
      counter++;
      checkRows();
      checkCols();
      checkDiagnols();
      if(continues===1){
      $("#player-text").html("Player X's Turn!");
    }
    }
    }
    else{
      if(gameArray[i]===0){
      $(divId+i).attr("src","images/xbg.png");
      gameArray[i]=1;
      counter++;
      checkRows();
      checkCols();
      checkDiagnols();
      checkFull();
      if(continues===1){
      $("#player-text").html("Player O's Turn!");
    }
    }
  }
}

})}
})

function checkRows(){
  for(let i=1;i<8;i+=3)
  {
    if(gameArray[i]===gameArray[i+1] && gameArray[i+1]===gameArray[i+2] && gameArray[i]===gameArray[i+2])
    {
      if(gameArray[i]===1 && gameArray[i+1]===1 && gameArray[i+2]===1)
      {
        $("#player-text").html("Player X Wins!");
        continues=0;
        hline(i,i+1,i+2);
        xscore++;
        $("#x").html(xscore);
      }
      else if(gameArray[i]===2 && gameArray[i+1]===2 && gameArray[i+2]===2){
        $("#player-text").html("Player O Wins!");
        continues=0;
        hline(i,i+1,i+2);
        yscore++;
        $("#o").html(yscore);
      }
      else{
      console.log("checkpoint1");
    }
    }
  }
}

function checkCols(){
  for(let i=1;i<4;i++){
    if(gameArray[i]===gameArray[i+3] && gameArray[i+3]===gameArray[i+6] && gameArray[i]===gameArray[i+6])
    {
      if(gameArray[i]===1 && gameArray[i+3]===1 && gameArray[i+6]===1)
      {
        $("#player-text").html("Player X Wins!");
        continues=0;
        vline(i,i+3,i+6);
        xscore++;
        $("#x").html(xscore);
      }
      else if(gameArray[i]===2 && gameArray[i+3]===2 && gameArray[i+6]===2){
        $("#player-text").html("Player O Wins!");
        continues=0;
        vline(i,i+3,i+6);
        yscore++;
        $("#o").html(yscore);
      }
      else{
        console.log("checkpoint2");
      }
    }
  }
}

function checkDiagnols(){
  for(let i=1;i<4;i+=2){
    for(let j=10;j>9;j--){
      if(gameArray[i]===gameArray[5] && gameArray[5]===gameArray[j-i] && gameArray[i]===gameArray[j-i])
      {
        if(gameArray[i]===1 && gameArray[5]===1 && gameArray[j-i]===1)
        {
          $("#player-text").html("Player X Wins!");
          continues=0;
          dline(i,5,j-i);
          xscore++;
          $("#x").html(xscore);
        }
        else if(gameArray[i]===2 && gameArray[5]===2 && gameArray[j-i]===2){
          $("#player-text").html("Player O Wins!");
          continues=0;
          dline(i,5,j-i);
          yscore++;
          $("#o").html(yscore);
        }
        else{
          console.log("checkpoint3");
        }

      }
    }
  }
}

function checkFull(){
  if(counter===10 && continues===1){
    $("#player-text").html("Draw!");
    continues=0;
  }
}

function hline(x,y,z){
  if(x===1 && y===2 && z===3)
  {
    $("#draw").addClass("hline1");
  }
  if(x===4 && y===5 && z===6){
    $("#draw").addClass("hline2");
  }
  if(x===7 && y===8 && z===9){
    $("#draw").addClass("hline3");
  }
}

function vline(x,y,z){
  if(x===1 && y===4 && z===7)
  {
    $("#draw").addClass("vline1");
  }
  if(x===2 && y===5 && z===8){
    $("#draw").addClass("vline2");
  }
  if(x===3 && y===6 && z===9){
    $("#draw").addClass("vline3");
  }
}

function dline(x,y,z){
  if(x===1 && y===5 && z===9){
    $("#draw").addClass("dline1");
  }
  if(x===3 && y===5 && z===7){
    $("#draw").addClass("dline2");
  }
}

$("#btn").click( function (){
  gameArray=[69,0,0,0,0,0,0,0,0,0];
  continues=1;
  ignore=1;
  counter=1;
  $("#player-text").html("Press any key to start!");
  for(let i=1;i<10;i++){
  let divId = "#" + i;
  $(divId+i).attr("src","https://www.colorhexa.com/222831.png");
}
  $("#draw").removeClass();
  // xscore=0;
  // yscore=0;
  // $("#x").html(xscore);
  // $("#o").html(yscore);
});

$("#btn1").click( function (){
  gameArray=[69,0,0,0,0,0,0,0,0,0];
  continues=1;
  ignore=1;
  counter=1;
  $("#player-text").html("Press any key to start!");
  for(let i=1;i<10;i++){
  let divId = "#" + i;
  $(divId+i).attr("src","https://www.colorhexa.com/222831.png");
}
  $("#draw").removeClass();
  xscore=0;
  yscore=0;
  $("#x").html(xscore);
  $("#o").html(yscore);
});
