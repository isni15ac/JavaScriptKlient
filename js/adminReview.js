/**
 * Created by Isabella on 07-12-2016.
 */

$(document).ready(function () {
    var userId = window.location.hash.substr(1);

    //reviews fra en bestemt bruger
    SDK.UserReview.getAll(function(err, reviews){
        if(err) throw err;

        var $adminReviewTableBody = $("#adminReviewTableBody");
        reviews.forEach(function (review) {

            var btn;
            if(review.userId == SDK.Storage.load("userId")) {
                btn = "<button class='btn btn-default toDelete' data-id=" + userId.id+ ">Slet</button>"
            } else {
                btn = "<button class='btn btn-danger' data-id=" + userId.id+ ">Kan ikke slette</button>"
            }

            $adminReviewTableBody.append(
                "<tr>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td class='btn-row'>" + btn + "</td>" +
                "</tr>");
        });

        // Delete knap til alle kommentarer
        $("#adminReviewTableBody").on('click','.toDelete',function(e){
            $(this).remove("review");
            window.alert("Vil du slette denne kommentar");

        });
        });
    });