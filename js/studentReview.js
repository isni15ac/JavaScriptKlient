/**
 * Created by Isabella on 21-11-2016.
 * Henter kommentarer og så kan de slettes
 */

$(document).ready(function () {
    var userId = window.location.hash.substr(1);

    //reviews fra en bestemt bruger
    SDK.UserReview.getAll(function(err, reviews){
     if(err) throw err;


         var $studentReviewTableBody = $("#studentReviewTableBody");
         reviews.forEach(function (review) {

             var btn;
             if(review.userId == SDK.Storage.load("userId")) {
                 btn = "<button class='btn btn-default toDelete' data-id=" + userId.id+ ">Slet</button>"
             } else {
                 btn = "<button class='btn btn-danger' data-id=" + userId.id+ ">Kan ikke slette</button>"
             }

                $studentReviewTableBody.append(
                    "<tr>" +
                    "<td>" + review.lectureId + "</td>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td class='btn-row'>" + btn + "</td>" +
                    "</tr>");
            });

         // Delete knap til alle kommentarer oprettet af userId
           $("#studentReviewTableBody").on('click','.toDelete',function(e){
               e.preventDefault();
               var userId = $("#userId").val(); //skal have fat i userId
               var reviewId = $("#reviewId").val();
               // $(this).remove("review");
               window.alert("Vil du slette denne kommentar");
           });


        //Opretter et review med comment og rating i tekstboks, samt refresh funktion så review kommer i tabel
               $("#insertReviewBtn").on('click',function(e) {
                   e.preventDefault();

                   //create Json Object
                   var userReview = {
                       rating: $("#reviewRating").val(),
                       comment: $("#reviewComment").val(),
                       userId: $("input[name=userRadios]:checked").val()
                   };

                   //Fetch selected userId
                   $('#studentReviewTableBody').find('input:checked').each(function() {
                       userReview.userId.push($(this).val());
                       window.location.href = "studentReview.html#";
                   });
               });
        });
    });













