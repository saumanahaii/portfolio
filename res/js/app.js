console.log("Working!");

$(".content").addClass("hidden");
//$(".content").velocity('transition.fadeIn');

let activePage = "";
let hash = window.location.hash;
if (hash === "" || hash === "#about") {
  $("#about").removeClass("hidden");
} else if (hash === "#webdev") {
  $("#webdev").removeClass("hidden");
} else if (hash === "#gamedev") {
  $("#gamedev").removeClass("hidden");
} else if (hash === "#misc") {
  $("#misc").removeClass("hidden");
}else if (hash === "#contact") {
  $("#contact").removeClass("hidden");
}else if (hash === "#writing") {
  $("#writing").removeClass("hidden");
}

$(".menu-link").click(((event) => {
  let target = $(event.currentTarget)[0].hash;
  $(".content").addClass("hidden");
  $(target).removeClass("hidden");
}))
