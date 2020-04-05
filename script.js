var dateDisplay = $("#currentDay");
var date = (moment().format('MMMM Do YYYY, h:mm a'));
dateDisplay.append(date);

// var plannerDates = moment().subtract(, 'h').calendar();

function getStoredInput() {
    // var valueNine = localStorage.getItem("9");
    // $("#9").val(valueNine);
    // var valueTen = localStorage.getItem("10");
    // $("#10").val(valueTen);
    // var valueEleven = localStorage.getItem("11");
    // $("#11").val(valueEleven);
    // // var valueTwelve = localStorage.getItem("12");
    // $("#12").val(localStorage.getItem("12"));

    for (i = 9; i < 21;i++){
        $("#" + i).val(localStorage.getItem(i));
    }
};

function colorInputEl() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $("input").each(function () {
        var rowHour = parseInt($(this).attr("id"));
        console.log(rowHour);
        if (rowHour < currentHour) {
            $(this).addClass("past");
        }
        else if (rowHour === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

$("button").on("click", function () {
    var inputEl = $(this).siblings("input");
    console.log(inputEl); 
    var userInput = inputEl.val();
    var hour = inputEl.attr("id");
    localStorage.setItem(hour, userInput);
});

getStoredInput();
colorInputEl();



