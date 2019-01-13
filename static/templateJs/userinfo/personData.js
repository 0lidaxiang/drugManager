jQuery(document).ready(function ($) {
    // $('#readerSettingLi').addClass('active');();
    loadData();
});

function cancel() {
    window.location.reload();
}

function confirm() {
    // var userName = $.cookie('userName');
    // var param = {
    //     'userName': userName,
    //     'age': $("#age").val(),
    //     'height': $("#height").val(),
    //     'weight': $("#weight").val(),
    //     'bust': $("#bust").val(),
    //     'city': $("#city").val(),
    //     'area': $("#area").val()
    // };
    //
    // $.ajax({
    //     url: '/userinfo/personData/post/',
    //     type: 'POST',
    //     dataType: 'json',
    //     data: param
    // })
    //     .done(function (resp) {
    //         console.log(resp);
    //         if (resp.result) {
    //             $("#userName").val = resp.userName;
    //             window.location.reload();
    //         }
    //         else {
    //             alert(resp.statusNumber + resp.message);
    //         }
    //
    //     })
    //     .fail(function (resp) {
    //         console.log(resp);
    //     });
}


function loadData() {
    var userId = $.cookie('userId');
    console.log('userName', userId);
    $.get("/api/v1/userinfo", {'id': userId}, function (respData) {
        var resp = respData.results[0];
        console.log(resp,resp.userName);
        // console.log(respData.length, respData.length>0);
        if (respData.count > 0) {
            $("#userName").val(resp.userName);
            $("#money").val(resp.money);
            $("#creditValue").val(resp.creditValue);
            $("#age").val(resp.age);
            $("#height").val(resp.height);
            $("#weight").val(resp.weight);
            $("#bust").val(resp.bust);
            $("#city").val(resp.city);
            $("#area").val(resp.area);
            $("#confirmBtn").attr("disabled", true);
            $("#confirmBtn").removeClass("btn-success");
            $("#modifyBtn").attr("disabled", false);
            $("#modifyBtn").addClass("btn-success");
        }
        else {
            console.log("操作失败");
            console.log(respData);
        }
        ;
    });
}

function modify() {
    var userName = $.cookie('userName');

    var param = {
        'id': userName,
        'userName':$("#userName").val(),
        'age': $("#age").val(),
        'height': $("#height").val(),
        'weight': $("#weight").val(),
        'bust': $("#bust").val(),
        'city': $("#city").val(),
        'area': $("#area").val()
    };
    $.ajax({
        url: '/api/v1/userinfo/' + userName,
        type: 'PUT',
        dataType: 'json',
        data: param
    })
        .done(function (respData) {
            // console.log(respData);
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
