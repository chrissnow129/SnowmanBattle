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
  const brody = $(".traveler-card");
  const snowboss = $("#snow-boss");

  const startgame = () => {
    introMod.hide();
    snowboss.css("display", "block");
    brody.css("display", "block");
    lantBtn.css("display", "block");
    pickBtn.css("display", "block");
    travelerName.css("display", "block");
    snowHenchName.css("display", "block");
  };

  const lantBtn = $("<button>")
    .attr("id", "lantBtn")
    .text("Use a Warm Lantern")
    .appendTo(".traveler-card");

  const pickBtn = $("<button>")
    .attr("id", "pickBtn")
    .text("Throw an Ice Pick")
    .appendTo(".traveler-card");

    const travelerName = $("<h2>").attr('id', 'brodyName').text('Brody').appendTo('body');
    const snowHenchName = $("<h2>").attr('id','frostbiteName').text('Frostbite').appendTo('body');
    const snowBossName = $('<h2>').attr('id','captainShiversName').text('Captain Shivers').appendTo('body');

  class Snowman {
    constructor(name, health, attacks) {
      this.name = name;
      this.health = 10;
      this.accuracy = Math.random() * 2;
      this.choice = Math.random() * 2
      this.attacks = {
        freezeBlast: 2,
        icicleGun: 4,
      };
    }
    choiceAttack() {
    if (this.choice >= Math.random * 2){
      if (this.accuracy >= Math.random()) {
        hero.health -= this.attacks.freezeBlast;
        console.log(
          `The Frostbite hit you with an icy shockwave! Now you have ${hero.health} HP`
        );
      } else {
        console.log("You moved away and missed the shock");
      }
    } else {
    if (this.accuracy >= Math.random()) {
        hero.health -= this.attacks.icicleGun;
        console.log(
          `You got hit with an icicle and now have ${hero.health} HP`
        );
      } else {
        console.log("You barely missed the icicle");
      }
    }
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
      this.health = 20;
      this.accuracy = Math.random() * 2;
      this.tools = {
        warmLantern: 2,
        icePick: 4,
      };
    }
    lanternMelt(enemy) {
      if (this.accuracy >= Math.random()) {
        enemy.health -= this.tools.warmLantern;
        console.log(
          `You have melted a little of ${enemy.name} leaving him at ${enemy.health}`
        );
      } else {
        console.log(`Your lantern missed ${enemy.name}`);
      }
    }
    pickThrow(enemy) {
      if (this.accuracy >= Math.random()) {
        enemy.health -= this.tools.icePick;
        console.log(
          `You threw one of your ice picks at ${enemy.name} head and left him with ${enemy.health}`
        );
      } else {
        console.log(`Your lantern missed ${enemy.name}`);
      }
    }
  }

  const hero = new Traveler("Brody");
  console.log(hero);

  $("<h2>")
    .addClass("lostP")
    .text(`The Snowmen defeated you and now You've been FROZEN!`)
    .appendTo("body");

  $("<h2>")
    .addClass("winP")
    .text("You have defeated both Frostbite & Captain Shivers!")
    .appendTo("body");

  let gameLevel = 1;

  startbut.on("click", startgame);
  lantBtn.on("click", () => {
    if (gameLevel === 1) {
      hero.lanternMelt(Frostbite);
      Frostbite.choiceAttack();

      if (Frostbite.health <= 0) {
        hero.health += 5;
        snowhench.remove();
        snowboss.css("display", "block");
        snowHenchName.remove();
        snowBossName.css('display', 'block')
        gameLevel += 1;
      }

      if (hero.health <= 0) {
        $(".lostP").css("display", "block");
        brody.remove();
        lantBtn.remove();
        pickBtn.remove();
      }
    } else {
      hero.lanternMelt(CaptainIce);
      CaptainIce.choiceAttack();

      if (CaptainIce.health <= 0) {
        $(".winP").css('display','block');
        snowboss.remove();
        lantBtn.remove();
        pickBtn.remove();
      }

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
        Frostbite.choiceAttack();

        if (Frostbite.health <= 0) {
          hero.health += 5;
          snowhench.remove();
          snowHenchName.remove();
          snowBossName.css('display', 'block')
          snowboss.css("display", "block");
          gameLevel += 1;
        }

        if (hero.health <= 0) {
          $(".lostP").css("display", "block");
          brody.remove();
          lantBtn.remove();
          pickBtn.remove();
        }
      } else {
        hero.pickThrow(CaptainIce);
        CaptainIce.choiceAttack();

        if (CaptainIce.health <= 0) {
          $(".winP").css('display','block');
          snowboss.remove();
          lantBtn.remove();
          pickBtn.remove();
        }

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
