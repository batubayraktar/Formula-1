var countDownDate = new Date("Sep 2, 2022 00:00:00").getTime();



var x = setInterval(function() {



var now = new Date().getTime();



var distance = countDownDate - now;



var days = Math.floor(distance / (1000 * 60 * 60 * 24));

var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("counter").innerHTML = `
  <div id=sectionCounter0>${days}.</br><div class=tellerDUMS>dagen</div></div> 
  <div id=sectionCounter1>${hours}.</br><div class=tellerDUMS>uren</div></div>
  <div id=sectionCounter2>${minutes}.</br><div class=tellerDUMS>min</div></div>
  <div id=sectionCounter3>${seconds}.</br><div class=tellerDUMS>sec</div></div>`; 


if(hours.toString().length === 1 ){

  document.getElementById("sectionCounter1").innerHTML = `<div id=sectionCounter1>0${hours}.</br><div class=tellerDUMS>uren</div></div>`;
  
  }
  
  if(minutes.toString().length === 1 ){
  
    document.getElementById("sectionCounter2").innerHTML = `<div id=sectionCounter2>0${minutes}.</br><div class=tellerDUMS>min</div></div>`;
  
  }
  
  if(seconds.toString().length === 1 ){
  
    document.getElementById("sectionCounter3").innerHTML = `<div id=sectionCounter3>0${seconds}.</br><div class=tellerDUMS>sec</div></div>`;
  
  }
  
  })


let main = document.getElementById("gridNieuwsIndex");
function resize() {
  let sizeBody = window.innerWidth;
  if(sizeBody > 0 && sizeBody < 1300){
    document.getElementById("gridNieuwsIndex").style.gridTemplateColumns = "1fr";
  }
  if(sizeBody > 1300 && sizeBody < 1650){
    document.getElementById("gridNieuwsIndex").style.gridTemplateColumns = "1fr 1fr";
  }
  if(sizeBody > 1650 && sizeBody < 9999){
    document.getElementById("gridNieuwsIndex").style.gridTemplateColumns = "1fr 1fr 1fr";
  }
}
  window.onresize = resize;
  resize();