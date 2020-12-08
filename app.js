$(() => {
  const introMod = $("<div>")
    .addClass("intromod")
    .appendTo("body");
    
    const h2 = $("<h2>")
      .text('Welcome Traveler!')
      .css('font-family', 'Nunito')
      .appendTo(introMod);

    const p = $("<p>")
      .text('As you trek through the Alaskan wilderness')
      .appendTo(introMod);

    const startbut = $("<button>")
      .attr('id','starbut')
      .text('Start Game')
      .appendTo(introMod);


const startgame = () => {
    introMod.hide()
}

startbut.on('click', startgame);
});
