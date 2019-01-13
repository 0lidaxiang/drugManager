function confirm() {
  var videoName = $("#videoName").val();
  // var filePath = $("#filePath").val();
  var intro = $("#intro").val();
  var videoFormat = $("#videoFormat").val();
  var deadline = $("#deadline").val();
  var price = $("#price").val();
  var sellMethod1 = $("#sellMethod1").val();
  var sellMethod2 = $("#sellMethod2").val();
  var sellMethod3 = $("#sellMethod3").val();
  var checked1 = document.getElementById("sellMethod1").checked;
  var checked2 = document.getElementById("sellMethod2").checked;
  var checked3 = document.getElementById("sellMethod3").checked;
  // console.log( document.getElementById("sellMethod1").checked );

  // console.log(checked1 , sellMethod1, checked1 || checked2);
  if (!(checked1 || checked2 || checked3) )  {
    alert("请选择至少一种售卖方式");
    return false;
  }

  var formData = new FormData();
  formData.append("file", document.getElementById("file").files[0]);
  formData.append("videoName", videoName);
  formData.append("intro", intro);
  formData.append("videoFormat", videoFormat);
  formData.append("price", price);
  formData.append("sellMethod1", sellMethod1);
  formData.append("sellMethod2", sellMethod2);
  formData.append("sellMethod3", sellMethod3);
  formData.append("checked1", checked1);
  formData.append("checked2", checked2);
  formData.append("checked3", checked3);

  // console.log($('#file'));

  $.ajax({
    url: '/video/upload/',
    type: 'POST',
    cache: false,
    processData: false,  // 不处理数据
    contentType: false,   // 不设置内容类型
    data: formData,
    // {
    //   "videoName": videoName,
    //   "intro": intro,
    //   "videoFormat": videoFormat, "deadline": deadline,
    //   "price": price, "passsellMethod1wd": sellMethod1,
    //   "sellMethod2": sellMethod2, "sellMethod3": sellMethod3
    // }
  })
  .done(function(resp) {
    console.log(resp);
    // if (resp.status == "success") {
    //   console.log("success");
    //   window.location.href = resp.message
    // }
    // else if (resp.status == "fail") {
    //   alert(resp.message);
    // }
    // else{
    //   alert(resp.message);
    // }
  })
  .fail(function(resp) {
    console.log(resp);
  });
}
