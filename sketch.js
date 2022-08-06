var senseiSprite;
var shinobiSprite;

function setup() {
  createCanvas(windowWidth, windowHeight);
  senseiSprite = new Sensei(width / 5, height - 150);
  //shinobiSprite = new Shinobi(2 * (width / 5), height - 25);
}

function draw() {
  background(220);
  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    // optional spacebar jump
    //jump(player);
    senseiSprite.jump();
    // jump(shinobiSprite);
  } else if (keyCode === 40) {
    //down
    //move(player, 2, 90);
  } else if (keyCode === 38) {
    // up/jump
    //move(player, 2, 270);
  } else if (keyCode === 39) {
    //right
    //move(player, 2, 0);
    senseiSprite.setMotion({ speed: 1, angle: 0 });
  } else if (keyCode === 37) {
    //left
    //move(player, 2, 180);
  }
}

//Global Functions
loadNinja = (spr, anims) => {
  for (let i = 0; i < anims.length; i++) {
    let anim = anims[i];

    animationObj = loadAnimation();
    for (let j = 0; j < anim.count; j++) {
      file = anim.location + "_" + String(j).padStart(2, "0") + ".png";
      animationObj.images.push(loadImage(file));
    }
    spr.addAnimation(anim.name, animationObj);
  }
};
