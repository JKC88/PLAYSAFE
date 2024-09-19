! function () {
var t;
try {
for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
onpopstate = function (t) {
t.state && location.replace("https://trk.bsclicks.com/f62e0d76-da7c-4ea0-a17e-2ed813a667eb?source={source}")
}
} catch (o) {}
}();