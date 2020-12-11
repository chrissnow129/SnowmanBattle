$(() => {
  const introMod = $("<div>").addClass("intromod").appendTo("body");

  const h2 = $("<h2>")
    .text("Welcome Traveler!")
    .css("font-family", "Nunito")
    .appendTo(introMod);

  const p = $("<p>")
    .text(
      "As you trek through the Alaskan wilderness you come across two living snowmen. These arent the frosty type though, these are EVIL Snowmen! Their names are Frostbite & Captain Shivers, and make you frozen! You'll meed to fight them to continue your travels."
    )
    .appendTo(introMod);

  const startbut = $("<button>")
    .attr("id", "starbut")
    .text("Start Game")
    .appendTo(introMod);

  const snowhench = $("#snow-hench");
  const brody = $("#traveler");
  

  const startgame = () => {
    introMod.hide();
    snowhench.css("display", "block");
    brody.css("display", "block");
    lantBtn.css("display", "block");
    pickBtn.css("display", "block");
  };

  const lantBtn = $("<button>")
    .attr("id", "lantBtn")
    .text("Use a Warm Lantern")
    .appendTo("body");

  const pickBtn = $("<button>")
    .attr("id", "pickBtn")
    .text("Throw an Ice Pick")
    .appendTo("body");

  class Snowman {
    constructor(name, health, attacks) {
      this.name = name;
      this.health = 10;
      this.attacks = {
        freezeBlast: 2,
        icicleGun: 4,
      };
    }
    freezeBlast() {
      hero.health -= this.attacks.freezeBlast;
      console.log(
        `The Frostbite hit you with an icy shockwave! Now you have ${hero.health} HP`
      );
    }

    icicleGun() {
      hero.health -= this.attacks.icicleGun;
      console.log(`You got hit with an icicle and now have ${hero.health} HP`);
    }
  }

  const Frostbite = new Snowman("Frostbite");

  class SnowBoss extends Snowman {
    constructor(name, regen, health, attacks) {
      super(name, health, attacks);
      this.name = name;
      this.health = 12;
      this.regen = 2;
    }
    regenHealth() {
      if (CaptainIce.health <= 5) {
        CaptainIce.health += CaptainIce.regen;
      }
    }
  }

  const CaptainIce = new SnowBoss("Captain Shivers");

  class Traveler {
    constructor(name, health) {
      this.name = name;
      this.health = 15;
      this.tools = {
        warmLantern: 2,
        icePick: 4,
      };
    }
    lanternMelt(enemy) {
      enemy.health -= this.tools.warmLantern;
      console.log(
        `You have melted a little of ${enemy.name} leaving him at ${enemy.health}`
      );
    }
    pickThrow(enemy) {
      enemy.health -= this.tools.icePick;
      console.log(
        `You threw one of your ice picks at ${enemy.name} head and left him with ${enemy.health}`
      );
    }
  }

  const hero = new Traveler("Brody");
  console.log(hero);

  // const randAttack = [
  //     Frostbite.freezeBlast()
  //   ,
  //     Frostbite.icicleGun()
  // ];

  const snowAttack = () => {
    randAttack[Math.round(Math.random) * randAttack.length];
  };

  $("<h2>")
    .addClass("lostP")
    .text("The Snowmen defeated you and now You've been FROZEN!")
    .appendTo("body");

  let gameLevel = 1;

  if (Frostbite.health <= 0) {
    gameLevel += 1;
  }

  startbut.on("click", startgame);
  lantBtn.on("click", () => {
    if (gameLevel === 1) {
      hero.lanternMelt(Frostbite);
      Frostbite.freezeBlast();
      if (hero.health <= 0) {
        $(".lostP").css("display", "block");
        brody.remove();
        lantBtn.remove();
        pickBtn.remove();
      }
    } else {
      hero.lanternMelt(CaptainIce);
      CaptainIce.freezeBlast();
      if (hero.health <= 0) {
        $(".lostP").css("display", "block");
        brody.remove();
        lantBtn.remove();
        pickBtn.remove();
      }
    }
    pickBtn.on("click", () => {
      if (gameLevel === 1) {
        hero.pickThrow(Frostbite);
        Frostbite.freezeBlast();
        if (hero.health <= 0) {
          $(".lostP").css("display", "block");
          brody.remove();
          lantBtn.remove();
          pickBtn.remove();
        }
      } else {
        hero.pickThrow(CaptainIce);
        CaptainIce.freezeBlast();
        if (hero.health <= 0) {
          $(".lostP").css("display", "block");
          brody.remove();
          lantBtn.remove();
          pickBtn.remove();
        }
      }
    });
  });
});
