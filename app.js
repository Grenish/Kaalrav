// Setting the date we're counting down to
var future = new Date("November 19, 2023 12:00:00").getTime();

var x = setInterval(function () {
    var today = new Date().getTime();

    // Find the distance between now and the count down date
    var age = future - today;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(age / (1000 * 60 * 60 * 24));
    var hours = Math.floor((age % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((age % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((age % (1000 * 60)) / 1000);

    // Display the result 
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (future < 0){
        clearInterval(x);
        document.querySelector("timer").innerHTML = "It's Already Started";
    }
    }, 1000)