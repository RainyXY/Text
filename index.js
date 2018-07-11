$(document).ready(function(){
    var isHiden = true; /*控制切换菜单*/
    $('#side_btn').click(function(){
        if(isHiden){
            $('#sidebar').animate({right:'+=217px'}); //菜单块向左移动
        }else{
            $('#sidebar').animate({right:'-=217px'});//菜单块向右移动
        }
        isHiden = !isHiden;
    });
// isHiden只是返回部件的隐藏属性，并不能表示部件当前的真实状态。比如A部件有个子部件B，而A处于隐藏状态，子部件B必然也不可见，但子部件B本身的isHiden还是为false。
    // 信号量
    var index = 0;
    // 更改按钮文字の点击事件
    $('#side_btn').click(function(){
        //防流氓点击
        if($('#side_btn ul li').is(":animated")){
            return;
        }
        // 老文字淡出
        $('#side_btn ul li').eq(index).fadeOut(0,function(){
            // 信号量
            index --;
            if(index < 0){
                index = 1;
            }
            // 新文字淡入
            $('#side_btn ul li').eq(index).fadeIn(0);
        });
    });
});