var slideshow = document.getElementById('slideshow');
var list = document.getElementById('list');
var buttons = document.getElementById("buttons").getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
 var mask = document.getElementsByClassName('mask');

index = 1;
var speed = 1.6;
document.getElementById('next').addEventListener('click', function next() {
    var left = parseInt(list.style.left);

    if (parseInt(list.style.left) == -64) {
        left = -16;
    }
    if (index == 3) {
        index = 1;
    } else {
        index += 1;
    }
    list.style.left = left - 16 + "rem";
    showButton();
}, false);


document.getElementById('prev').addEventListener('click', function prev() {
    var left = parseInt(list.style.left);
    if (parseInt(list.style.left) == 0) {
        left = -48;
    }
    if (index == 1) {
        index = 3;
    } else {
        index -= 1;
    }

    list.style.left = left + 16 + "rem";
    showButton();
}, false);

function showButton() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == 'on') {
            buttons[i].className = '';
            break;
        }

    }

    buttons[index - 1].className = 'on';

    function show() {

        for (var i = 0; i < mask.length; i++) {

            if (mask[i].className = 'mask show') {
                mask[i].className = 'mask';
            }

            mask[index - 1].className = 'mask show';

        }
    }
    show();
}

function play() {
    setTimeout(function() {
        document.getElementById('next').click();
        play();
    }, 3000);
}
play();
//小圆点滚动
function show() {
    var mask = document.getElementsByClassName('mask');
    for (var i = 0; i < mask.length; i++) {

        if (mask[i].className = 'mask show') {
            mask[i].className = 'mask';
        }
        console.log(mask[i].className);
        mask[index - 1].className = 'mask show';
        console.log(index);
    }
}

//轮播图
ajax({
        type: 'get',
        url: '/sliders',
        success: function (data) {
            var list = document.getElementById('list');
            var img = '';
            for (var i = 0; i < data.length; i++) {
                img += '<img src="' + data[i].imgURL + '" src="">';
            }
            list.innerHTML = img;
        }
    })


//获取新闻内容
ajax({
    type: 'get',
    url: '/news?num=5',
    success: function (data) {

    var word = '';
        var content = document.getElementById('content');
        for (var i =0 ; i < 5; i++) {
            var type = data[i].type;
            var typeword = '';
            if(data[i].description.length>26){
                data[i].description=data[i].description.slice(0,24);
            }
            if (type !== null) {
                typeword = '<div class="label1" style="background-color:' + data[i].typeColor + '"><div class="content-tag">' + data[i].type + '</div></div>';
            }
             word+='<div class="new"><img src="'+data[i].imgURL+'"><a>'+data[i].title+'</a><p>'+data[i].description+'...</p>'+typeword+'<span>'+data[i].post + '跟帖</span></div>'
        }
        content.innerHTML =word;
        //轮播页面三个标题
        var slideshowText = '';
        var slideshow = document.getElementById('slideshow-text');
        for (var i =0 ; i < 3; i++) {
            var type = data[i].type;
            var typeword = '';
            if (type !== null) {
                typeword = '<div class="label" style="background-color:' + data[i].typeColor + '"><span>' + data[i].type + '</span></div>';
            }
             slideshowText+='<div class="mask show">'+typeword+'<p>'+data[i].title+'</p></div>';
        }
        slideshow.innerHTML = slideshowText;
    }

})

