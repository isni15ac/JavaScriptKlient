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
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toReview' data-id=" + lecture.id+ ">Se kommentarer</button></td>" +
                "</tr>");
        })
    });
});

//button som har lectureId værdi ift. reviews
$("#teacherLecturesTableBody").on('click','.toReview',function(e){
    var userId = $(this).data("userId");
    $("#input").val("userId");
    window.location.href = "teacherReview.html#" + userId;
    console.log(userId);
    });

