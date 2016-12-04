/**
 * Created by Isabella on 25-11-2016.
 * Hente lektioner i via knap og så i en tabel
 */

$(document).ready(function () {

    var course = window.location.hash.substr(1);
    var studentLecturesTableBody = $("#studentLecturesTableBody");
    console.log(course);

    //Fires on page-load for lectures
    SDK.Lectures.getAll(course, function(err, data){
        if(err) throw err;
        console.log(data);

        var $studentLecturesTableBody = $("#studentLecturesTableBody");
        data.forEach(function (lecture) {

            $studentLecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toReview' data-id=" + lecture.id+ ">Klik for at tilføje kommentar</button></td>" +
                "</tr>");
        })
    });
    });
$("#studentLecturesTableBody").on('click','.toReview',function(e){
    var id = $(this).data("id");
    window.location.href = "studentReview.html#" + id;
    console.log(id);

});

