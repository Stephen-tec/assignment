function greetings(fname) {
  var today = new Date();
  var hour = today.getHours();

  var greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting + ", " + (fname || "guest") + "!<br>Welcome to my website!";
}

function starTime() {
  var today = new Date(); // ✅ Fresh date object each call
  var weekday = today.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = days[weekday];
  var day = today.getDate();
  var month = today.getMonth();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var monthName = monthNames[month];
  var year = today.getFullYear();
  var hour = today.getHours();
  var min = String(today.getMinutes()).padStart(2, '0');  
  var sec = String(today.getSeconds()).padStart(2, '0'); 

  document.getElementById("dateTime").innerHTML =
    dayName + ", " + day + " " + monthName + " " + year +
    "<br>" + hour + ":" + min + ":" + sec;
}

// Update every second
setInterval(starTime, 1000);
starTime(); // Call once immediately so it doesn't wait 1 second on load