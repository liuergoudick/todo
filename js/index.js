$(function(){
    var todos=[];   //定义一个空的表
        // {title:trtry,todo:1,deleat:0},
        // {title:trtry,todo:1,deleat:0},
        // {title:trtry,todo:1,deleat:0}


    if( localStorage.todo_data  ){
        todos=JSON.parse(localStorage.todo_data);
        xuanran();
    } else {
    localStorage.todo_data=JSON.stringify(todos)
    }
$('.add').on('click',function(){
    $('.list').empty();
    todos.push({
        biaoti:"ABC"
    });
    localStorage.todo_data=JSON.stringify(todos);
    xuanran();
});   //添加
    function xuanran(){
          todos=JSON.parse(localStorage.todo_data);
        $.each(todos,function(i,v) {
            $('<li class="list-itam">' +
                '<div class="biaoti">' + v.biaoti + '</div>' +
                '<div class="done active"></div>' +
                '<div class="delate active"></div>' +
                '</li>')
                .appendTo(".list");
        })
    }              //渲染


 $('.list').on('click',"li",function(e) {
     $('<input type="text">').appendTo(this);
     $('input').css({'height': '0.9rem', 'font-size': '0.28rem'});
     $(this).find('.biaoti').text().empty();
     $('input').focusout(function () {

         $(this).find('.biaoti').text($('input').val());
         $(this).find('input').remove();
     })

 });


var left=null;
    $('.list').on('touchstart', 'li', function (e) {
        left = e.originalEvent.changedTouches[0].pageX;
    });
    $('.list').on('touchmove', 'li', function (e) {
        var i = $(this).index();
        var n = e.originalEvent.changedTouches[0].pageX;
        var x = n - left;
        $(this).find('.bg').width(x);
        $(this).css('transform', 'translate3d(' + x + 'px,0,0)');
        if (x > 200) {
            $(this .biaoti).addClass('active').delay(800).queue(function () {
                $(this).removeClass('active').remove().dequeue();
            });
            todos.splice(i, 1);
            localStorage.todo_data = JSON.stringify(todos);
        }
    });
    list.on('touchend', 'li', function (e) {
        $(this).css('transform', 'translate3d(0,0,0)');
        $(this).css('transition', 'transform 0.8s ease');
        $(this).delay(800).queue(function () {
            $(this).css('transition', 'none').dequeue()
        })
    });





})


























