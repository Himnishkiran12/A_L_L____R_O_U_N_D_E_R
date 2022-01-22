var last_x, last_y;
//Extra code : var last__x, last__y;
var mouseevent = "empty";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_line = 2;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    //Addictonal Activity start
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("C_O_L_O_R").value;
    width_line = document.getElementById("W_I_D_T_H").value;
    //Addictonal Activity ends
    console.log("my_touchstart");
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_x + "y = " + last_y);
    ctx.moveTo(last_x, last_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_x + "y = " + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}
//event Listener not defined
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("C_O_L_O_R").value;
    width = document.getElementById("W_I_D_T_H").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    //different variables used
    //current__x = e.clientX - canvas.offsetLeft;
    //current__y = e.clientY - canvas.offsetTop;
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last positions of x & y coordinates :- ");
        console.log("x :- " + last_x + "y :- " + last_y);
        ctx.moveTo(last_x, last_y);
        console.log("Current positions of x & y coordinates :- ");
        console.log("x :- " + current_x + "y :- " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    //different variables used:
    //last__x = current__x;
    //last__y = current__y;
    last_x = current_x;
    last_y = current_y;
}

function c_l_e_a_r() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}