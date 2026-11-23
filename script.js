// Fills in the live stuff on the page.
// If something breaks, the html still has fallback numbers. Nobody will ever know.

// ---------- Settings ----------

var githubUser = "CaptainPancakeWithBacon";

// Last.fm for the music line. Key is read-only so showing it is fine. I checked.
var lastfmUser = "SirAdolphus";
var lastfmKey = "fc5db5a97c8f06566f3fe096547697e6";

// One color per language
var barColors = ["#58a6ff", "#3fb950", "#e07b28", "#7b5fc4", "#c8402f"];

// Some people turn animations off. Respect that.
var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Helpers ----------

// Gets json. That's it.
function getJson(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error("Request failed: " + url);
    }
    return response.json();
  });
}

// Puts text in an element
function setText(id, text) {
  document.getElementById(id).textContent = text;
}

// Date to "today", "yesterday" or "5 days ago"
function timeAgo(dateString) {
  var then = new Date(dateString);
  var millisecondsPerDay = 1000 * 60 * 60 * 24;
  var days = Math.floor((Date.now() - then) / millisecondsPerDay);

  if (days < 1) {
    return "today";
  }
  if (days === 1) {
    return "yesterday";
  }
  return days + " days ago";
}

// So a song called <b> can't wreck the page
function escapeHtml(text) {
  text = text.replace(/&/g, "&amp;");
  text = text.replace(/</g, "&lt;");
  text = text.replace(/>/g, "&gt;");
  text = text.replace(/"/g, "&quot;");
  return text;
}

// Numbers count up from 0. Totally necessary.
function countUp(id, target) {
  var element = document.getElementById(id);

  if (reducedMotion || target === 0) {
    element.textContent = target;
    return;
  }

  var duration = 700; // ms
  var startTime = performance.now();

  function step(now) {
    var progress = (now - startTime) / duration;
    if (progress > 1) {
      progress = 1;
    }
    // fast at the start, slow at the end
    var eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// ---------- Clock ----------

function updateClock() {
  var time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Amsterdam",
    hour: "2-digit",
    minute: "2-digit",
  });
  setText("clock", "It is " + time + " in Middelburg.");
}

updateClock();
setInterval(updateClock, 30000); // every 30 sec

// ---------- GitHub: profile numbers ----------

getJson("https://api.github.com/users/" + githubUser)
  .then(function (user) {
    countUp("s-repos", user.public_repos);
    countUp("s-followers", user.followers);
  })
  .catch(function () {
    // nothing, the html numbers stay
  });

// ---------- GitHub: repos ----------

// Add up all the stars. There aren't many.
function showStars(repos) {
  var total = 0;
  for (var i = 0; i < repos.length; i++) {
    total = total + repos[i].stargazers_count;
  }
  countUp("s-stars", total);
}

// The 4 latest pushes
function showRecent(repos) {
  var others = [];
  for (var i = 0; i < repos.length; i++) {
    // skip the profile repo, that's just the card bot
    if (repos[i].name !== githubUser) {
      others.push(repos[i]);
    }
  }

  // newest first
  others.sort(function (a, b) {
    return new Date(b.pushed_at) - new Date(a.pushed_at);
  });

  var html = "";
  for (var j = 0; j < 4 && j < others.length; j++) {
    var repo = others[j];
    html = html + '<li><a href="' + repo.html_url + '">' + repo.name + "</a>";
    html = html + "<span>" + timeAgo(repo.pushed_at) + "</span></li>";
  }

  document.getElementById("recentlist").innerHTML = html;
  document.getElementById("recent").hidden = false;
}

// Language share, counted per repo (lines of code was too much work)
function showLanguages(repos) {
  var counts = {}; // like { JavaScript: 5, HTML: 2 }
  var total = 0;

  for (var i = 0; i < repos.length; i++) {
    var repo = repos[i];
    // only my own repos, notebooks are noise
    if (repo.fork || !repo.language || repo.language === "Jupyter Notebook") {
      continue;
    }
    if (!counts[repo.language]) {
      counts[repo.language] = 0;
    }
    counts[repo.language] = counts[repo.language] + 1;
    total = total + 1;
  }

  // object to list so it can sort
  var list = [];
  for (var language in counts) {
    list.push({ name: language, count: counts[language] });
  }
  list.sort(function (a, b) {
    return b.count - a.count;
  });

  var bar = document.getElementById("langbar");
  var legend = document.getElementById("legend");

  for (var k = 0; k < 5 && k < list.length; k++) {
    var item = list[k];
    var percent = Math.round((item.count / total) * 100);

    var piece = document.createElement("span");
    piece.style.flex = item.count;
    piece.style.background = barColors[k];
    bar.appendChild(piece);

    var label = document.createElement("li");
    label.innerHTML = '<i style="background:' + barColors[k] + '"></i>' + item.name + " " + percent + "%";
    legend.appendChild(label);
  }

  if (list.length > 0) {
    document.getElementById("langs").hidden = false;
  }
}

// language, updated, stars under the project cards
function showProjectDetails(repos) {
  var cards = document.querySelectorAll("[data-repo]");

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var repo = null;

    for (var j = 0; j < repos.length; j++) {
      if (repos[j].name === card.dataset.repo) {
        repo = repos[j];
      }
    }
    if (repo === null) {
      continue;
    }

    var parts = [];
    if (repo.language) {
      parts.push(repo.language);
    }
    parts.push("updated " + timeAgo(repo.pushed_at));
    if (repo.stargazers_count === 1) {
      parts.push("1 star");
    } else if (repo.stargazers_count > 1) {
      parts.push(repo.stargazers_count + " stars");
    }

    var line = card.querySelector(".meta");
    line.textContent = parts.join(" · ");
    line.hidden = false;
  }
}

