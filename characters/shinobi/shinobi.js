function Shinobi(x, y) {
  var obj = createSprite(x, y, 20, 20);

  obj.scale = 0.5;

  var animationRoute = "characters/shinobi/animations";

  anims = [
    {
      name: "air-roll",
      location: `${animationRoute}/air roll/shinobi-air-roll`,
      count: 5,
    },
    {
      name: "climb",
      location: `${animationRoute}/climb/shinobi-climb`,
      count: 9,
    },
    {
      name: "crouch",
      location: `${animationRoute}/crouch/shinobi-crouch`,
      count: 11,
    },
    {
      name: "die",
      location: `${animationRoute}/die/shinobi-die`,
      count: 18,
    },
    {
      name: "hurt",
      location: `${animationRoute}/hurt/shinobi-hurt`,
      count: 11,
    },
    {
      name: "idle",
      location: `${animationRoute}/idle/shinobi-idle`,
      count: 14,
    },
    {
      name: "idle-active",
      location: `${animationRoute}/idle active/shinobi-idle active`,
      count: 28,
    },
    {
      name: "jumpA",
      location: `${animationRoute}/jump A/shinobi-jump A`,
      count: 7,
    },
    {
      name: "jumpB",
      location: `${animationRoute}/jump B/shinobi-jump B`,
      count: 7,
    },
    {
      name: "pullLever",
      location: `${animationRoute}/pull lever/shinobi-pull lever`,
      count: 14,
    },
    {
      name: "run",
      location: `${animationRoute}/run/shinobi-run`,
      count: 11,
    },
    {
      name: "slash",
      location: `${animationRoute}/slash/shinobi-slash`,
      count: 11,
    },
    {
      name: "slide",
      location: `${animationRoute}/slide/shinobi-slide`,
      count: 7,
    },
    {
      name: "stun",
      location: `${animationRoute}/stun/shinobi-stun`,
      count: 14,
    },
    {
      name: "swim",
      location: `${animationRoute}/swim/shinobi-swim`,
      count: 9,
    },
    {
      name: "throw",
      location: `${animationRoute}/throw big shuriken/shinobi-throw big shuriken`,
      count: 19,
    },
    {
      name: "walk",
      location: `${animationRoute}/walk/shinobi-walk`,
      count: 18,
    },
    {
      name: "wallslide",
      location: `${animationRoute}/wall slide/shinobi-wall slide`,
      count: 7,
    },
  ];

  loadNinja(obj, anims);
  var anim = anims[Math.floor(Math.random() * anims.length)];
  obj.changeAnimation(anim.name);

  return this;
}
