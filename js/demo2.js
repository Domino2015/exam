/*
var tagString=[];

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
            avaliable +='<li><a href="##">'+data.avaliable[i].name+'</a></li>'
        }
        add.innerHTML = avaliable;

          //首页标签同步

        for (var i = 0; i < 5; i++) {
            var s=data.added[i].name;
            tagString.push(s);
            }

    }
})*/
var add =document.getElementById('add');
var tag =document.getElementById('tag');
var tagWord;
add.addEventListener('click',getEvent,false);
 function getEvent(event){
            x= event.target;
            x.id='change';
            tagWord=x.innerHTML;
            var child=document.getElementById("change");
            child.parentNode.style.display='none';
            console.log(tagWord);
            var node = document.createElement('a');
            var textnode = document.createTextNode(tagWord);
            node.appendChild(textnode);
            var node2=document.createElement('li');
            node2.appendChild(node);
            document.getElementById("tag").appendChild(node2);
        }
