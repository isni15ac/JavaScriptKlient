
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

      window.location.href = "courses.html";

    });


            })

});
