$(document).ready(function() {
    $("#submit").click(function() {
        var input = $("#dob-input").val();
        var dob = new Date(input);

        renderAgeLoop(dob);
    });

    function renderAgeLoop(dob) {
        $("#choose").hide();
        $("#timer").show();

        setInterval(function() {
            var age = getAge(dob);
           // $("#age").html(age.year + "<sup>." + age.ms + "</sup>");
           $("#age").html("<span class='year'>" + age.year + "</span>" +
           "<sup class='ms'>." + age.ms + "</sup>");
        }, 100);
    }

    function getAge(dob) {
        var now = new Date();
        var duration = now - dob; // time difference in ms
        var years = duration / 31556900000; // 31556900000 is ms in one year 
        var majorMinor = years.toFixed(9).toString().split('.');

        return {
            "year": majorMinor[0],
            "ms": majorMinor[1]
        };
    }

    function main() {
        $("#choose").show();
        $("#timer").hide();
    }

    main();
});
