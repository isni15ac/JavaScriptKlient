/**
 * Created by Isabella on 21-11-2016.
 */

var review = {
    id: $("#id").val(),
    userId: $("#userId").val(),
    lectureId: $("#lectureId").val(),
    rating: $("rating").val(),
    comment: $("#comment").val(),
    authorIds: [],
    publisherId: $("input[name=publisherRadios]:checked").val()
};

        $('#authorsCheckbox').find('input:checked').each(function() {
            review.authorIds.push($(this).val());
        });

        //Create book
        SDK.Review.create(review, function(err, data){
            if(err) throw err;

            $("#newUserModal").modal("hide");
            $("#newRatingModal").modal("hide");



            var $reviewsTableBody = $("#reviewsTableBody");
        data.forEach(function (review, i) {

            $reviewsTableBody.append(
                "<tr>" +
                "<td>" + review.id+ "</td>" +
                "<td>" + review.userId + "</td>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + book.isDeleted + "</td>" +
                "</tr>");
        });

    });
    user_Id", "lecture_Id", "rating", "comment","is_Deleted


});


