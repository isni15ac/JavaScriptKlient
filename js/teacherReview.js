/**
 * Created by Isabella on 07-12-2016.
 */

$(document).ready(function () {

    //Fires on page-load
    SDK.LectureReview.getAll(function (err, data) {
        if (err) throw err;

        /* var decrypted = encryptDecrypt(data);
         decrypted = JSON.parse(decrypted);
         */

        //Opretter variablen teacherReviewTableBody og kobler review til
        var $teacherReviewTableBody = $("#teacherReviewTableBody");
        data.forEach(function (review) {

            //Tildeler tablen nogle værdier som hentes, samt en slet knap
            $teacherReviewTableBody.append(
                "<tr>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.userId + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + "<button class='delete' data-review=" + review.id + "> Slet </button>" + "</td>" +
                "</tr>");
            console.log('button');

     //Opretter funktion til slet knap
    $('#teacherReviewTableBody').on("click",".delete",function () {
        var reviewId = $(this).data("review");
        var deleteReview = {
            reviewId: reviewId
        };

        SDK.DeleteReview.deleteReview(reviewId, function (err, reviewId) {
            location.reload();
            console.log("delete");
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




