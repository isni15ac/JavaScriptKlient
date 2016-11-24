/**
 * Created by Isabella on 23-11-2016.
 */


$(document).ready(function () {

    SDK.User.getAll(function (err, users) {
    if (err) throw err;

    var $usersTableBody = $("#usersTableBody");
    users.forEach(function (user) {

        $usersTableBody.append(
            "<tr>" +
            "<td>" + user.firstName + " " + user.lastName + "</td>" +
            "<td>" + user.username + "</td>" +
            "<td>" + user.email + "</td>" +
            "<td>" + user.id + "</td>" +
            "</tr>");
    });

});

var currentUser = SDK.User.current();
$("#currentUserName").text(currentUser.firstName +  " " + currentUser.lastName);
