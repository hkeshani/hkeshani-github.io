// prevent scrolling
function noscroll() {
  window.scrollTo( 0, 0 );
};
// add listener to disable scroll
window.addEventListener('scroll', noscroll);

// animation
var pic1 = document.getElementById("picture1");
var pic2 = document.getElementById("picture2");
var pic3 = document.getElementById("picture3");
var pic4 = document.getElementById("picture4");
var tl = new TimelineMax({paused:true,onUpdate:updatetime,onComplete:restart});

tl.timeScale(1);


//SET POSITION - 0S
tl.to("#startscreen, #subtitleswindow", 0.5, {opacity: 0}, "+=0.5")

  .set ("#startscreen", {zIndex: -1})
  
//1-ADD PAUSE
  .set({}, {}, "+=10.00")

//2- ZOOM
  .to(pic1, 10.00, {
  scale: 1.3,
  xPercent: -0,
  yPercent: -10,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=20.00")
  
.to(pic1, 10.00, {
  scale: 2.5,
  xPercent: -4,
  yPercent: 15,
  ease: Power1.easeInOut  

})

//ADD PAUSE
  .set({}, {}, "+=8.5")
  
.to(pic1, 10.00, {
  scale: 1.3,
  xPercent: -0,
  yPercent: -10,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=1.0")

 //CROSSFADE TO ANOTHER IMAGE
  .to(pic1, 1, {

  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic2, 1, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  
  
//3-ZOOM 
  .to(pic2, 10.00, {
  scale: 1.6,
  xPercent: 0,
  yPercent: -10,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=1.00")
  
  .to(pic2, 10.00, {
  scale: 2.75,
  xPercent: -57,
  yPercent: -27,
  ease: Power1.easeInOut
})  
  
  //ADD PAUSE
  .set({}, {}, "+=1.00")
  
//CROSSFADE TO ANOTHER IMAGE
  .set(pic3, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic2, 1, {
  scale: 1.6,
  xPercent: 0,
  yPercent: 0,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic3, 1, {
  scale: 1,
  xPercent: 25,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  
  .to(pic3, 5.00, {
  scale: 1.0,
  xPercent: 0,
  yPercent: 0,
  ease: Power1.easeInOut
})
  
//4-PAN 
  .to(pic3, 10.00, {
  scale: 1.8,
  xPercent: 0,
  yPercent: -30,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=5.30")

//CROSSFADE TO ANOTHER IMAGE
  .set(pic4, {
  scale: 6,
  xPercent: 20,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic3, 1, {
  scale: 6,
  xPercent: 25,
  yPercent: 20,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic4, 1, {
  scale: 4,
  xPercent: 120,
  yPercent: 60,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  
 //4-PAN 
  .to(pic4, 24.00, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  ease: Power1.easeInOut
}) 
  
  .to(pic4, 10.00, {
  scale: 3,
  xPercent: 0,
  yPercent: -45,
  ease: Power1.easeInOut
}) 

//ADD PAUSE
  .set({}, {}, "+=3.00")

  .to(pic4, 5.00, {
  scale: 3,
  xPercent: 0,
  yPercent: 45,
  ease: Power1.easeInOut
}) 

//ADD PAUSE
  .set({}, {}, "+=21.00")
  
   .to(pic4, 20.00, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  ease: Sine.easeInOut
}) 
 
   .to(pic4, 4.75, {
  scale: 0,
  xPercent: 0,
  yPercent: 0,
  opacity:0,
  ease: Power1.easeInOut
})
 
//end sequence
	.set ("#startscreen", {zIndex: 0})
	.to("#startscreen", 0.5, {opacity: 1})




// back button
function back() {
window.location.href = "la1.html#back";
};

// play-pause button
var audio1 = document.getElementById("audio1");
var playpause = document.getElementById("playpause");

var p=0;
	//primes audio especially for mobile to avoid delay
function prime_audio(subject, callback) {
  if (p==1) {aud_play_pause();} else {
  audio1.play();
  audio1.pause();
  console.log("audio primed");
  p=1;
  callback();
}
};

function aud_play_pause() {console.log("start");
  if (audio1.paused) {
    audio1.playbackRate = 1; 
    audio1.play(); 
    tl.timeScale(1); 
    tl.play();
    playpause.innerHTML = "<i class='material-icons'>pause_circle_filled</i>";    
  } else {
    audio1.pause(); 
    tl.pause(); 
    playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>";
  }
};

playpause.onclick = function () {console.log("click"); prime_audio("x", aud_play_pause);};

var playr = document.getElementById("playr");
playr.onclick = function () {console.log("click"); prime_audio("x", aud_play_pause);};

// toggle subtitles
var subtitlestoggle = document.getElementById("subtitlestoggle");
var subtitleswindow = document.getElementById("subtitleswindow");
subtitlestoggle.onclick = function opacitytoggle()
{
  if (subtitleswindow.style.opacity === "1") {subtitleswindow.style.opacity = "0"} else {subtitleswindow.style.opacity = "1"};
};

// toggle morebuttons
var togglemorebuttons = document.getElementById("togglemorebuttons");
var morebuttons = document.getElementById("morebuttons");
togglemorebuttons.onclick = function opacitytoggle()
{
  if (morebuttons.style.opacity === "1") {morebuttons.style.opacity = "0"} else {morebuttons.style.opacity = "1"};
};

//Update time
var time = document.getElementById("time");
function updatetime() {
    var currentTime = tl.time();
  var rndcurrentTime = Number(Math.round(currentTime+"e2")+"e-2");
    time.innerHTML = rndcurrentTime;
};

/* To round to 1 digit use -> Number(Math.round(currentTime+'e0')+'e-0'); */

//Forward 5s button
var forward5 = document.getElementById("forward5");
forward5.onclick = function fw() {
    var x=5;
    var currentTime = tl.time(); 
    var newTime = currentTime+x;
  
  tl.seek(newTime).play;
  audio1.currentTime += 5.0;
 updatetime();
};

//Rewind 5s button
var rewind5 = document.getElementById("rewind5");
rewind5.onclick = function rw() {
    var x=5;
    var currentTime = tl.time(); 
    var newTime = currentTime-x;
  
  tl.seek(newTime).play;
  audio1.currentTime -= 5.0;
 updatetime();
};

//Restart button
var replaybutton = document.getElementById("replaybutton");
replaybutton.onclick = function restart() {
  audio1.currentTime = 0; audio1.playbackRate = 1; audio1.pause(); tl.timeScale(1); tl.restart(0).pause(); playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>"; time.innerHTML = "0.00";
};

function restart() {
  audio1.currentTime = 0; audio1.playbackRate = 1; audio1.pause(); tl.timeScale(1); tl.restart(0).pause(); playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>"; time.innerHTML = "0.00";
};
