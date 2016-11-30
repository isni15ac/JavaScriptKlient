/**
 * Created by Isabella on 21-11-2016.
 */

$(document).ready(function () {

        var $viewTableBody = $("#reviewTableBody");

        $.ajax({
            url: SDK.serverURL + "/review/" + SDK.Storage.load("user"),
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (review) {

                $reviewsTableBody.append(
                    "<tr>" +
                    "<td>" + review.id+ "</td>" +
                    "<td>" + review.userId + "</td>" +
                    "<td>" + review.lectureId + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.isDeleted + "</td>" +
                    "</tr>");

    });

    current: function () {
        return SDK.Storage.load("user");


},
