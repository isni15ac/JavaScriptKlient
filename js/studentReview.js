/**
 * Created by Isabella on 21-11-2016.
 * Henter kommentarer og så kan de slettes
 */

$(document).ready(function () {
    var userId = window.location.hash.substr(1); //kode fra stackoverflow

    //reviews fra en bestemt bruger
       SDK.UserReview.getAll(userId, function(err, reviews){
            if(err) throw err;

           var btn;
           if(id == SDK.Storage.load("userId")) {
               btn = "<button class='btn btn-default toDelete' data-id=" + userId.id+ ">Slet</button>"
           } else {
               btn = "<button class='btn btn-danger' data-id=" + userId.id+ ">Kan ikke slette</button>"
           }

            var studentReviewTableBody = $("#studentReviewTableBody");
            reviews.forEach(function (review) {

                studentReviewTableBody.append(
                    "<tr>" +
                    "<td>" + review.lectureId + "</td>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td class='btn-row'>" + btn + "</td>" +
                    "</tr>");
            });

           $("#reviewTableBody").on('click','.toDelete',function(e){
               var id = $(this).data("id");
           });

               $("#insertReviewBtn").click(function(e) {
                   e.preventDefault()
                   var rating = $("#rating").val()
                   var comment = $("#comment").val()
                   var userId = window.location.hash.substr(1); //kode fra stackoverflow

               });



    //reviews fra en bestemt lecture
    SDK.LectureReview.getAll(function (err, data) {
        if (err) throw err;

        var $lectureReviewBody = $("#lectureReviewBody");
        data.forEach(function (review) {


            $lectureReviewBody.append(
                "<tr>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + review.comment + "</td>" +

                "</tr>");
        });
    });
           });
    });








