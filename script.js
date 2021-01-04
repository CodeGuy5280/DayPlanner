//Updates the date for the calendar
var currDay = document.getElementById("currentDay");
currDay.innerHTML = moment().format("LL");

//On click function for save button
$(".saveBtn").on("click", function (event) {
  event.preventDefault(); // used so page doesnt refresh, saves events to calendar
  var time = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(time, value);
});

//Function that compares current hour to the current time
function hourChange() {
  var timeCurrent = moment().hours();
  $(".time-block").each(function () {
    console.log(timeCurrent); // 12 hour time or 24 hour

    var compareHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(compareHour); // 12 hour or 24 hour
    if (compareHour < timeCurrent) {
      $(this).addClass("past");
    } else if (compareHour === timeCurrent) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else if (compareHour > timeCurrent) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}
//Runs the function above
hourChange(); 
var timeChecker = setInterval(hourChange, 15000);

//Finds location in local storage for each hour listing 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));