/**
 * Created by Administrator on 2018/11/2.
 */
 var aLis=document.querySelectorAll(".cont_two .school_line .school_list li");
 var oText1=document.querySelectorAll(".cont_two .school_line .school_list .text .up");
 var oText2=document.querySelectorAll(".cont_two .school_line .school_list .text .down");
 /*console.log(aLis);
 console.log(oText1);*/
 aLis.onmouseover=function(){
 oText1.style.transition='1s';
 oText1.style.translate='21px';
 oText2.style.transition='1s';
 oText2.style.translate='-30px';
 };
