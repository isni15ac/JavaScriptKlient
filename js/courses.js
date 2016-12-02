$(document).ready(function () {
    var user = SDK.Storage.load("user");
    var userId = user["id"];

    //Fires on page-load
    SDK.Course.getAll(userId, function(err, courses){
        if(err) throw err;


//Table for the courses
        var $coursesTableBody = $("#coursesTableBody");
        courses.forEach(function (course) {

            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.displaytext + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toLecture' data-lecture=" + course.displaytext + ">Klik for lektioner</button> </td>" +
                "</tr>");
        });

            $('#coursesTableBody').on('click','.toLecture',function(e){
                var lectureCode = $(this).data("lecture");
                window.location.href = "lectures.html#" + lectureCode;
        });

    });
});