$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getbyId(function(err, courses){
        if(err) throw err;

        var decrypted = encryptDecrypt(courses);
        decrypted = JSON.parse(decrypted);

        var $courseDropdown = $("#courseDropdown");
        decrypted.forEach(function (course, i) {


        //henter courses
            $courseDropdown.append(
                "<button id= ´course´-select'>
                "<li value= "course.id">"+course.displaytext"</li>" +
                "</button>");

            $courseDropdown.on('change', function(){
                SDK.Lectures.getById(function(err, Id){
                    if(err) throw err;


        var $lecturesTableBody = $("#lecturesTableBody");
        decrypted.forEach(function (lecture, i) {


            "<tr>" +
                "<td>" + lecture.id + "</td>" +
                "<td>" + lecture.code + "</td>" +
                "<td>" + lecture.name + "</td>" +
                "<td>" + lecture.studyId + "</td>" +
                "</tr>");

            window.location.href = "../Lecture.html";
        });

    });

        });
    });




