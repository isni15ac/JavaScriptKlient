/**
 * Created by Isabella on 06-12-2016.
 */

$(document).ready(function () {

    var course = window.location.hash.substr(1); //kode fra stackoverflow
    var teacherLecturesTableBody = $("#teacherLecturesTableBody");
    console.log(course);

    //Fires on page-load for lectures
    SDK.Lectures.getAll(course, function(err, data){
        if(err) throw err;
        console.log(data);

        var $teacherLecturesTableBody = $("#teacherLecturesTableBody");
        data.forEach(function (lecture) {

            $teacherLecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.id + "</td>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td>" + "<button id='knap1'>Se review</button>" + "</td>" +
                "</tr>");

            $('button[id^="knap1"]').click(function(){
                SDK.Storage.persist("lectureId", lecture.id);
                window.location.href="teacherReview.html#"; + lecture.id;
                console.log(lecture.id);
                knap1.close("knap1");
            });
        })

    });
});



