/**
 * Created by Isabella on 25-11-2016.
 * Hente lektioner i via knap og så i en tabel
 */

$(document).ready(function () {

    var code = $("#inputCode").val(); //courses code
    var studentLectureTableBody = $("#studentLectureTableBody");

    //Fires on page-load for lectures
    SDK.Lectures.getAll(code, function(err, lectures){
        if(err) throw err;
        console.log(lectures);

        var $studentLecturesTableBody = $("#studentLecturesTableBody");
        lectures.forEach(function (lecture) {


            $studentLecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.id + "</td>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td>" + "<button> </button>" + "</td>" +
                "</tr>");
        })
    });
    });


