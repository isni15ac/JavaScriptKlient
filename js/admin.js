/**
 * Created by Isabella on 03-12-2016.
 */

$(document).ready(function () {

        var user = SDK.Storage.load("user");
        var userId = user["id"];

        //Fires on page-load
        SDK.Admin.getAll(userId, function(err, courses){
            if(err) throw err;

            var $adminTableBody = $("#adminTableBody");
            courses.forEach(function (course) {

            $adminTableBody.append(
                    "<tr>" +
                    "<td>" + decrypted.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ + "</td>" +
                    "<td class='btn-row'> <button class='btn btn-default toLecture' data-lecture=" + decrypted.displaytext + ">Klik for lektioner</button> </td>" +
                    "</tr>"

                );

            });

    });

$('#adminTableBody').on('click','.toLecture',function(e){
    var lectureCode = $(this).data("lecture");
    window.location.href = "adminLectureView.html#" + lectureCode;
});
    });