$(document).ready(function() {
    // add date with this variable from Luxon, adding the "luxon." to DateTime.now
    var dt = luxon.DateTime.now();
    // format the dt
    dt.toLocaleString(luxon.DateTime.DATETIME_FULL);
    // add the formatted dt to the currentDay <p>
    $("#currentDay").text(dt.toLocaleString(luxon.DateTime.DATETIME_FULL));
    
    $(".time-block").each(function() {
        // loop through each element and take text of "this"/each element 
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
            //this didn't work. changed to this siblings
            //$("textarea").addClass("present");
            $(this).siblings(".description").addClass("present");
        } else {
            //remove old classes
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("future");
            ////console.log("green");
            $(this).siblings(".description").addClass("future");
            }
        });
    
    
    $(".saveBtn").click(function() {
        alert( "click" );
        var appts = {};
    var appt = $.trim($("textarea").val());
    var timeBlock = parseInt($(".time-block").attr("id"));
    if(appt !="") {
        console.log(timeBlock, appt);
    }
    localStorage.setItem(timeBlock, appt);
      });
    });
