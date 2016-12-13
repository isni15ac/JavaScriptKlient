/**
 * Created by Isabella on 21-11-2016.
 */

/*$(document).ready(function () {*/

$(document).ready(function () {

//Fires on page-load for lectures
    SDK.LectureReview.getAll(function(err, data){
        if(err) throw err;
        console.log(data);

            var $studentReviewTableBody = $("#studentReviewTableBody");
            data.forEach(function (review) {

                // Tabellen som viser frem alle reviews til den lecturen.
                $studentReviewTableBody.append(
                    "<tr>" +
                    "<td>" + review.lectureId + "</td>" +
                    "<td>" + review.userId + "</td>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td>" + "<button class='delete' data-review=" + review.id + "> Slet </button>" + "</td>" +
                    "</tr>"
                );


    $('#studentReviewTableBody').on("click",".delete",function () {
        var reviewId = $(this).data("review");
        var deleteReview = { //creater et JSON obejct
            reviewId: reviewId
        };

        SDK.DeleteReview.deleteReview(reviewId, function (err, reviewId) {
            /*location.reload();*/
            console.log("delete");
        });
    });
            });

//Creater a JSON obejct
    function addReview() {
        var review = {
            comment: $("#comment").val(),
            rating: $("#rating").val(),
            userId: SDK.Storage.load("userId"),
            lectureId: SDK.Storage.load("lectureId"),

        };
        SDK.LectureReview.add(review, function (err, data) {
            console.log(review);
            /*location.reload();*/

        });
        $("#createReviewBtn").click(function(e) {
            e.preventDefault()
        })
    }
    });

    //Logud funktion
     $("#logOutLink").click(function () {
         SDK.logOut();
         window.location.href = "login.html";

     })
     });






















