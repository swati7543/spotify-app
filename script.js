console.log("welcome  to here");
let songIndex = 0;
let audioElement = new Audio('S.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');




let songs = [
    {songName:"Salam-e-Ishq",filePath: "song/S.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "song/2.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "song/3.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "song/4.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "song/5.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "song/6.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "song/7.mp3",coverPath:"covers/1.jpg"},
]

// audioElement.play();

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})