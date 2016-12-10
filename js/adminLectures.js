/**
 * Created by Isabella on 06-12-2016.
 */

$(document).ready(function () {

    var course = window.location.hash.substr(1); //kode fra stackoverflow
    var adminLecturesTableBody = $("#adminLecturesTableBody");
    console.log(course);

    //Fires on page-load for lectures
    SDK.Lectures.getAll(course, function(err, data){
        if(err) throw err;
        console.log(data);

        var $adminLecturesTableBody = $("#adminLecturesTableBody");
        data.forEach(function (lecture) {

            $adminLecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.id + "</td>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td>" + "<button id='knap1'>Se review</button>" + "</td>" +
                "</tr>");

//button som har lectureId værdi ift. reviews
$('button[id^="knap1"]').click(function(){
    SDK.Storage.persist("lectureId", lecture.id);
    window.location.href="adminReview.html#"; + lecture.id;
    console.log(lecture.id);
    knap1.close("knap1");
            });
        });
    });
});