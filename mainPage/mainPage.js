/**
 * Created by Administrator on 2018/10/31.
 */
$(function(){
    $(".nav_tab").hover(function(){
        $(".nav_tab").eq($(this).index()).addClass("active");
    },function(){
        $(".nav_tab").eq($(this).index()).removeClass("active");
    });


    $(".line_time li").hover(function(){
        $(".line_time li").eq($(this).index()).addClass("active")
    },function(){
        $(".line_time li").eq($(this).index()).removeClass("active")
    });

    $(".line_time2 li").hover(function(){
        $(".line_time2 li").eq($(this).index()).addClass("active")
    },function(){
        $(".line_time2 li").eq($(this).index()).removeClass("active")
    });



    $(".school_list li").hover(function(){
        $(".school_list li").eq($(this).index()).addClass("active")
    },function(){
        $(".school_list li").eq($(this).index()).removeClass("active")
    })
});




