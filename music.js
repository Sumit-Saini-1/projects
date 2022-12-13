let post=document.querySelector(".poster img");
let song=document.querySelector(".song-name");
let singer=document.querySelector(".singer");

let play_btn=document.querySelector(".pause-play");
let next_btn=document.querySelector(".next");
let prev_btn=document.querySelector(".prev");

let mslider = document.querySelector(".mslider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');
let track_list = [
  {
    name: "Pagal Shayar",
    artist: "Babbu Maan",
    image: "poster/pagalsayar.jfif",
    path: "songs/Pagal Shayar.mp3"
  },
  {
    name: "Titli",
    artist: "Satinder Sartaaj",
    image: "poster/titli.jfif",
    path: "songs/Titli - Satinder Sartaaj.mp3"
  },
  {
    name: "Kalam Kalla",
    artist: "Babbu Maan",
    image: "poster/kallamkalla.jpg",
    path: "songs/Kalam Kalla.mp3"
  },
  {
    name: "Nikki Jehi Kuri",
    artist: "Satinder Sartaaj",
    image: "poster/niki.jpg",
    path: "songs/Nikki Jehi Kuri - Satinder Sartaj.mp3"
  },
  {
    name: "License",
    artist: "Babbu Maan",
    image: "poster/license.jpg",
    path: "songs/License - Babbu Maan (DjPunjab.Com).mp3"
  },
];
function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  curr_track.src = track_list[track_index].path;
  curr_track.load();
  post.src=track_list[track_index].image;
  song.textContent = track_list[track_index].name;
  singer.textContent = track_list[track_index].artist;
  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.background = bgColor;
}
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  mslider.value = 0;
}
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}
function playTrack() {
  curr_track.play();
  isPlaying = true;
  play_btn.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  play_btn.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
}
function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;
  loadTrack(track_index);
  playTrack();
}
function seekTo() {
  seekto = curr_track.duration * (mslider.value / 100);
  curr_track.currentTime = seekto;
}
function seekUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    mslider.value = seekPosition;
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}