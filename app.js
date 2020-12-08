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

  class Snowman{
      constructor(health, attack) {
          this.health = 10
          this.attack = attack
      }
  }

  startbut.on("click", startgame);
});
