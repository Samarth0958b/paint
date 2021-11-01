canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var width=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;
var last_x,last_y;
color="red";
width=2;

if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("input_color").value;
    width=document.getElementById("input_width").value;
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last position of x and y corrdinates=");
        console.log("x ="+ last_x +"y ="+last_y);
        ctx.moveTo(last_x,last_y);

        console.log("current position of x and y corrdinates=");
        console.log("x ="+ current_x +"y ="+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    last_x=current_x;
    last_y=current_y;
}