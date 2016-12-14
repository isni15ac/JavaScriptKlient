/**
 * Created by Isabella on 21-11-2016.
 */

/*$(document).ready(function () {*/

$(document).ready(function () {
    var lecture = window.location.hash.substr(1); //Tager hash værdi fra url - hentet fra stackoverflow


//Fires on page-load for lectures
    SDK.LectureReview.getAll(function(err, data){
        if(err) throw err;
        console.log(data);

        //Opretter variablen tabel og sætter review på
            var $studentReviewTableBody = $("#studentReviewTableBody");
            data.forEach(function (review) {

                // Tabel som viser reviews med tildelte værdier, samt en slet knap
                $studentReviewTableBody.append(
                    "<tr>" +
                    "<td>" + review.lectureId + "</td>" +
                    "<td>" + review.userId + "</td>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td>" + "<button class='delete' data-review=" + review.id + "> Slet </button>" + "</td>" +
                    "</tr>"
                );

     //Opretter slet funktion til knap
    $('#studentReviewTableBody').on("click",".delete",function () {
        var reviewId = $(this).data("review");
        var deleteReview = { //creater et JSON obejct
            reviewId: reviewId
        };

        SDK.DeleteReview.deleteReview(reviewId, function (err, reviewId) {
           location.reload();
            console.log("delete");
        });
    });

    //Funktion til at oprette et review
        $("#createReviewButton").on("click", function(){

            //Create JSON object
            var review = {
                comment: $("#comment").val(),
                rating: $("#rating").val(),
                userId:$("#userId").val(SDK.Storage.load("userId")),
                lectureId:$("#lectureId").val(lecture),

            };
            console.log(review);

            SDK.LectureReview.create(review, function(err, review){
                if(err) throw err;

            });
        });

    });
    });

    //Logud funktion
     $("#logOutLink").click(function () {
         SDK.logOut();
         window.location.href = "login.html";

     })
     });






















