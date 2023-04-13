var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(320, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.arc(390, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 1;
ctx.arc(360, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.arc(430, 270, 40, 0, 2 * Math.PI);
ctx.stroke();