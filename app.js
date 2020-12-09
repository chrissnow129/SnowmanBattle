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

  const startgame = () => {
    introMod.hide();
    snowhench.css("display", "block");
  };

  class Snowman {
    constructor(name, health, attack) {
      this.name = name;
      this.health = 10;
      this.attack = attack;
    }
    freezeBlast() {}

    icicleGun() {}
  }

  class Traveler {
    constructor(name, health, attack) {
      this.name = name;
      this.health = 20;
      this.attack = 3;
    }
  }

  const hero = new Traveler (name, health, attack);

  console.log(hero);

  startbut.on("click", startgame);
});
