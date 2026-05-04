// ===== PAGE NAVIGATION =====
var PAGES = [
  { id: "aboutpage", button: "about-button", name: "about" },
  { id: "joinpage", button: "join-button", name: "join" },
  { id: "widgetpage", button: "widget-button", name: "widget" },
  { id: "memberspage", button: "members-button", name: "members" },
];

function openPage(x) {
  PAGES.forEach(function (page) {
    var isActive = page.id === x.id;
    document.getElementById(page.id).style.display = isActive ? "block" : "none";
    document.getElementById(page.button).src = "imgs/misc/" + page.name + (isActive ? "-pressed" : "") + ".png";
  });
}

var audio = document.getElementById("title-song");
audio.volume = 0.2;

// ===== MEMBERS TABLE =====
function populateMembers() {
  var html = "";
  for (var i = 0; i < members.length; i++) {
    html += "<div class='member'>" +
      "<img src='imgs/icons/" + members[i].img + "'>" +
      "<p>" + members[i].name + "</p>" +
      "<a href='" + members[i].url + "' target='_blank'><p>[website]</p></a>" +
      "</div>";
  }
  document.getElementById("members-table").innerHTML = html;
}

// ===== ICON GRID (join page) =====
// Available icons for new members to choose from (in game order)
var AVAILABLE_ICONS = [
  "built-to-scale.png", "glee-club.png", "fillbots.png", "fan-club.png",
  "remix-1.png", "rhythm-rally.png", "shoot-em-up.png", "blue-birds.png",
  "moai-doo-wop.png", "remix-2.png", "love-lizards.png", "crop-stomp.png",
  "freeze-frame.png", "the-dazzles.png", "remix-3.png", "munchy-monk.png",
  "dj-school.png", "drummer-duel.png", "love-lab.png", "remix-4.png",
  "splashdown.png", "big-rock-finish.png", "dog-ninja.png", "frog-hop.png",
  "remix-5.png", "space-soccer.png", "lockstep.png", "rockers.png",
  "karate-man.png", "remix-6.png", "built-to-scale-2.png", "the-dazzles-2.png",
  "frog-hop-2.png", "fan-club-2.png", "remix-7.png", "rhythm-rally-2.png",
  "fillbots-2.png", "blue-birds-2.png", "lockstep-2.png", "remix-8.png",
  "moai-doo-wop-2.png", "karate-man-2.png", "glee-club-2.png", "space-soccer-2.png",
  "remix-9.png", "shoot-em-up-2.png", "splashdown-2.png", "munchy-monk-2.png",
  "rockers-2.png", "remix-10.png",
];

function populateIcons() {
  var html = "";
  for (var i = 0; i < AVAILABLE_ICONS.length; i++) {
    html += "<div class='icon'><img src='imgs/icons/" + AVAILABLE_ICONS[i] + "'><code>" + AVAILABLE_ICONS[i] + "</code></div>";
  }
  document.getElementById("icon-options").innerHTML = html;
}
