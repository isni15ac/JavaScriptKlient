/**
 * Created by Isabella on 30-11-2016.
 * Prøver at få hentet courses dynamisk efter userId
 */

$(document).ready(function () {

    var $coursesTableBody = $("#coursesTableBody");

    $.ajax({
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (course) {


            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td> <class='btn-row'><button class='btn btn-default toComment' data-course=" + course.displaytext + ">Click</button></td>"+
                "</tr>");

        }

    });
});
$("#coursesTableBody").on('click', '.toComment', function() {
    var courseCode= $(this).data("course");
    window.location.href = "lectures.html#" + courseCode;
    alert(JSON.stringify($(this)));

});





