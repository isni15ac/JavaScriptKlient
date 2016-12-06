/**
 * Created by Isabella on 03-12-2016.
 */

$(document).ready(function () {
    var user = SDK.Storage.load("user");
    var userId = user["id"];

    //Fires on page-load for courses
    SDK.Course.getAll(userId, function(err, courses){
        if(err) throw err;


//Table for the courses
        var $adminCoursesTableBody = $("#adminCoursesTableBody");
        courses.forEach(function (course) {

            $adminCoursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toLecture' data-course=" + course.displaytext + ">" + "<li>" + course.code + "</li>" + "</button>" + "</td>" +
                "</tr>");
            console.log(course);
        });

        $('#adminCoursesTableBody').on('click','.toLecture',function(){
            var course = $(this).data('course');
            $("#input").val("course");
            window.location.href = "adminLectures.html#" + course;
            console.log(course);
        });


    });
});