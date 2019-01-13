// function submit() {
//   var userName = $("#userName").val();
//   var password = $("#password").val();
//   var rpassword = $("#rpassword").val();
//   console.log(password, rpassword);
//   if (password != rpassword) {
//     return 0;
//     alert("您两次输入的密码不一致");
//   };
//   var email = $("#email").val();
//
//   $.ajax({
//     url: '/register/userRegister/',
//     type: 'POST',
//     dataType: 'json',
//     data: {"userName": userName, "password": password, "email": email}
//   })
//   .done(function(resp) {
//     console.log(resp);
//     if (resp.status) {
//       console.log("success");
//       window.location.href = resp.message
//     }
//     else if (resp.status) {
//       alert(resp.message);
//     }
//     else{
//       alert(resp.message);
//     }
//   })
//   .fail(function(resp) {
//     console.log(resp);
//   });
// }
