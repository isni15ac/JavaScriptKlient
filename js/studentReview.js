/**
 * Created by Isabella on 21-11-2016.
 * Henter kommentarer og så kan de slettes
 */

$(document).ready(function () {

    var Id = window.location.hash.substr(1); //benytter kode fra stackoverflow
        var studentReviewTableBody = $("#studentReviewTableBody");
        console.log(Id);

                var btn;
                if(id.lectureId == SDK.Storage.load("Id")) {
                    btn = "<button class='btn btn-default toDelete' data-id=" + lectureId.id+ ">Slet</button>"
                } else {
                    btn = "<button class='btn btn-danger' data-id=" + lectureId.id+ ">Kan ikke slette</button>"
                }

        //Table for the courses
        var $studentReviewTableBody = $("#studentReviewTableBody");
        Id.forEach(function (Id) {

                $studentReviewTableBody.append(
                    "<tr>" +
                    "<td>" + Id.comment + "</td>" +
                    "<td>" + Id.rating + "</td>" +
                    "<td class='btn-row'>" + btn + "</td>" +
                    "</tr>"
                );
            });
    });


$("#studentReviewTableBody").on('click','.toDelete',function(e){
    var id = $(this).data("id");

        }),


$("#insertReviewBtn").click(function(e) {
    e.preventDefault()
    var rating = $("#rating").val()
    var comment = $("#comment").val()
    var Id = window.location.hash.substr(1);

});

