/**
 * Created by Administrator on 2018/11/3.
 */

    $("#nav li").hover(function () {
        $(".dian").eq($(this).index()).animate({"top": "42px", "left": "0","right":"0","margin":"auto" ,"opacity": "1"}, 1000, "swing", function () {
        }).animate({"opacity":"1"})
    },
    function(){
        $(".dian").eq($(this).index()).animate({"top": "0", "left": "0","right":"0","margin":"auto" ,"opacity": "0"}, function () {
        }).animate({"opacity":"0"})
    });

    $("#nav li").click(function () {
        console.log($("#nav.li"));
        $(".dian").eq($(this).index()).animate({"top": "42px", "left": "0","right":"0","margin":"auto" ,"opacity": "1"},function () {
        }).animate({"opacity": "1"})
    });

    console.log($(".wel"));
    $(".wel").animate({"top":0},1000,"linear",function(){
        $("#welcomeTo").animate({"top":"10px"},1000,"linear");
        $("#wel_title").slideDown(1000,"linear",function(){
            $(".wel_text").slideDown(1000,"linear");
            $("#wel_title").animate({"top":"380px"},"linear");
            $(".wel_text").animate({"top":"450px"},"linear")
        })
    }).delay(3000).animate({"top":"-100%"},1000,"linear");




