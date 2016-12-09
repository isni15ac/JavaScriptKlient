/**
 * Created by Isabella on 21-11-2016.
 */

$(document).ready(function () {
    var userId = window.location.hash.substr(1); //kode fra stackoverflow

    $.ajax({
        method: "GET",
        url: SDK.serverURL + "/review/user/" + userId,
        dataType: "json",
        success: function(reviews){

            var table = $("#studentReviewTableBody");
            reviews.forEach(function (review) {

                var btn;
                if(review.userId == SDK.Storage.load("userId")) {
                    btn = "<button class='btn btn-default toDelete' data-id=" + userId.id+ ">Slet</button>"
                } else {
                    btn = "<button class='btn btn-danger' data-id=" + userId.id+ ">Kan ikke slette</button>"
                }

                table.append(
                    "<tr>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td class='btn-row'>" + btn + "</td>" +
                    "</tr>"
                );

            })

        },
        error: function(err) {
            console.log(err);
        }
    })

});

$("#studentReviewTableBody").on('click','.toDelete',function(e){
    var id = $(this).data("id");

    $.ajax({
        type: "DELETE",
        url: SDK.serverURL + "/student/review",
        contentType: "application/json",
        data: JSON.stringify({
            id: id,
            userId: SDK.Storage.load("userId")
        }),
        success: function(res){
            location.reload()
        },
        error: function(err) {
            console.log(err);
        }
    })
});

$("#createReviewBtn").click(function(e) {
    e.preventDefault()
    var rating = $("#rating").val()
    var comment = $("#comment").val()
    var lecture = window.location.hash.substr(1); //kode fra stackoverflow

    $.ajax({
        type: "POST",
        url: SDK.serverURL + "/review",
        contentType: "application/json",
        data: JSON.stringify({
            rating: rating,
            comment: comment,
            lectureId: lecture,
            userId: SDK.Storage.load("userId")
        }),
        success: function(res){
            location.reload()
        },
        error: function(err) {
            console.log(err);
        }
    })
});















