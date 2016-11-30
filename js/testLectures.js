/**
 * Created by Isabella on 30-11-2016.
 */

$(document).ready(function () {

    var $lecturesTableBody = $("#lecturesTableBody");

    $.ajax({
        url: SDK.serverURL + "/lecture/" + SDK.Storage.load("code"),
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (lecture) {

            $lecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.id + "</td>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.start + "</td>" +
                "<td>" + lecture.end + "</td>" +
                "<td>" + lecture.location + "</td>" +
                "<td>" + lecture.courseId + "</td>" +
                "<td> <class='btn-row'><button class='btn btn-default toComment' data-lecture=" + lecture.displaytext + ">Click</button></td>"+
                "</tr>");

        }

    });
});

$("#lecturesTableBody").on('click', '.toComment', function() {
    var lectureCode= $(this).data("lecture");
    window.location.href = "comments.html#" + lectureCode;
    alert(JSON.stringify($(this)));

});

