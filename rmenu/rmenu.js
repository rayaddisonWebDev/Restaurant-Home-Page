//Step 1, Set up time with event listener.
document.addEventListener("DOMContentLoaded", function(){
  var c = document.getElementById('current-time');
  var dateBox = document.getElementById('current-date');

//Step 5. make clock update continuously
setInterval(updateTime, 1000);

function updateTime(){
  var d = new Date();

//Step 3, check if hours is less than 12
//aka converts military time into normal am/pm
//Step 4, get it to display AM or PM
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var amOrPm = "PM";

    if (hours > 12) {
      (hours = hours - 12);
      amOrPm = "PM";
                //hours -= 12;
    } else  if (hours === 0) {
      hours = 12;
      amOrPm = "AM";
    } else {
      (hours = hours);
      amOrPm = amOrPm;
    }

//Step 6. Add a zero in front of minute digit if less than 10
    if (minutes < 10) {
      minutes = '0' + minutes
    };


    var sep = ":"
    if (d.getSeconds() % 2 === 1) {
      sep = " "
    };

//Step 7. Add Date above time
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }

    if (day < 10) {
      day = "0" + day
    };

//Step 2, split time into hours and mins
dateBox.innerHTML = month + " " + day + " " + year;
c.innerHTML = hours + sep + minutes + " " + amOrPm;
}
});
