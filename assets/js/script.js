$(document).ready(function() {
    // add date with this variable from Luxon, adding the "luxon." to DateTime.now
    var dt = luxon.DateTime.now();
    // format the dt
    dt.toLocaleString(luxon.DateTime.DATETIME_FULL);
    // add the formatted dt to the currentDay <p>
    $("#currentDay").text(dt.toLocaleString(luxon.DateTime.DATETIME_FULL));
    
    $(".time-block").each(function() {
        // loop through each element and compare the IDs to current hour
        //var timeBlock = parseInt($(this).text());
        var timeBlock = parseInt($(this).attr("id"));
        //console.log ("time id", timeBlock); 
        //console.log("dt", dt.toFormat('H'));
        if (timeBlock < dt.toFormat('H')) {
            //remove old classes
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("future");       
            ////console.log("grey");
            $(this).siblings(".description").addClass("past");
        } else if (timeBlock == dt.toFormat('H')) {
            //remove old classes
            $(this).siblings(".description").removeClass("past");
            $(this).siblings(".description").removeClass("future"); 
            ////console.log("red");
            $(this).siblings(".description").addClass("present");
        } else {
            //remove old classes
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("future");
            ////console.log("green");
            $(this).siblings(".description").addClass("future");
            }
        });
    
//save appointments entered on each line and corresponding IDs
$(".saveBtn").click(function() {
    //alert( "click" );
var appt = $.trim($(this).siblings(".description").val());
var timeBlock = parseInt($(this).siblings(".time-block").attr("id"));
//if appointment is entered
//if(appt !="") {
    //console.log(timeBlock, appt);
//}
localStorage.setItem(timeBlock, appt);
  });
});

// make data persist
var loadAppts = function() {
    //iterate over keys stored, get one, and put appt in corresponding box
    for (i=9; i<21; i++) {
        var item = localStorage.getItem(i);
        // if there is an item, there is a key (number) enter the value (appt) in the sibling textarea
        if (item) {
            //find the right text area by ID
            $("#" + i).siblings(".description").text(item);
            // set it into the textarea
            //$("textarea").text(item);
        }
    }
        
    //timeBlock = JSON.parse(localStorage.getItem(timeBlock));
    appt = JSON.parse(localStorage.getItem(appt));
    
    loadAppts();
}

