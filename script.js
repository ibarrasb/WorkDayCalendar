var d = new Date($.now());
d.getDate()+"-"+(d.getMonth() + 1)+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();


$("#currentDay").html(d);

var timeBlock = $("time-block");

var blockTime = $(".hour");
var blockDescription = $(".description");
var saveButton = $(".saveBtn");


var timeHours = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"]




// function newRow(){

    for(var i = 0; i < timeHours.length; i++){
        //create new rows for each element in the hours
        
        var newR = $("row");

        // newR.html(blockTime[i]);

        newR.text(blockTime[i]);

        timeBlock.append(newR);
       


    }












function addEvent(){


}


function setHours(){




}
