ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, SIZE-2, SIZE-2);
let s = document.getElementById('score');
let h = document.getElementById('highscore');

setInterval(function(){
  ctx.fillStyle = "Black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  px += xd;
  py += yd;
  if(px >= canv.width/SIZE) px = 0;
  if(px < 0) px = canv.width/SIZE;
  if(py >= canv.height/SIZE) py = 0;
  if(py < 0) py = canv.height/SIZE;
  snake.push({x:px,y:py});

  ctx.fillStyle = "lime";
  for(let i = 0; i < snake.length-1 ; i++){
    ctx.fillRect(snake[i].x * SIZE, snake[i].y * SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
      if(Number(h.innerHTML) < Number(s.innerHTML)){
        h.innerHTML = hs;
      }
      s.innerHTML = 0;
    }
  }

  while(snake.length > tail){
    snake.shift();
  }

  if(appleX == px && appleY == py){
    tail++;
    appleX = Math.floor(Math.random() * canv.width / SIZE);
    appleY = Math.floor(Math.random() * canv.height / SIZE);
    s.innerHTML = Number(s.innerHTML) + UNIT;
    hs = s.innerHTML;
  }
  ctx.fillStyle = "Red";
  ctx.fillRect(appleX * SIZE, appleY * SIZE, SIZE-2, SIZE-2);

},1000/FPS);

function Log(a){
  console.log(a);
}
