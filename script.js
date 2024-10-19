console.log("spotify clone");

//initilization 
let index = 0;
let songItems = Array.from(document.getElementsByClassName("songitems"));
let img = document.querySelector(".songitemimg")
let play = document.querySelector(".playbtn");
let pause = document.querySelector(".pausebtn");
let audioElement = new Audio('song/0.mp3');
let myprogressbar = document.querySelector("#myprogressbar");
let currentsong = document.querySelector(".moving");
let searchbar = document.getElementById("searchbar");




let song = [
  { songname: "Heeriye", filepath: "song/1.mp3", coverpath: "cover/heeriye.jpg", },
  { songname: "kesariya", filepath: "song/1.mp3", coverpath: "cover/kesariya.jpg", },
  { songname: "bharat jaan se pyara", filepath: "song/1.mp3", coverpath: "", },
  { songname: "mix song", filepath: "song/Ve haniya.mp3", coverpath: "", },
  { songname: "9:45", filepath: "song/9.45.mp3", coverpath: "cover/no-pentali.jpg", },
  { songname: "Gulabi sadi", filepath: "song/Gulabi sadi.mp3", coverpath: "cover/gulabi sadi.jpg", },
  { songname: "Maine tera naam dil rakh diya", filepath: "song/Maine tera naam dil rakh diya.mp3", coverpath: "cover/tera naam dil rakh diya.jpg", },
  { songname: "O mahi", filepath: "song/O mahi.mp3", coverpath: "cover/o mahi.jpg", },
  { songname: "O Sajni Re", filepath: "song/O Sajni Re.mp3", coverpath: "cover/o sajni re.jpg", },
  { songname: "So high", filepath: "song/So high.mp3", coverpath: "cover/so high.jpg", },
  { songname: "Ve haniya", filepath: "song/Ve haniya.mp3", coverpath: "cover/ve haniya.jpg", },
  { songname: "California love", filepath: "song/Ve haniya.mp3", coverpath: "cover/california gur sindhu.jpg", },
  { songname: "Lalkara", filepath: "song/Ve haniya.mp3", coverpath: "cover/lalkara.jpg", },
  { songname: "Maan Meri jaaan", filepath: "song/Ve haniya.mp3", coverpath: "cover/tu maan meri jaan.jpg", },
  { songname: "Moti Chain Mota paisa", filepath: "song/Ve haniya.mp3", coverpath: "cover/moti chain mota paisa.jpg", },
  { songname: "Tu aake dekh le", filepath: "song/Ve haniya.mp3", coverpath: "cover/tu aake dekh le.jpg", },
  { songname: "Shankar shiv bhole  ", filepath: "song/Ve haniya.mp3", coverpath: "cover/shankar shiv bhole.jpeg", },
  { songname: "karunamayi kripa kijiye", filepath: "song/Ve haniya.mp3", coverpath: "cover/karunamayi kripa kijiye.jpg", },
  { songname: "Radhe braj mann", filepath: "song/Ve haniya.mp3", coverpath: "cover/radhe braj mann.jpg", },
  { songname: "Shree hari strotam", filepath: "song/Ve haniya.mp3", coverpath: "cover/shree hari strotam.jpg", },
  { songname: "Barhma Murari surachit lingam", filepath: "song/Ve haniya.mp3", coverpath: "cover/bhramurari surachit lingam.jpg", },
  { songname: "Sadi gali", filepath: "song/Ve haniya.mp3", coverpath: "cover/sadi gali.jpg", },
  { songname: "Mitti di khushboo", filepath: "song/Ve haniya.mp3", coverpath: "cover/mitti di khshboo.jpg", },
  { songname: "Sajde", filepath: "song/Ve haniya.mp3", coverpath: "cover/sajde kill dill.jpg", },
  { songname: "Hawa banke", filepath: "song/Ve haniya.mp3", coverpath: "cover/hawa banke.jpg", },
  { songname: "Wajah tum ho", filepath: "song/Ve haniya.mp3", coverpath: "cover/wajah tum ho.jpg", },
  { songname: "Beedi jalile", filepath: "song/Ve haniya.mp3", coverpath: "cover/beedi jaliye.jpg", },
  { songname: "Billo rani", filepath: "song/Ve haniya.mp3", coverpath: "cover/billo rani.jpg", },
  { songname: "Kabootar", filepath: "song/Ve haniya.mp3", coverpath: "cover/kabootar.jpg", },
  { songname: "Jale 2", filepath: "song/Ve haniya.mp3", coverpath: "cover/jale 2.jpg", },
  

]

// play/pause handler
play.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {

    play.style.display = "none";
    pause.style.display = "block"
    audioElement.play()
  }
})
pause.addEventListener("click", () => {
  pause.style.display = "none"
  play.style.display = "block";
  audioElement.pause()
  makeAllPlay();
})

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
  myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

songItems.forEach((element, i) => {
  element.getElementsByClassName("songitemimg")[0].src = song[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = song[i].songname;

})

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songitemplaybtn")).forEach((element) => {
    element.classList.add("fa-circle-play")
    element.classList.remove("fa-circle-pause")
  })
}

Array.from(document.getElementsByClassName("songitemplaybtn")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlay();
    index = parseInt(e.target.id)
    e.target.classList.remove("fa-circle-play")
    e.target.classList.add("fa-circle-pause")
    audioElement.src = `song/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.style.display = "none";
    pause.style.display = "block"
    currentsong.innerText = song[index].songname;
  })

})



document.querySelector(".previous").addEventListener("click", () => {
  if (index <= 0) {
    index = 0
  } else {
    index--
  }
  audioElement.src = `song/${index}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  play.style.display = "none";
  pause.style.display = "block"
  currentsong.innerText = song[index].songname;
})
document.querySelector(".next").addEventListener("click", () => {
  if (index >= 29) {
    index = 0
  } else {
    index++
  }
  audioElement.src = `song/${index}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  play.style.display = "none";
  pause.style.display = "block"
  currentsong.innerText = song[index].songname;
})


searchbar.addEventListener("keyup", () => {
  searchsong();
})

let searchsong = () => {
  let filter = searchbar.value.toUpperCase();
  let songitem = document.getElementsByClassName("songitems");
  let songname = document.getElementsByClassName("songName")

  for (let i = 0; i < songname.length; i++) {
    let innertext = songname[i].innerText.toUpperCase();
    if (innertext.indexOf(filter) > -1) {
      songitem[i].style.display = ""
    }
    else {
      songitem[i].style.display = "none"
    }
  }
}
