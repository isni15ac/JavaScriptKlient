/**
 * Created by Isabella on 21-11-2016.
 */

$(document).ready(function () {

    //Fires on page-load
    SDK.Review.getAll(function(err, review){
        if(err) throw err;

        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


        var $reviewsTableBody = $("#reviewsTableBody");
        decrypted.forEach(function (review, i) {

            $reviewsTableBody.append(
                "<tr>" +
                "<td>" + review. + "</td>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.version + "</td>" +
                "<td>" + review.priceAB + "</td>" +
                "<td>" + book.priceSAXO + "</td>" +
                "<td>" + book.priceCDON + "</td>" +
                "<td>" + book.ISBN + "</td>" +
                "</tr>");
        });

    });
    user_Id", "lecture_Id", "rating", "comment","is_Deleted


});


