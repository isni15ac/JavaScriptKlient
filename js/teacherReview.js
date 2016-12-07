/**
 * Created by Isabella on 07-12-2016.
 */

$(document).ready(function () {
    var userId = window.location.hash.substr(1);

    //reviews fra en bestemt bruger
    SDK.UserReview.getAll(function(err, reviews){
        if(err) throw err;

        var $teacherReviewTableBody = $("#teacherReviewTableBody");
        reviews.forEach(function (review) {


            $teacherReviewTableBody.append(
                "<tr>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td class='btn-row'>" + btn + "</td>" +
                "</tr>");
        });


        });
    });
