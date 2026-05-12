// webstring by june @ webcatz.neocities.org

// ===== MEMBERS =====
// To add a new member: add { name, url, img } to this array
var members = [
  { name: "maddy", url: "https://maddycha.com/", img: "the-dazzles-2.png" },
  { name: "yoona", url: "https://y2kstardust.neocities.org/", img: "built-to-scale.png" },
  { name: "max", url: "https://minerolymax.neocities.org", img: "blue-birds-2.png" },
  { name: "ddnikki", url: "https://ddnikki.moe", img: "rockers.png" },
  { name: "sunny", url: "https://sunshinebeach.neocities.org/", img: "lockstep.png" },
  { name: "Joey", url: "https://goldremix.neocities.org/", img: "rockers-2.png" },
  { name: "Starry", url: "https://starry-knight.neocities.org/", img: "crop-stomp.png" },
  { name: "phi", url: "https://biofreak.world", img: "glee-club-2.png" },
  { name: "OllieOkay", url: "https://ollie-okay.neocities.org/", img: "fillbots.png" },
  { name: "Haumea Geth", url: "https://stupidwittlebaby.neocities.org/", img: "love-lab.png" },
  { name: "snacks", url: "https://snacksgg.neocities.org/", img: "moai-doo-wop-2.png" },
  { name: "Piranhebula", url: "https://piranhebula.neocities.org/", img: "crop-stomp.png" },
  { name: "candycanearter", url: "https://abslimeware.neocities.org", img: "fillbots.png" },
  { name: "SKAPASTA", url: "https://skapasta.neocities.org", img: "dog-ninja.png" },
  { name: "LetsgoLeeLee", url: "https://letsgoleelee.neocities.org/home", img: "the-dazzles-2.png" },
  { name: "Kie", url: "https://ivyswell-tavern.neocities.org/", img: "big-rock-finish.png" },
  { name: "s1nez", url: "https://s1nez.nekoweb.org", img: "blue-birds.png" },
  { name: "Dreamsacpes", url: "https://meyr0s3.neocities.org/", img: "dj-school.png" },
  { name: "ucami", url: "https://ucami.neocities.org", img: "love-lizards.png" },
  { name: "Jay", url: "https://transrats.neocities.org", img: "built-to-scale-2.png" },
  { name: "Common Sins Games", url: "https://asahelix.com", img: "blue-birds.png" },
  { name: "jeith!", url: "https://jeith.com", img: "love-lizards.png" },
  { name: "daisybells", url: "https://daisybells.neocities.org", img: "big-rock-finish.png" },
  { name: "Nicky", url: "https://nickyturner.neocities.org", img: "love-lab.png" },
  { name: "amfmradio", url: "https://amfmradio.org/", img: "karate-man.png" },
  { name: "tesseract sys", url: "https://tesseractcube.neocities.org/", img: "glee-club.png" },
  { name: "aiden!", url: "https://troy-sucks.neocities.org/", img: "space-soccer.png" },
  { name: "reyn", url: "https://cervidaze.me", img: "lockstep.png" },
  { name: "Grubdog", url: "https://the-grub-grotto.neocities.org/", img: "crop-stomp.png" },
  { name: "Ambrose", url: "https://ruitherga.neocities.org", img: "blue-birds.png" },
  { name: "Mary Cuntrarian", url: "http://marycuntrarian.neocities.org", img: "dj-school.png" },
  { name: "Heap!", url: "https://twotriplezero.nekoweb.org/", img: "love-lab.png" },
  { name: "Blaze", url: "https://blazermaze.neocities.org/", img: "frog-hop-2.png" },
  { name: "Quaggy", url: "https://quaggos.neocities.org/", img: "splashdown.png" },
  { name: "minx98", url: "https://minx98.neocities.org/", img: "built-to-scale.png" },
  { name: "haunt_culture", url: "https://haunt-culture.neocities.org/", img: "rockers.png" },
  { name: "R3CK", url: "https://r3ckoning.nekoweb.org", img: "splashdown.png" },
  { name: "mizu", url: "https://aa-aa-mic-test.neocities.org", img: "glee-club-2.png" },
  { name: "5BRY", url: "https://xbry.neocities.org", img: "space-soccer.png" },
  { name: "Shanimal", url: "https://shanimal.neocities.org/", img: "lockstep.png" },
  { name: "Butterscotch", url: "https://butterscotch.online", img: "fillbots.png" },
  { name: "zestpunk", url: "https://zestpunk.online/", img: "frog-hop-2.png" },
  { name: "pan", url: "https://moonlit.exposed", img: "big-rock-finish.png" },
  { name: "tina", url: "https://manacake.co/", img: "splashdown.png" },
  { name: "Elijah", url: "https://elijahposttrash.neocities.org/", img: "rockers.png" },
  { name: "marmar", url: "https://maralados.neocities.org/", img: "glee-club.png" },
  { name: "Herb", url: "https://herbus-serwus.neocities.org", img: "lockstep.png" },
  { name: "Cobie", url: "https://cobie.nekoweb.org/", img: "lockstep-2.png" },
  { name: "Jonah", url: "https://windowsuser.neocities.com", img: "lockstep.png" },
  { name: "Sedaxf", url: "https://sedaxf.neocities.org/", img: "space-soccer-2.png" },
  { name: "krill0w", url: "https://krill0w.garden", img: "frog-hop.png" },
  { name: "Jujuuy", url: "https://jujuuy.neocities.org/", img: "big-rock-finish.png" },
  { name: "Cantankyote", url: "https://cantankyote.nekoweb.org/", img: "frog-hop-2.png" },
  { name: "ax", url: "https://oversurge.nekoweb.org", img: "dj-school.png" },
  { name: "emmy", url: "https://p3p.neocities.org/", img: "fan-club.png" },
  { name: "littlelum", url: "https://littlelum.neocities.org", img: "glee-club.png" },
  { name: "wanigator", url: "https://waniwanigatorgator.neocities.org", img: "frog-hop-2.png" },
  { name: "Sam", url: "https://samswaggedout.neocities.org/", img: "rockers.png" },
  { name: "sugaryparty", url: "https://sugaryparty.neocities.org/", img: "frog-hop.png" },
  { name: "sens", url: "https://fantasmagoria.neocities.org/", img: "lockstep.png" },
  { name: "lyji", url: "https://lyji.neocities.org/", img: "lockstep.png" },
  { name: "aetherway", url: "https://aetherway.neocitities.org", img: "love-lab.png" },
  { name: "Termotanque De Leche", url: "https://termotanquedeleche.neocities.org/", img: "freeze-frame.png" },
  { name: "hank", url: "https://hanksubversion.neocities.org/", img: "built-to-scale.png" },

];

