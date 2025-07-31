let menuChildBtn = document.querySelectorAll(".menuChildren");
let currentSongTimeBtn = document.querySelector("#songStartTime");
let bottomMenuChildren = document.querySelectorAll(".bottomMenuChildren");
let localSongContainer = document.querySelectorAll(".localSongLoader");
let songNameDisplay = document.getElementById('musicName');

const video = document.getElementById("myVideo");

  function playVideo() {
    video.play();
  }

  function pauseVideo() {
    video.pause();
  }
 
menuChildBtn.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        unClickAll();
        menuChildrenOnClick(btn) ;
        
       
    
    })
})

function menuChildrenOnClick(btn){

    let div = btn.querySelector("div");
    div.classList.add("BtnClicked");

     

}
function unClickAll(){

menuChildBtn.forEach((btn) =>{
    let div = btn.querySelector("div");
    div.classList.remove('BtnClicked')

})
bottomMenuChildren.forEach((btn) =>{
    let div = btn.querySelector("div");
    div.classList.remove('BtnClicked')

})
     

}




bottomMenuChildren.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        unClickAll();
        menuChildrenOnClick(btn) ;
        
       
    
    })
})
    


var progress = document.getElementById("progress"); // holding the seekbar
var song = document.getElementById("song");
var cntrlBack = document.getElementById("backSong");
var cntrlIcon = document.getElementById("playPauseSong");
var cntrlFront = document.getElementById("frontSong");
var repeatShuffleMusicBtn = document.getElementById("repeatShuffleMusic");
var likeMusicBtn = document.getElementById("likeMusic");
let songEndTimeDiv  = document.getElementById("songEndTime");
let hamburgerBtn  = document.getElementById("hamBtn");


console.log(hamburgerBtn) ;

let mainLeftDiv = document.getElementById("mainLeftDiv") ;
let leftStatus = mainLeftDiv.getAttribute("status");
var currentSongStatus = cntrlIcon.getAttribute("status");
var repeatShuffleMode = repeatShuffleMusicBtn.getAttribute("status");
var currentSongSrc  = "" ;

let likedMusicSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>' ;
let notLikedMusicSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>' ;

let repeatMusicSvg=  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z"/></svg>' ;

let shuffleMusicSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>'


song.pause();
let fillPercentage =  0.0 ;
let MaxfillPercentage =  100.0 ;
let value = 0.0 ;
var currentSongPath = "" ;
var songList = ["night-detective" ,"spinning-head" , "tell-me-the-truth" , "groove-bliss-upbeat-funk" , "ethereal-piano"  , "tell-me-the-truth" , "groovy-ambient-funk"  , "for-her-chill"] ;
let likedSongList = [0,0,0,0,0,0,0,0] ;
var songIndex = 0;
song.src =  "./musics/" + songList[songIndex] + ".mp3";




let pauseSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>' ;

let playSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>' 
// setting the song pause for initial status 




// song.onloadedmetadata = function() {
//     progress.max = song.duration;
//     progress.value = song.currentTime;

// }
song.onloadedmetadata = function() {
     
    // song.pause() ; 
    progress.max = 100; 
    progress.value = (song.currentTime/song.duration)*100;
    setHeart();
    let minutes  = Math.floor(song.duration/60 ) ;
    let seconds  = Math.floor(song.duration % 60 ) ;
    // console.log("length of second is" , seconds.length) ;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    songEndTimeDiv.innerText  = `${minutes}:${seconds}` ;
    
    

};

function setHeart(){
    
    if(likedSongList[songIndex] == 1){
        likeMusicBtn.innerHTML = likedMusicSvg ;

    }
    else{
        likeMusicBtn.innerHTML = notLikedMusicSvg ;

    }
    

}


cntrlIcon.onclick = function(){
    if(currentSongStatus == "paused"){
        
        song.play();
        currentSongStatus = "resumed" ;
        cntrlIcon.innerHTML = pauseSvg ;


    }


    else {
        currentSongStatus = "paused" ;
        song.pause();
        cntrlIcon.innerHTML = playSvg ;
    }

}

progress.addEventListener("mouseover", function() {
    songEndTimeDiv.style.opacity =  1; // Change background color
});

// Revert hover effect
progress.addEventListener("mouseout", function() {
    songEndTimeDiv.style.opacity = 0.7; // Revert to original background color
});



if (!song.pause()){


    console.log("song is playing \n");
    setHeart();
    let minutes ;
    let seconds ;
    setInterval(() =>{


        progress.style.background = `linear-gradient(to right, orange ${progress.value}%, #ddd ${progress.value}%)`;
        
        
     minutes  = Math.floor(song.currentTime/60.0) ;
     seconds  = Math.floor(song.currentTime % 60.0 ) ;
    console.log(song.currentTime) ;
    progress.value = (song.currentTime/song.duration)*100;
    // console.log("length of second is" , seconds.length) ;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    currentSongTimeBtn. innerText  = `${minutes}:${seconds}` ;


        

        // if(progress.value == progress.max){
        if(song.currentTime == song.duration){
            

            if(repeatShuffleMode == "repeat")
                {
            console.log("the song has finished \n") ;
            song.currentTime = 0 ;
            song.play();
              
            }

            else {
                /// by default the songs are in shuffle mode
                nextSong();

            }
        }


    } , 300)    

}



