console.log("Welcome to Spotify")
let songIndex=0;
let audioElement= new Audio("songs/cover.mp3");

let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
myProgressBar.value=0;
let gif=document.getElementById('gif');
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let songItems=Array.from(document.getElementsByClassName('songItem'));
let timeChange=document.getElementById('time')
let coverImage=document.getElementById('img1');

let songs=[
    {songNames:"Prindey", filePath:"songs/1.mp3", coverPath:"cover/coverpage.1.jpg",time:'4:24'},
    {songNames:"Filhaal2 Mohabbat", filePath:"songs/2.mp3", coverPath:"cover/coverpage.2.jpg",time:'5:00'},
    {songNames:"Rubber Khasa Aala Chahar ", filePath:"songs/3.mp3", coverPath:"cover/coverpage.3.jpg",time:'3:19'},
    {songNames:"Thaa Varinder Brar ", filePath:"songs/4.mp3", coverPath:"cover/coverpage.4.jpg",time:'3:01'},
    {songNames:"Naina Ke Teer Renuka Panwar ", filePath:"songs/5.mp3", coverPath:"cover/coverpage.5.jpg",time:'3:20'},
    {songNames:"Chawal Mote Peg", filePath:"songs/6.mp3", coverPath:"cover/coverpage.6.jpg",time:'3:07'},
    {songNames:"Bhartar Renuka Panwar", filePath:"songs/7.mp3", coverPath:"cover/coverpage.7.jpg",time:'3:00'},
    {songNames:"12 Bande Varinder Brar ", filePath:"songs/8.mp3", coverPath:"cover/coverpage.8.jpg",time:'3:24'},
    {songNames:"Gypsy Gd Kaur", filePath:"songs/9.mp3", coverPath:"cover/coverpage.9.jpg",time:'2:30'},
    {songNames:"Pyar Mera Sumit Goswami", filePath:"songs/10.mp3", coverPath:"cover/coverpage.10.jpg",time:'3:28'},
    {songNames:"Tabahi Badshah ", filePath:"songs/11.mp3", coverPath:"cover/coverpage.11.jpg",time:'2:48'},
    {songNames:"Top Notch Gabru Vicky ", filePath:"songs/12.mp3", coverPath:"cover/coverpage.12.jpg",time:'2:38'}
    

]

     songItems.forEach((element,i)=>{
     console.log(element,i);
     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songNames;
    })


// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        songItemPlay[songIndex].classList.remove('fa-circle-play');
        songItemPlay[songIndex].classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else{
        songItemPlay[songIndex].classList.add('fa-circle-play');
        songItemPlay[songIndex].classList.remove('fa-circle-pause');
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
   
})
const background=(i)=>{

    let arr=Array.from(document.getElementsByClassName('songItem'));
    arr.forEach((element)=>{
        element.style.backgroundColor='white';
    })
    arr[i].style.backgroundColor='#a2b0b6';


}

function playmusic(songIndex)
{
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    coverImage.src=`cover/coverpage.${songIndex+1}.jpg`;
    audioElement.currentTime=0;
    audioElement.play();
    document.getElementById('changeName').innerText=songs[songIndex].songNames;
    gif.style.opacity=1;
    background(songIndex);
    songItemPlay[songIndex].classList.add('fa-circle-pause');
    songItemPlay[songIndex].classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
}
let timeset=(t)=>{
    
    timeChange.innerHTML=Math.floor(t/60)+':';
    if(Math.floor(t%60)<10){
        timeChange.innerHTML=timeChange.innerHTML+'0'+Math.floor(t%60)+'/'+songs[songIndex].time;
    }
    else{
        timeChange.innerHTML=timeChange.innerHTML+Math.floor(t%60)+'/'+songs[songIndex].time;
    }
    console.log(myProgressBar.value);

   if(myProgressBar.value==100)
    {
        songItemPlay[songIndex].classList.remove('fa-circle-pause');
        songItemPlay[songIndex].classList.add('fa-circle-play');
        songIndex+=1;
         playmusic(songIndex);
    }

    
}
audioElement.addEventListener('timeupdate',()=>{
    
    
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
   
    timeset(audioElement.currentTime);

    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
   

})
 
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        

        if(e.target.classList.contains('fa-circle-pause'))
        {
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.pause();
            gif.style.opacity=0;
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
        else{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
       
        playmusic(songIndex);
        
        }
    
    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    songItemPlay[songIndex].classList.remove('fa-circle-pause');
    songItemPlay[songIndex].classList.add('fa-circle-play');
    if(songIndex>=11)
    {
        songIndex=0;
    }
    else{
    songIndex =songIndex+1;
    }
    playmusic(songIndex);
        

})
document.getElementById('previous').addEventListener('click',()=>{
    
    songItemPlay[songIndex].classList.remove('fa-circle-pause');
    songItemPlay[songIndex].classList.add('fa-circle-play');
    if(songIndex<=0)
    {
           songIndex=0;
    }
    else
    {
        songIndex-=1;

    }
    playmusic(songIndex);
    
})

  songItems.forEach((element,i)=>{
    element.addEventListener('click',()=>{
       
        songItemPlay[songIndex].classList.remove('fa-circle-pause');
        songItemPlay[songIndex].classList.add('fa-circle-play');
        songIndex=i;
        playmusic(songIndex);


    })
})


