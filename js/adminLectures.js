/**
 * Created by Isabella on 06-12-2016.
 */

$(document).ready(function () {

    var course = window.location.hash.substr(1); //kode fra stackoverflow
    var adminCoursesTableBody = $("#adminCoursesTableBody");
    console.log(course);

    //Fires on page-load for lectures
    SDK.Lectures.getAll(course, function(err, data){
        if(err) throw err;
        console.log(data);

        var $adminCoursesTableBody = $("#adminCoursesTableBody");
        data.forEach(function (lecture) {

            $adminCoursesTableBody.append(
                "<tr>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td class='btn-row'> <button class='btn btn-default toReview' data-id=" + lecture.id+ ">Klik for at tilføje kommentar</button></td>" +
                "</tr>");
        })
    });
});