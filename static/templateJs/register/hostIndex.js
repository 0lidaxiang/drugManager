function submit() {
  var userName = $("#userName").val();
  var password = $("#password").val();
  var cellphone = $("#cellphone").val();
  console.log("\n\n sublmit \n\n");
  $.ajax({
    url: '/register/hostRegister/',
    type: 'POST',
    dataType: 'json',
    data: {"userName": userName, "password": password, "cellphone": cellphone}
  })
  .done(function(resp) {
    console.log(resp);
    if (resp.status == "success") {
      console.log("success");
      window.location.href = resp.message
    }
    else if (resp.status == "fail") {
      alert(resp.message);
    }
    else{
      alert(resp.message);
    }
  })
  .fail(function(resp) {
    console.log(resp);
  });
}
