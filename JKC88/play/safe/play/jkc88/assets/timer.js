var countDownDate = new Date().getTime()+90000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var msec = Math.floor((distance % 1000));
    
    if (minutes < 10){
            minutes = "0" + minutes;
        }
    if (seconds < 10){
            seconds = "0" + seconds;
        }
    if(msec < 10){
            msec = "00" +msec;
        }
        else if(msec < 100){
            msec = "0" +msec;
        }
        

  // Display the result in the element with id="cdtimexx"
  document.getElementById("cdtimexx").innerHTML = "00:"
  + minutes + ":" + seconds + ":" + msec ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cdtimexx").innerHTML = "LAST CHANCE!";
  }
}, 45);