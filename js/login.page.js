//Der er hentet inspiration til denne klasse fra js kurset
$(document).ready(function () {

    //Login Button
    $("#loginButton").on("click", function(e){
        e.preventDefault();

    //Log-in variabler
    var cbsMail = $("#inputEmail").val();
    var password = $("#inputPassword").val();


    //Stien til log-in metoden som findes i sdk.js
    SDK.login(cbsMail, password, function(err, data){

        //On wrong credentials
        if(err) {
        return $("#loginForm").find(".form-group").addClass("has-error");
        }

      //Login OK!
      $("#loginForm").find(".form-group").addClass("has-success");



      //Skelne mellem de aktører som logger ind
       if (data.type =="student"){
          window.location.href="studentCourses.html";
            window.alert("Student");

        } if(data.type == "teacher") {
          window.location.href = "teacherCourses.html";
            window.alert("Teacher");
        }
    });
            });
});