// ===== WEBRING WIDGET =====
var prevArrow = '<svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><path d="M4,0H6V3H14V7H6V10H4V9H3V8H2V7H1V6H0V4H1V3H2V2H3V1H4Z" fill="currentColor"/></svg>';
var nextArrow = '<svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><path d="M8,0H10V1H11V2H12V3H13V4H14V6H13V7H12V8H11V9H10V10H8V7H0V3H8Z" fill="currentColor"/></svg>';

var webring = {
  sites: members.map(function (m) { return m.url; }),

  widget: '<div id="rhythmring">' +
    '<a href="PREV" target="_blank">' + prevArrow + '</a>' +
    '<object>' +
    '<div><a href="https://maddycha.com/rhythm-ring" target="_blank"><img id="rhythmring-img" src="" style="padding-bottom:2px"></a></div>' +
    '<a href="RANDOM" target="_blank">[random]</a>' +
    '</object>' +
    '<a href="NEXT" target="_blank">' + nextArrow + '</a>' +
    '</div>',

  stylesheet: "https://maddycha.com/rhythm-ring/css/rhythmring.css",
  error: "<div>this site isn't part of the webring yet</div>",
};

webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));
if (webring.index === -1) document.currentScript.outerHTML = webring.error;
else {
  let sheet = document.createElement("link");
  sheet.rel = "stylesheet", sheet.href = webring.stylesheet;
  document.head.appendChild(sheet);
  webring.widget = webring.widget.replace("PREV", webring.sites.at(webring.index - 1));
  webring.widget = webring.widget.replace("NEXT", webring.sites[(webring.index + 1) % webring.sites.length]);
  webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = webring.widget;
}
delete webring;
