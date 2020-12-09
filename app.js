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
  const brody = $('#traveler')

  const startgame = () => {
    introMod.hide();
    snowhench.css("display", "block");
    brody.css('display', 'block');
    const lantBut = $('<button>').attr('id', 'lantbut').text('Use a Warm Lantern').appendTo('body')
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
    constructor(name, health) {
      this.name = name;
      this.health = 20;
      this.tools = {
        warmLantern: 2,
        icePick: 4
      }
    }
    lanternMelt(){
      Snowman.health -= this.tools.warmLantern
      console.log(`You have melted a little of the Frostbite leaving him at ${snowman.health}`)
    }
  }

  const hero = new Traveler ('Brody');

  console.log(hero);

  startbut.on("click", startgame);
  $('#lantbut').on('click',this.tools.warmLantern())
});
