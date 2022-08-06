function Sensei(x, y) {
  this.sprite = createSprite(x, y, 20, 20);

  this.sprite.scale = 0.5;

  this.anims = [
    {
      name: "walk",
      location: "characters/sensei/animations/sensei-walk/sensei-walk",
      count: 23,
    },
    {
      name: "talk",
      location: "characters/sensei/animations/sensei-talk/sensei-talk",
      count: 28,
    },
    {
      name: "dramatic-death",
      location:
        "characters/sensei/animations/sensei-dramatic death/sensei-dramatic death",
      count: 44,
    },
    {
      name: "yes",
      location: "characters/sensei/animations/sensei-yes/sensei-yes",
      count: 14,
    },
    {
      name: "no",
      location: "characters/sensei/animations/sensei-no/sensei-no",
      count: 14,
    },
    {
      name: "key",
      location: "characters/sensei/animations/sensei-give key/sensei-give key",
      count: 21,
    },
    {
      name: "hurt",
      location: "characters/sensei/animations/sensei-hurt/sensei-hurt",
      count: 15,
    },
    {
      name: "idle",
      location: "characters/sensei/animations/sensei-idle/sensei-idle",
      count: 14,
    },
    {
      name: "show",
      location:
        "characters/sensei/animations/sensei-show the way/sensei-show the way",
      count: 35,
    },
    {
      name: "surprised",
      location:
        "characters/sensei/animations/sensei-surprised/sensei-surprised",
      count: 29,
    },
  ];

  this.preload = () => {
    loadNinja(this.sprite, this.anims);
  };

  this.randomAnim = () => {
    var anim = this.anims[Math.floor(Math.random() * this.anims.length)];
    this.sprite.changeAnimation(anim.name);
  };

  this.jump = () => {
    //console.log(this.sprite);
    this.sprite.velocity.y = -20;
  };

  this.setAnimation = (anim) => {
    this.sprite.changeAnimation(anim);
    this.sprite.animation.frame = 0;
    this.sprite.animation.looping = false;
    this.sprite.animation.play();

    console.log(this.sprite.animation);
  };

  this.changeDirection = (dir) => {
    this.player_sprite.mirrorX(dir);
  };

  this.setMotion = (motion) => {
    this.motion = motion;
    this.sprite.setSpeed(motion.speed, motion.angle);
  };

  this.animationState = () => {
    //console.log(this.sprite.animation);
  };
}
