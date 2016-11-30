$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getAll(function(err, courses){
        if(err) throw err;

        /*var decrypted = encryptDecrypt(courses);
         decrypted = JSON.parse(decrypted);*/

//Table for the courses
        var $coursesTableBody = $("#coursesTableBody");
        courses.forEach(function (course) {

            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td>" + "<button id='alert'>(Click)</button>" + "</td>" +
                "</tr>");

        });

        $("#coursesTableBody").on("click", "#alert", function() {
            window.location.href = "lectures.html#";
            alert(JSON.stringify($(this)));
        });

    });
});