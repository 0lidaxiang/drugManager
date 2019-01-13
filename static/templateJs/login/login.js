$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

// $(function() {
// 		$(document).ready(function(){
// 	　　　$('input[name="identity"]').change(function(){
// 	　　　　　var p1=$(this).children('option:selected').val(); //这就是selected的值
// 	　　　　　alert(p1);
// 			 });
// 		});
// });

function login() {
  var userName = $("#userName").val();
  var passwd = $("#password").val();
  // var lastUrl = decodeURIComponent($.urlParam('lastUrl'));

  var urlVal = '/api/v1/login/userLogin';
    // $.cookie('usernameset', userName);
  // var identity = $('input[name="identity"]:checked').val();

  // console.log(urlVal);;
  console.log(userName);
  $.ajax({
    url: urlVal,
    type: 'get',
    dataType: 'json',
    data: {"userName": userName, "password": passwd }
  })
  .done(function(resp) {
    console.log(userName);

    console.log(resp);
    if (resp.status) {
      console.log("success");


        window.location.href = resp.url
    }
    else if (resp.status == false) {
      console.log(resp.message);
      window.location.href = resp.url
    }
    else{
      console.log(resp.message);
      window.location.href = resp.url
    }
  })
  .fail(function(resp) {
    console.log(resp);
  });
}
