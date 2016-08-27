
var interactionMode;
    document.onpointerdown = function (e) {
        interactionMode = e.pointerType;
    }
    document.ontouchstart = function () {
        if (!interactionMode) {
            interactionMode = 'touch';
        }
    }
    document.onmousedown = function () {
        if (!interactionMode) {
            interactionMode = 'mouse';
        }
    }
    document.onkeydown = function () {
        if (!interactionMode) {
            interactionMode = 'keyboard';
        }
    }

//今天才知道什么叫ajax   2333.。。
//ajax封装函数
function ajax (obj) {
    var def = {
        type    : 'GET',
        url     : '',
        data    : '',
        async   : true,
        success : function () {},
        error   : function () {
            console.log('error');
        }
    }
    for (var i in obj) {
        def[i] = obj[i];
    }

    def.type = def.type.toUpperCase();

    if (typeof def.data === 'object') {
        var arr= [];
        for (var key in def.data) {
            arr.push(key + '=' + def.data[key]);
        }
        def.data = arr.join('&');
    }
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open(def.type, def.url, def.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            def.success(data);
        } else if (xhr.readyState == 4 && xhr.status !== 200) {
            def.error();
        }
    }
    if (def.type === 'GET') {
        xhr.send(null);
    } else if (def.type === 'POST') {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(def.data);
    }
}



//标签获取
ajax({
    type: 'get',
    url: '/tags',
    success: function (data) {
        var tag = document.getElementById('tag');
        var tags='';
        //限制tag的个数
        if(data.added.length>12){
            data.added.length=12;
        }

        //第二个页面的标签
        for (var i = 0; i < data.added.length; i++) {
            if((i+1)%4==0){
                tags+='<li id="tag1"><a href="##">'+data.added[i].name+'</a></li>';
            }else{
             tags+='<li><a href="##">'+data.added[i].name+'</a></li>';
            }

            }

        tag.innerHTML = tags;

        var add = document.getElementById('add');
        var avaliable='';
        for (var i = 0; i < data.avaliable.length; i++) {
            avaliable +='<li><a href="##">'+data.avaliable[i].name+'</a></li>';
        }
        add.innerHTML=avaliable;
        //本来是想同步和另外的页面标签同步妈蛋跳过去就刷新页面了
        //解决方法合成一个页面不管了!!
          //首页标签同步
          var column=document.getElementById('column');
          var columnStr='';
        for (var i = 0; i < 5; i++) {
            if(i==0){
                columnStr+='<div class="nav"><a href="##">'+data.avaliable[i].name+'</a><div class="slice"></div></div>';
            }else{
                  columnStr+='<div class="nav"><a href="##">'+data.avaliable[i].name+'</a></div>';
            }

            }
             column.innerHTML=columnStr+'<a href="demo2.html" class="arrow"><i class="iconfont">&#xe610;</i></a>';
    }
})

