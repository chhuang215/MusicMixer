//playground.js
maxim = [];
player = [];
for(var i = 0 ; i < soundfiles.length; i++){
	maxim.push(new Maxim());
	player.push(maxim[i].loadFile(soundfiles[i].filename));
	player[i].setLooping(true);
	player[i].volume(0);

}

playSound = function(playerId, vol, spd){
	player[playerId].volume(vol);
	player[playerId].speed(spd);
}

playAll = function() {
	for(var i = 0; i < soundfiles.length; i++){
		player[i].play();
	};
}

stopAll = function(status) {
	for(var i = 0; i < soundfiles.length; i++){
		player[i].stop();
		if(status == 0) Session.set('sound'+i, 0);
	};
}

setSpeed = function(speed) {

	for(var i = 0; i < soundfiles.length; i++){
		player[i].speed(speed);
	};
}

getFlux = function(id){
	return player[id].getFlux();
}

getPowerSpectrum = function(id){
	return player[id].getAveragePower();
}
