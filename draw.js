const canvas = document.querySelector('#draw');
const c = canvas.getContext('2d');
canvas.width =1000;
canvas.height =650;
let isDrawing =false;
let lastx=0;
let lasty=0;
let hue=0;
c.strokeStyle = '#BADA55';
c.lineJoin = 'round';
c.lineCap = 'round';
c.lineWidth = 50;
function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e);
    c.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    c.beginPath();
    // start from
    c.moveTo(lastx, lasty);
    // go to
    c.lineTo(e.offsetX, e.offsetY);
    c.stroke();
    [lastx, lasty] = [e.offsetX, e.offsetY];
    hue++;
}  
 canvas.addEventListener('mousedown', (e) => {
 isDrawing = true;
     [lastx, lasty] = [e.offsetX, e.offsetY];
 });
  canvas.addEventListener('mousemove', draw);
 
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);



  //size of the brush
  const brush=document.querySelector('input');
function mycss(){
    c.lineWidth=this.value;
}
 brush.addEventListener('change',mycss);
 brush.addEventListener('mousemove',mycss);
 