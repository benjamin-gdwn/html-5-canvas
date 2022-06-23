// creating a drawing canvas usable by mouse
// store the canvas
const canvas = document.querySelector('#draw');
// set the dimension as 2d
const ctx = canvas.getContext('2d');
// set height to full window
canvas.height = window.innerHeight;
// set width to full window
canvas.width = window.innerWidth;
// start with this colour
ctx.strokeStyle = '#BADA55';
// line style
ctx.lineJoin = 'round';
// line end
ctx.lineCap = 'round';
// linewidth
ctx.lineWidth = 10;
// style of line on background
ctx.globalCompositeOperation = 'lighter';
// set drawing to false so we can set to true when drawing
let isDrawing = false;
// last position on page
let lastX = 0;
let lastY = 0;
// hue of the colour
let hue = 0;
// function to callback when eventlisteners triggered
function draw(e) {
    // if youre note drawing stop doing anything
    if(!isDrawing) return;
    console.log(e)
    // introduce the changing hsl
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    // when drawing then start
    ctx.beginPath();
    // draw to new co ordinates
    ctx.moveTo(lastX, lastY);
    // complete line from on click to off click
    ctx.lineTo(e.offsetX, e.offsetY);
    // 
    ctx.stroke();
    // join the 4 co-ordinates together
    lastX = e.offsetX;
    lastY = e.offsetY;
    // add to the colour to keep changing
    hue++;
    // if the colour gets to top of chart start again
    if(hue>360){
        hue=0;
    }
} 
    
// add the event listeners
// if your mouse is on screen do nothing
canvas.addEventListener('mousemove', draw)
// if mouse is down then change isDrawing to true
canvas.addEventListener('mousedown', function(e){
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})
canvas.addEventListener('mouseup', function () {
    isDrawing = false;
})
canvas.addEventListener('mouseout', function () {
    isDrawing = false;
})


