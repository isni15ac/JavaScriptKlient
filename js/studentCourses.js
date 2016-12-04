$(document).ready(function () {

    var user = SDK.Storage.load("user");
    var userId = user["id"];

    //Fires on page-load for courses
    SDK.Course.getAll(userId, function(err, courses){
        if(err) throw err;


//Table for the courses
        var $coursesTableBody = $("#coursesTableBody");
        courses.forEach(function (course) {

            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default' data-course=" + course.displaytext + ">" + "<li>" + course.code + "</li>" + "</button>" + "</td>" +
                "</tr>");
            console.log(course);
        });

            $('#coursesTableBody').on('click','button',function(){
                var code = $(this).data("lecture");
                $("#input").val("code");
               window.location.href = "studentLectures.html#" + code;
            });
    });
    });

/*var getButtonValue = function($button) {
 var label = $button.text();
 $button.text('');
 var buttonValue = $button.val();
 $button.text(label);
 return buttonValue;
 }*/

