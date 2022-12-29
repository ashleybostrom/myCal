$(document).ready(function () {

    // Moment being employed to show the date and time of now.
    var now = moment().format('LLLL');
    document.getElementById("currentDay").innerHTML = now;

    console.log(now);

    //Button component with listener
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var toDo = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        //localstorage set
        localStorage.setItem(time, toDo);
    })
    //loading data from localstorage

    $("#09 .textarea").val(localStorage.getItem("09"));
    $("#10 .textarea").val(localStorage.getItem("10"));
    $("#11 .textarea").val(localStorage.getItem("11"));
    $("#12 .textarea").val(localStorage.getItem("12"));
    $("#13 .textarea").val(localStorage.getItem("13"));
    $("#14 .textarea").val(localStorage.getItem("14"));
    $("#15 .textarea").val(localStorage.getItem("15"));
    $("#16 .textarea").val(localStorage.getItem("16"));
    $("#17 .textarea").val(localStorage.getItem("17"));

    // colors being generated with the current time
    var timer = setInterval(scheduler, 100000)
    //color with time
    function scheduler() {

        var timeRows = document.querySelectorAll('.time-row');
        console.log(timeRows)

        var currentTime = moment().format('HH');
        console.log(currentTime)

        $(".time-row").each(function () {

            var timeBlock = $(this).attr("id")

            console.log(timeBlock)

            // time based on past, now, or future time blocks

            if (timeBlock < currentTime) {
                $(this).removeClass("present future")
                $(this).addClass("past")

            } else if (timeBlock > currentTime) {
                $(this).removeClass("past present")
                $(this).addClass("future")

            } else {
                $(this).removeClass("future past")
                $(this).addClass("present")
            }
        })




    }


    scheduler();

})


// localstorage for being current