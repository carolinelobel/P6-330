// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var currVol = 0;

function init() {
	for (i = 0; i <=5; i++) {
		let id = "vl"+i;
		volLevels[i] = document.getElementById(id);
		if (i <=2) {
			volLevels[i].style.backgroundColor = "#9f5cc4";
		}
	}
	currVol = 3;
	// Your code goes here
};

function getBackgroundColor(id) {
	var color = document.getElementById(id).style.backgroundColor;
	return color;
}

function volUp() {

	if (currVol == 0) {
		volLevels[0].style.backgroundColor ="#9f5cc4";
		currVol = 1;
	}
	else if (currVol ==1) {
		volLevels[1].style.backgroundColor ="#9f5cc4";
		currVol = 2;
	}
	else if (currVol ==2) {
		volLevels[2].style.backgroundColor ="#9f5cc4";
		currVol = 3;
	}
	else if (currVol ==3) {
		volLevels[3].style.backgroundColor ="#9f5cc4";
		currVol = 4;
	}
	else if (currVol == 4) {
		volLevels[4].style.backgroundColor ="#9f5cc4";
		currVol = 5;
	}
	else if (currVol == 5) {
		volLevels[5].style.backgroundColor ="#9f5cc4";
		currVol = 6;
	}

}

function volDown() {

	if (currVol == 6) {
		volLevels[5].style.backgroundColor ="white";
		currVol = 5;
	}
	else if (currVol == 5) {
		volLevels[4].style.backgroundColor ="white";
		currVol = 4;
	}
	else if (currVol == 4) {
		volLevels[3].style.backgroundColor ="white";
		currVol = 3;
	}
	else if (currVol == 3 ){
		volLevels[2].style.backgroundColor ="white";
		currVol = 2;
	}
	else if (currVol == 2) {
		volLevels[1].style.backgroundColor ="white";
		currVol = 1;
	}
	else if (currVol == 1) {
		volLevels[0].style.backgroundColor ="white";
		currVol = 0;
	} 

}


function playback() {
	if (document.getElementById("play-button").innerHTML == "pause") {
		document.getElementById("playback").value++;
		document.getElementById("left-time").innerHTML = secondsToMs(document.getElementById("playback").value);
		if(document.getElementById("playback").value == document.getElementById("playback").max) {
			nextSong();
		}
	}
		
}

function switchPlay() {
	let play = document.getElementById("play-button");
	if(play.innerHTML == "play_arrow") {
		play.innerHTML = "pause";
		playMusic = setInterval(playback,1000);
	}
	else if (play.innerHTML == "pause") {
		play.innerHTML = "play_arrow";
		clearInterval(playMusic);
	}
}

function nextSong() {
	document.getElementById("playback").value = "0";
	document.getElementById("left-time").innerHTML = "0:00";
	document.getElementById("right-time").innerHTML = "3:00";
	var song = document.getElementById("player-song-name").innerHTML;
	var songIndex = tracklist.indexOf(song);
	if(songIndex == (tracklist.length-1)) {
		var newSong = tracklist[0];
	}
	else {
		var newSong = tracklist[songIndex+1];
	}
	document.getElementById("player-song-name").innerHTML = newSong;
	
	
	// Your code goes here
}

function prevSong() {
	document.getElementById("playback").value = "0";
	document.getElementById("left-time").innerHTML = "0:00";
	document.getElementById("right-time").innerHTML = "3:00";
	var song = document.getElementById("player-song-name").innerHTML;
	var songIndex = tracklist.indexOf(song);
	if(songIndex == 0) {
		var newSong = tracklist[tracklist.length-1];
	}
	else {
		var newSong = tracklist[songIndex-1];
	}
	document.getElementById("player-song-name").innerHTML = newSong;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();