jQuery(document).ready(function ($) {
    // $('#readerSettingLi').addClass('active');
});

function modify() {
    var userName = $.cookie('userName');
    var newPassword = $("#newPassword").val();
    var rePassword = $("#rePassword").val();
    if (newPassword != rePassword) {
        alert("两次输入的密码不一样");
        return;
    }

    var param = {
        'userName': userName,
        'oldPassword': $("#oldPassword").val(),
        'newPassword': $("#newPassword").val(),
    };
    $.ajax({
        url: '/api/v1/login/modifyPassword',
        type: 'POST',
        dataType: 'json',
        data: param
    })
        .done(function (respData) {
            console.log(respData);
            if (respData) {
                window.location.reload();
            }
            else {
                alert("操作失败");
            }
        })
        .fail(function (resp) {
            console.log(resp);
        });
}
