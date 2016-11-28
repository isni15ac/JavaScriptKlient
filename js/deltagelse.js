/**
 * Created by Isabella on 23-11-2016.
 */


$(document).ready(function () {

    SDK.User.getAll(function (err, data) {
    if (err) throw err;

    var $usersTableBody = $("#usersTableBody");
    data.forEach(function (user) {

        $usersTableBody.append(
            "<tr>" +
            "<td>" + user.cbsMail + "</td>" +
            "<td>" + user.type + "</td>" +
            "</tr>");
    });

});


