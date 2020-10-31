$(document).ready(function () {
  //Utilizing moment.js to be able to maintain the information for users current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    //Creating function for 'add' button, once clicked it saves information to users local storage for each hour 
    //of the calendar
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
})
    // Gets local storage value of the description from saved storage
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
//Function for being able to set the style elements on each of the individual blocks of time users can input
    function HourColor(){
       //retains users current hour from moment
        var userHours = moment().hour();
        
        //uses the time block to loop in the function to be able to set and remove style classes depending on the hour of the day
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeBlock, userHours)

            if (timeBlock < userHours) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeBlock === userHours) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    HourColor();
})
