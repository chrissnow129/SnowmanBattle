$(() => {
  const introMod = $("<div>").addClass("intromod").appendTo("body");

  const h2 = $("<h2>")
    .text("Welcome Traveler!")
    .css("font-family", "Nunito")
    .appendTo(introMod);

  const p = $("<p>")
    .text("As you trek through the Alaskan wilderness")
    .appendTo(introMod);

  const startbut = $("<button>")
    .attr("id", "starbut")
    .text("Start Game")
    .appendTo(introMod);

  const snowhench = $("#snow-hench");
  const brody = $("#traveler");

  class Snowman {
    constructor(name, health, attack) {
      this.name = name;
      this.health = 10;
      this.attack = attack;
    }
    freezeBlast() {}

    icicleGun() {}
  }

  const enemy = new Snowman("Frostbite", 3);

  class Traveler {
    constructor(name, health) {
      this.name = name;
      this.health = 20;
      this.tools = {
        warmLantern: 2,
        icePick: 4,
      };
    }
    lanternMelt() {
      enemy.health -= this.tools.warmLantern;
      console.log(
        `You have melted a little of the Frostbite leaving him at ${enemy.health}`
      );
    }
  }

  const hero = new Traveler("Brody");

  console.log(hero);

  const startgame = () => {
    introMod.hide();
    snowhench.css("display", "block");
    brody.css("display", "block");
    const lantBut = $("<button>")
      .attr("id", "lantbut")
      .text("Use a Warm Lantern")
      .appendTo("body");
    lantBut.on("click", hero.lanternMelt());
  };

  startbut.on("click", startgame);
});
