/**
 * Created by Isabella on 25-11-2016.
 */
$(document).ready(function () {

    //Opretter to variabler
    var course = window.location.hash.substr(1); //Tager hash værdi fra url - kode fra stackoverflow
    var studentLecturesTableBody = $("#studentLecturesTableBody");
    console.log(course);

    //Fires on page-load for lectures
    SDK.Lectures.getAll(course, function(err, data){
        if(err) throw err;
        console.log(data);

        //Sætter lectures på variablen lecturesTableBody
        var $studentLecturesTableBody = $("#studentLecturesTableBody");
        data.forEach(function (lecture) {

            // Tabel der indeholder lecture værdier, samt button til hver lecture
            $studentLecturesTableBody.append(
                "<tr>" +
                "<td>" + lecture.id + "</td>" +
                "<td>" + lecture.type + "</td>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td>" + "<button id='knap1'>Se review</button>" + "</td>" +
                "</tr>");

            //Lecture button med click function og lecture værdi, samt loader til review siden
           /*$("#studentLecturesTableBody").on('click','.toReview',function(){
                SDK.Storage.persist("lectureId", lecture.id);
                window.location.href = "studentReview.html#" + lecture.id;
                console.log(lecture.id);
                toReview.close('.toReview');

        })*/
            $('button[id^="knap1"]').click(function(){
                SDK.Storage.persist("lectureId", lecture.id);
                window.location.href="studentReview.html#"; + lecture.id;
                console.log(lecture.id);
                knap1.close("knap1");
            });
    });
    });
//Logout funktion - fører en til login siden
    $("#logOutLink").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });
});

