var video = document.getElementById("video");
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var progress = document.getElementById("progress");
var timestamp = document.getElementById("timestamp");
var volume = document.getElementById("volume");
//播放/暂停视频
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
//播放暂停图标切换
function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//停止视频
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//进度条视频同步
function setVideoProgress(){
    video.currentTime = (+progress.value*video.duration)/100;
}


function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
    //获取分钟
    var mins = Math.floor(video.currentTime / 60);
    if(mins < video.duration){
        mins = mins < 10 ? '0'+mins:mins;
    }
    //获取秒钟
    var secs = Math.floor(video.currentTime % 60);
    if(secs < video.duration){
        secs = secs < 10 ? '0'+secs:secs;
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

function volumeState(){
    video.volume = volume.value;
}

function volumeDeafult(){
    volume.value = video.volume = 0.1;
}
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('play',updateIcon);
video.addEventListener('pause',updateIcon);
video.addEventListener('timeupdate',updateProgress);
play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);
volume.addEventListener('change',volumeState);
volumeDeafult();