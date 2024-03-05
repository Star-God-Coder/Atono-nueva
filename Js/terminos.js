addEventListener("DOMContentLoaded",function(){
let insta = document.getElementsByClassName("insta")
let wats = document.getElementsByClassName("whats")
for (let i = 0; i < wats.length; i++) {
  wats[i].addEventListener("click", function() {
    open("https://wa.me/5358711030");
  });
}
for (let i = 0; i < wats.length; i++) {
  insta[i].addEventListener("click", function() {
    open("https://www.instagram.com/atono.muebles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==");
  });
}
});