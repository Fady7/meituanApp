import '../css/reset.css';
import '../css/list.css';
import '../css/meituanIndex.css';
import '../webfont/iconfont.css';
import $ from 'jquery';
window.$ = $;

getData();
function getData() {
    var url = "http://localhost:9999/api/list.json";
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            // console.log(data);
            addList(data);
        },
        error: function () {
            close.log("error");
        }
    })
}

function addList(data) {
    var list = data.list;
    console.log(list);
    var str = '';
    list.forEach(function (ele, index) {
        str += '<li class="foodspic">\
        <a href="http://localhost:9999/info.html?id=' + ele.id + '" class="clearfix">\
            <img src="' + ele.info.imgurl + '" alt="">\
            <dl>\
                <dt>' + ele.info.name + '</dt>\
                <dd>\
                    <p class="foodtitle">' + ele.info.des + '</p>\
                    <p class="price">\
                        <span><strong>' + ele.info.price + '</strong><i>元</i></span>\
                        <span>' + ele.info.newUser + '</span>\
                        <span>' + ele.info.sale + '</span>\
                    </p>\
                </dd>\
            </dl>\
        </a>\
    </li> '
    })
    $('.guess-foodlist .list').html(str);
}

$(window).on('scroll', function() {
    var top = $(window).scrollTop();
    if(top > 300) {
        $("#gotop").slideDown();
    }else{
        $("#gotop").slideUp();
    }
});
$("#gotop").click(function() {
    $("html,body").animate({
        scrollTop: 0,
    }, 1000)
})