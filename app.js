$(() => {
const $intromod = $(".intromod");
const $startbut = $("#start");

const $startfunc = () => {
  $('p').css('display','none');

$startbut.on("click", $startfunc);

};
})