progress.addEventListener("input" , ()=>{
    song.pause()
  
    
        song.currentTime = (progress.value * song.duration) / 100 ; 
        
        currentSongStatus = "resumed" ;
        cntrlIcon.innerHTML = pauseSvg ;  

        song.play() ;
    



})




function prevSong() {
    console.log("cntrlBack \n") ;
    console.log("currentSong path =" , song.src) ;
    song.pause();
    if(songIndex ==  0 ){
        songIndex = songList.length -1 ;
    }
    else {
        songIndex = songIndex - 1;
        
    }
    console.log(songIndex) ;
    song.src = "musics/" +  songList[songIndex] + ".mp3";
    song.load();
    
    console.log("newSong path = " , song.src) ;
    currentSongStatus = "resumed" ;
    cntrlIcon.innerHTML = pauseSvg
       
    song.play() ;




}

cntrlFront.onclick = function(){
    nextSong();
}
cntrlBack.onclick = function(){
    prevSong();

}

repeatShuffleMusicBtn.onclick = function () {
    repeatShuffleModeFunction();

}

 function nextSong() {
    console.log("cntrlFront \n") ;
    console.log("currentSong path =" ,  currentSongSrc) ;
    song.pause();
     
    if(songIndex == songList.length - 1  ){ /// at end 
        songIndex = 0 ;
    }
    else {
        songIndex = songIndex + 1;
    }
    console.log(songIndex) ;

         song.src  =  "./musics/" +  songList[songIndex] + ".mp3";

    
    console.log("newSong path = " , song.src ) ;
    song.load();
    currentSongStatus = "resumed" ;
    cntrlIcon.innerHTML = pauseSvg
    song.play() ;


}

function repeatShuffleModeFunction (){
    if(repeatShuffleMode =="shuffle"){
    repeatShuffleMode = "repeat" ;
    console.log("repeat mode is on \n")
    repeatShuffleMusicBtn.innerHTML = repeatMusicSvg;
    
}
    else {
        repeatShuffleMode = "shuffle";
        console.log("shuffle mode is on \n")
        repeatShuffleMusicBtn.innerHTML = shuffleMusicSvg;

    }


}

likeMusicBtn.onclick = function() {
    console.log("heart is clicked \n")
    if(likedSongList[songIndex] == 0){
        likedSongList[songIndex] = 1;
        likeMusicBtn.innerHTML = likedMusicSvg ;
    }
    
else{
    likedSongList[songIndex] = 0;
        likeMusicBtn.innerHTML = notLikedMusicSvg;

}


}


hamburgerBtn.onclick = function() {
    

    console.log(leftStatus) ;


    if(leftStatus == "off"){
        
        leftStatus = "on" ;
        console.log(leftStatus) ;
        console.log("ham bttn was clicked\n")
    
        console.log(mainLeftDiv) ;
        mainLeftDiv.style.display = "inline" ;
        mainLeftDiv.style.zIndex = "100" ;
        mainLeftDiv.style.width = "30vw" ;
        // mainLeftDiv.style.overflow = "visible" ;
        

    }
    else {
        console.log("ham is off now")
        leftStatus = "off" ;
        mainLeftDiv.style.display = "none" ;
        
        console.log(leftStatus) ;


    }


}





    

// JavaScript for music control
let audioPlayer = null; 
let isPlaying = false;

function loadLocalSong() {
  const fileInput = document.getElementById('localFileInput');
  const file = fileInput.files[0];
  const songNameDisplay = document.getElementById('songName');
  const playPauseBtn = document.getElementById('playPauseBtn');
  
  

  if (file) {
    // Stop previous audio if any
    if (audioPlayer) {
      audioPlayer.pause();
        pauseVideo();
      audioPlayer = null;
      isPlaying = false;
    }

    const fileURL = URL.createObjectURL(file);
    audioPlayer = new Audio(fileURL);

    // Display file name
    songNameDisplay.textContent = `🎶 Now Playing: ${file.name.slice(0,-4)}`;
    // songNameDisplay.textContent = file.name.slice(0,-4);
    
    // Enable play button and set to play mode
    playPauseBtn.disabled = false;
    playPauseBtn.textContent = '▶️ Play';
  }
}

function togglePlayPause() {
  const playPauseBtn = document.getElementById('playPauseBtn');

  if (!audioPlayer) return;

  if (isPlaying) {
    audioPlayer.pause();
    pauseVideo();
    playPauseBtn.textContent = '▶️ Play';
  } else {
    audioPlayer.play();
    playVideo();
    playPauseBtn.textContent = '⏸️ Pause';
  }

  isPlaying = !isPlaying;
}
