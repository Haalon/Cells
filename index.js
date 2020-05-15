var vShow = `
attribute vec2 a_position;

void main() {
 
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

var fShow = `
precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
uniform vec2 u_offset;
uniform float u_scale;

void main() {
    // gl_FragCoord.xy / u_scale  scales canvas pixel per cell
    // + u_offset  shifts in state coordinates
    gl_FragColor = texture2D(state, (gl_FragCoord.xy / u_scale + u_offset) / screenSize);
}
`
// dotted amoebas 16
var fStep = `
precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
float cv(float fx,float fy){
    vec2 v=vec2(fx,fy);
    float o=texture2D(state,(gl_FragCoord.xy+v)/screenSize).r;
    if(o>0.0){
        return 1.0;
    }else{
        return 0.0;
    }
}
void main(){
    float outval=cv(0.0,0.0);
    float nhd0=cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0);
    float fin_0=nhd0;
    float nhd1=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);
    float nhd2=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);
    float nhd3=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);
    float nhd4=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);
    float fin_1=nhd1+nhd2+nhd3+nhd4;
    if(fin_0>=0.0&&fin_0<=2.0){
        outval=0.0;
    }
    if(fin_0>=6.0&&fin_0<=7.0){
        outval=1.0;
    }
    if(fin_1>=22.0&&fin_1<=33.0){
        outval=0.0;
    }
    if(fin_1>=111.0&&fin_1<=112.0){
        outval=0.0;
    }
    if(fin_1>=71.0&&fin_1<=77.0){
        outval=0.0;
    }
    if(fin_1>=143.0){
        outval=0.0;
    }
    if(fin_1>=80.0&&fin_1<=83.0){
        outval=1.0;
    }
    if(fin_1>=51.0&&fin_1<=51.0){
        outval=1.0;
    }
    if(fin_1>=31.0&&fin_1<=31.0){
        outval=1.0;
    }
    if(fin_1>=23.0&&fin_1<=23.0){
        outval=1.0;
    }
    if(fin_1>=117.0&&fin_1<=127.0){
        outval=1.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
`;

// modulus, such that (-1) mod 10 == 9
function mod(n, m) {
  return ((n % m) + m) % m;
}

function CA(canvas, scale) {
  this.canvas = canvas;
  var igloo = this.igloo = new Igloo(canvas);
  var gl = igloo.gl;

  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  var w = canvas.clientWidth, h = canvas.clientHeight;
  this.scale = scale;
  this.viewsize = new Float32Array([w, h]);
  console.log(w,h);
  console.log(canvas.width, canvas.height);
  this.statesize = new Float32Array([1024, 512]);

  this.scale = 2;

  this.offset = new Float32Array([0, 0]);

  gl.disable(gl.DEPTH_TEST);

  this.buffer = igloo.array(Igloo.QUAD2)

  this.program_step = igloo.program(vShow, fStep);
  this.program_show = igloo.program(vShow, fShow);

  this.state_old = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);
  this.state_new = igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST)
    .blank(this.statesize[0], this.statesize[1]);

  this.frameBuffer = igloo.framebuffer();

  this.lastTime = Date.now()

  this.setRandom();
}

CA.prototype.swap = function() {
  var tmp = this.state_new;
  this.state_new = this.state_old
  this.state_old = tmp;
  return this;
};


CA.prototype.step = function() {
  var gl = this.igloo.gl;
  this.frameBuffer.attach(this.state_old);
  this.state_new.bind(0);
  gl.viewport(0, 0, this.statesize[0], this.statesize[1]);
  this.program_step.use()
    .attrib('a_position', this.buffer, 2)
    .uniformi('state', 0)
    .uniform('screenSize', this.statesize)
    .draw(gl.TRIANGLE_STRIP, 4);
  this.swap();
  return this
}

CA.prototype.draw = function() {
  var gl = this.igloo.gl;
  this.igloo.defaultFramebuffer.bind();
  this.state_new.bind(0);
  gl.viewport(0, 0, this.viewsize[0], this.viewsize[1]);
  this.program_show.use()
    .attrib('a_position', this.buffer, 2)
    .uniformi('state', 0)
    .uniform('u_scale', this.scale)
    .uniform('u_offset', this.offset)
    .uniform('screenSize', this.statesize)
    .draw(gl.TRIANGLE_STRIP, 4);
  this.lastTime = Date.now();
  return this;
};

CA.prototype.set = function(state) {
  var gl = this.igloo.gl;
  var rgba = new Uint8Array(this.statesize[0] * this.statesize[1] * 4);
  for (var i = 0; i < state.length; i++) {
    var ii = i * 4;
    rgba[ii + 0] = rgba[ii + 1] = rgba[ii + 2] = state[i] ? 255 : 0;
    rgba[ii + 3] = 255;
  }
  this.state_new.subset(rgba, 0, 0, this.statesize[0], this.statesize[1]);
  return this
};

CA.prototype.setRandom = function(p) {
  var gl = this.igloo.gl, size = this.statesize[0] * this.statesize[1];
  p = p == null ? 0.4 : p;
  var rand = new Uint8Array(size);
  for (var i = 0; i < size; i++) {
    rand[i] = Math.random() < p ? 1 : 0;
  }
  this.set(rand);
  return this;
};

CA.prototype.poke = function(x, y, state) {
  console.log("pre",x ,y)
  x = mod(x / this.scale + this.offset[0], this.statesize[0]);
  y = mod(y / this.scale + this.offset[1], this.statesize[1]);
  console.log("post",x ,y)
  console.log(this)
  var gl = this.igloo.gl,
  v = state * 255;
  this.state_new.subset([v, v, v, 255], x, y, 1, 1);
  return this;
};

CA.prototype.getMousePos = function(event) {
  var rect = this.canvas.getBoundingClientRect();
  return [
    (event.pageX - rect.left) ,
    (this.canvas.height - (event.pageY - rect.top)) ,
  ];
};

// offsetless(!)
CA.prototype.getStatePos = function(pos) {
  return [
    mod(pos[0] / this.scale, this.statesize[0]),
    mod(pos[1] / this.scale, this.statesize[1]),
  ]
}



function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  const width  = canvas.clientWidth  * multiplier | 0;
  const height = canvas.clientHeight * multiplier | 0;
  if (canvas.width !== width ||  canvas.height !== height) {
    canvas.width  = width;
    canvas.height = height;
    return true;
  }
  return false;
}

var mousePressed = null;
var lastPos = null;
var enabled = true;
var help = true;

function main() {
  var canvas = document.querySelector("#glCanvas");
  
  var ca = new CA(canvas, 1)
  console.log(ca)
  resizeCanvasToDisplaySize(canvas)

  canvas.addEventListener('mousedown', (event) => {
    mousePressed = event.which
    var pos = ca.getMousePos(event);
    lastPos = pos;

    // left mbutton
    if(mousePressed == 1){
      ca.poke(pos[0], pos[1], !event.shiftKey);
      ca.draw();
    }
  });

  window.addEventListener('mouseup', (event) => {
    mousePressed = null
  });

  canvas.addEventListener('mousemove', (event) => {
    var pos = ca.getMousePos(event);
    if(mousePressed == 1) {      
      var diag_dist = Math.max(Math.abs(pos[0]-lastPos[0]), Math.abs(pos[1]-lastPos[1]))
      for (var step = 0; step <= diag_dist; step++) {
        var t = diag_dist == 0? 0.0 : step / diag_dist;
        var point = [
          lastPos[0] + t * (pos[0] - lastPos[0]),
          lastPos[1] + t * (pos[1] - lastPos[1]),
        ]
        ca.poke(point[0], point[1], !event.shiftKey);
      }  
      ca.draw();
    }
    // right mbutton
    else if(mousePressed == 3) {
      var oldStatePos = ca.getStatePos(lastPos)
      var newStatePos = ca.getStatePos(pos)

      ca.offset[0] += Math.round(oldStatePos[0] - newStatePos[0])
      ca.offset[1] += Math.round(oldStatePos[1] - newStatePos[1])

      ca.draw();
    }
    lastPos = pos;
  });

  canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    return false;
  })

  canvas.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    var scaleDelta = 0.0;
    if (delta > 0 && ca.scale < 16)
      scaleDelta = 0.5;

    if (delta < 0 && ca.scale > 1)
      scaleDelta = -0.5;

    var oldStatePos = ca.getStatePos(lastPos)
    ca.scale += scaleDelta;
    var newStatePos = ca.getStatePos(lastPos)

    // offset so the zoom's origin matches the mouse location
    ca.offset[0] += Math.round(oldStatePos[0] - newStatePos[0])
    ca.offset[1] += Math.round(oldStatePos[1] - newStatePos[1])

    ca.draw();
  });

  document.addEventListener('keydown', (event) =>{
    switch (event.which) {
      case 27: /* [esc] */
        help = !help
        document.getElementById('helpBox').style.visibility = help ? 'visible' : 'hidden';
        break;

      case 38: /* [up] */
        ca.offset[1] += 1;
        ca.draw();
        break;

      case 40: /* [down] */
        ca.offset[1] -= 1;
        ca.draw();
        break;

      case 37: /* [left] */
        ca.offset[0] -= 1;
        ca.draw();
        break;        

      case 39: /* [right] */
        ca.offset[0] += 1;
        ca.draw();
        break;

      case 32: /* [space] */
        enabled = !enabled
        break;

      case 13: /* [enter] */
        enabled = false
        ca.step();
        ca.draw();
        break;

      case 8: /* [backspace] */
        ca.setRandom();
        ca.draw();
        break;

      case 46: /* [del] */
        ca.setRandom(0);
        ca.draw();
        break;
  }});

  setInterval(() => {    
    if(enabled)
    {
      console.log(`Drawn and calculated ${(Date.now() - ca.lastTime)} mseconds`)
      ca.step();
      ca.draw();
    }    
  }, 10);
}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
