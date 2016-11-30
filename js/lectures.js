/**
 * Created by Isabella on 25-11-2016.
 */

$(document).ready(function () {

    //Fires on page-load
    SDK.Lectures.getAll(function(err, data){
        if(err) throw err;

        var $lecturesTableBody = $("#lecturesTableBody");
        data.forEach(function (lecture) {

            $lecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td>" + "<button id='alert'>(Click)</button>" + "</td>" +
                "</tr>");

        });
        $("#coursesTableBody").on("click", "#alert", function() {
            alert(JSON.stringify($(this)));

        });
    });

});

