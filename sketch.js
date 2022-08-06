var senseiSprite;
var shinobiSprite;

function preload() {
  senseiSprite = new Sensei(windowWidth / 2, windowHeight / 2);
  senseiSprite.preload();
  //shinobiSprite = new Shinobi(2 * (width / 5), height - 150);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  senseiSprite.randomAnim();
}

function draw() {
  background(220);

  senseiSprite.animationState();

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
  } else if (keyCode === 65) {
    //left
    //move(player, 2, 180);
    senseiSprite.randomAnim();
  } else if (keyCode === 81) {
    //left
    //move(player, 2, 180);
    senseiSprite.setAnimation("walk");
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
