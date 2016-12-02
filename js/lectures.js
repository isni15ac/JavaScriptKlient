/**
 * Created by Isabella on 25-11-2016.
 */
$(document).ready(function () {
    var lectureCode = SDK.Storage.load("code");
    var lecturesTableBody = $("#studentLectureTableBody")

    //Fires on page-load
    SDK.Lectures.getAll(lectureCode, function(err, lectures){
        if(err) throw err;


//Table for the courses
        var $lecturesTableBody = $("#lecturesTableBody");
        lectures.forEach(function (lecture) {

            $lecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.start + "</td>" +
                "<td>" + lecture.end + "</td>" +
                "<td>" + lecture.courseId + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toReview' data-id=" + lecture.id+ ">Tilføj kommentar</button></td>" +
                "</tr>");
        });

        $("#studentLectureTableBody").on('click','.toStudent',function(e){
            var id = $(this).data("id");
            window.location.href = "student.html#" + id;
        });

    });
});
