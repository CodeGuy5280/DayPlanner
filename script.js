// var saveBtn = document.getElementsByClassName("saveBtn");
// var userInput = document.getElementsByClassName("description")




$(document).ready(function() {
	const m = moment();
	$("#currentDay").html(moment().format("LLLL"));
	console.log(moment());
	console.log(m.format("LLLL"));

// moment(?).isBefore(your current hours var) for past
// moment(?).isAfter(your current hours var) for future
// moment(?).isSame(your current hours var) for present

//use of json to parse the item planner to local storage w/c.log
var planner = JSON.parse(localStorage.getItem("planner")) || initializePlanner();
	console.log(planner);
//loop for time
	for (var time in planner) {
		console.log(time, planner[time]);
		var tr = $("<tr>")
			// .addClass("row time-block");
		var tdTime = $("<td>")
			.addClass("hour")
			.text(time);
		var tdEvent = $("<td>")
			.addClass("textArea");
        //used for determining the time
		var thisTime;
		
		if (moment(time, "h a").isSame(moment(), "hour")) {
			thisTime = "present";
		} else if (moment(time, "h a").isAfter(moment())) {
			thisTime = "future";
		} else if (moment(time, "h a").isBefore(moment())) {
			thisTime = "past";
		}
        //event Text/textarea
		var eventText = $("<textarea>")
			.addClass("description") // col-md
			.addClass(thisTime)
			.attr("data-time", time)
			.val(planner[time]);
		tdEvent.append(eventText);
        //submit saveBtn
		var tdSubmit = $("<td>").addClass("saveBtn"); 

		// tr.append(tdTime, tdEvent, tdSubmit);

		$("#myPlanner").append(tr);
		//#myPlanner
	}

	function initializePlanner() {
		var tempPlanner = {};
        
		for (var i = 8; i < 18; i++) {
			
			tempPlanner[moment(i, "H").format("h a")] = "";
		}
		//.container
		return tempPlanner;
	}

	$(".saveBtn").on("click", function() {
		//location of proper values to be stored for saveBtn
		var time = $(this)
			.parent()
			.find(".description")
			.attr("data-time");
		var text = $(this)
			.parent()
			.find(".description")
			.val();
		console.log(time, text);

		planner[time] = text;

		localStorage.setItem("planner", JSON.stringify(planner));
	});
});

