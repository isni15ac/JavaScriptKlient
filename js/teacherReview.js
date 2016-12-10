/**
 * Created by Isabella on 07-12-2016.
 */

$(document).ready(function () {

    var lectureId = window.location.hash.substr(1); //Tager hash værdi fra url - kode fra stackoverflow
    console.log(lectureId);

//Fires on page-load for lectures
    SDK.LectureReview.getAll(function(err, data){
        if(err) throw err;
        console.log(data);

        var $teacherReviewTableBody = $("#teacherReviewTableBody");
        data.forEach(function (review) {

            // Tabellen som viser frem alle reviews til den lecturen.
            $teacherReviewTableBody.append(
                "<tr>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.userId + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "</tr>"
            );
        });
    });
});

