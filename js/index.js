var total_botones=document.querySelectorAll(".drum").length;
for(var i=0;i<total_botones;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        alert("I got click")
    });
}
