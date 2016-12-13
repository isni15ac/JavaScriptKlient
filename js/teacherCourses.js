/**
 * Created by Isabella on 04-12-2016.
 * Teacher kan se kurser
 */

$(document).ready(function () {

    //Fires on page-load for courses
    SDK.Course.getAll(function(err, courses){
        if(err) throw err;

        //Table for courses med værdierne code og displaytext
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

        //knap der kører til lectures med course værdi
        $('#teacherCoursesTableBody').on('click','.toLecture',function(){
            var course = $(this).data('course');
            $("#input").val("course");
            window.location.href = "teacherLectures.html#" + course;
            console.log(course);
        });
    });

    //Logud funktion
    //Hentet fra Elena
    $("#LogOut").click(function () {
        SDK.logOut();
        window.location.href = "login.html";
        })
});