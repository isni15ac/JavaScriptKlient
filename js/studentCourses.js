// Har hentet inspiration til denne klasse fra javascript kurset

$(document).ready(function () {

    //Fires on page-load for courses
    SDK.Course.getAll(function(err, courses){
        if(err) throw err;


        //Sætter courses på variablen coursesTableBody
        var $studentCoursesTableBody = $("#studentCoursesTableBody");
        courses.forEach(function (course) {

            //Tabel for courses indeholdende værdierne code og dislaytext, samt én button til hver course
            $studentCoursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toLecture' data-course=" + course.displaytext + ">" + "<li>" + course.code + "</li>" + "</button>" + "</td>" +
                "</tr>");
            console.log(course);
        });

        //Course button med click function og course værdi, samt loader til lecture siden
            $('#studentCoursesTableBody').on('click','.toLecture',function(){
                var course = $(this).data('course');
                $("#input").val("course");
               window.location.href = "studentLectures.html#" + course;
                console.log(course);
            });


    });
    $("#logOutLink").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });
    });


