
$(document).ready(function () {

        //Login Button
        $("#loginButton").on("click", function(e){
    e.preventDefault();

    var cbsMail = $("#inputEmail").val();
    var password = $("#inputPassword").val();

    SDK.login(cbsMail, password, function(err, data){

        //On wrong credentials
      if(err) {
        return $("#loginForm").find(".form-group").addClass("has-error");
      }

      //Login OK!
      $("#loginForm").find(".form-group").addClass("has-success");

      if (data.type =="admin") {
          window.location.href="admin.html";
      }
      else if (data.type =="student"){
          window.location.href="studentCourses.html";
      }
      else if(data.type == "teacher") {
          window.location.href = "teacher.html";
      }
      else{
          window.alert("Der er en fejl")
      }
    });

            })
});
