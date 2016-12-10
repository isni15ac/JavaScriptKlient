/**
 * Created by Isabella on 04-12-2016.
 * Teacher kan se kurser
 */

$(document).ready(function () {

    //Fires on page-load for courses
    SDK.Course.getAll(function(err, courses){
        if(err) throw err;


//Table for the courses
        var $teacherCoursesTableBody = $("#teacherCoursesTableBody");
        courses.forEach(function (course) {

            $teacherCoursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toLecture' data-course=" + course.displaytext + ">" + "<li>" + course.code + "</li>" + "</button>" + "</td>" +
                "</tr>");
            console.log(course);
        });

//knap der indeholder værdi til kurserne (lecture)
        $('#teacherCoursesTableBody').on('click','.toLecture',function(){
            var course = $(this).data('course');
            $("#input").val("course");
            window.location.href = "teacherLectures.html#" + course;
            console.log(course);
        });


    });
});