getJson("https://api.github.com/users/" + githubUser + "/repos?per_page=100")
  .then(function (repos) {
    showStars(repos);
    showRecent(repos);
    showLanguages(repos);
    showProjectDetails(repos);
  })
  .catch(function () {
    // whatever, the page works without it
  });

// ---------- Commit heat strip ----------

// Data comes from my profile repo, refreshed every 6 hours
// looks like { start: "2026-06-01", counts: [0, 0, 3, 1, ...] }, one number per day
var activityUrl =
  "https://raw.githubusercontent.com/CaptainPancakeWithBacon/CaptainPancakeWithBacon/main/assets/activity.json";

// commits to color level. 0 is nothing, 4 is a lot
function commitLevel(count) {
  if (count === 0) {
    return 0;
  }
  if (count === 1) {
    return 1;
  }
  if (count <= 3) {
    return 2;
  }
  if (count <= 6) {
    return 3;
  }
  return 4;
}

function showHeat(data) {
  var grid = document.getElementById("grid");
  var startDate = new Date(data.start + "T00:00:00");
  var weeks = Math.ceil(data.counts.length / 7);
  var millisecondsPerDay = 1000 * 60 * 60 * 24;
  var total = 0;
  var html = "";

  for (var i = 0; i < data.counts.length; i++) {
    var count = data.counts[i];
    total = total + count;

    var date = new Date(startDate.getTime() + i * millisecondsPerDay);
    var dateText = date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

    var word = " commits, ";
    if (count === 1) {
      word = " commit, ";
    }

    html = html + '<i class="l' + commitLevel(count) + '" title="' + count + word + dateText + '"></i>';
  }

  grid.style.aspectRatio = weeks + " / 7";
  grid.innerHTML = html;
  setText("heatcap", total + " public commits in the last " + weeks + " weeks");
  document.getElementById("heat").hidden = false;
}

getJson(activityUrl)
  .then(showHeat)
  .catch(function () {
    // no file yet, strip stays hidden
  });

// ---------- Now playing (Last.fm) ----------

// One track into the music line
function showTrack(track) {
  var element = document.getElementById("music");
  var link =
    '<a href="' + escapeHtml(track.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(track.name) + "</a>";
  link = link + " by " + escapeHtml(track.artist["#text"]);

  // Album cover. Last.fm gives a gray star when there is none, skip that
  var coverHtml = "";
  var images = track.image || [];
  for (var i = 0; i < images.length; i++) {
    var url = images[i]["#text"];
    var isMedium = images[i].size === "medium";
    var isPlaceholder = url.indexOf("2a96cbd8b46e442fc41c2b86b821562f") !== -1;
    if (isMedium && url !== "" && !isPlaceholder) {
      coverHtml = '<img class="art" src="' + escapeHtml(url) + '" alt="" width="40" height="40">';
    }
  }

  // playing right now or not?
  var text = "";
  if (track["@attr"] && track["@attr"].nowplaying) {
    text = '<span class="eq"><i></i><i></i><i></i></span>Listening to ' + link;
  } else {
    var playedAt = new Date(track.date.uts * 1000);
    text = "Last played: " + link + ", " + timeAgo(playedAt.toISOString());
  }

  element.innerHTML = coverHtml + "<span>" + text + "</span>";
  element.hidden = false;
}

function loadMusic() {
  var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&format=json";
  url = url + "&user=" + lastfmUser + "&api_key=" + lastfmKey;

  getJson(url)
    .then(function (data) {
      var tracks = data.recenttracks.track;
      if (tracks.length > 0) {
        showTrack(tracks[0]);
      }
    })
    .catch(function () {
      // nothing, line stays hidden
    });
}

if (lastfmUser !== "" && lastfmKey !== "") {
  loadMusic();
  setInterval(loadMusic, 30000); // check again every 30 sec
}
