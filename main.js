function preload() {
	world_start = loadSound("world_start.wav");
	setSprites(); //used to load all imgs
	MarioAnimation(); //used to load all animations
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
    video = createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console"); //parent function is used to put webcam or any component inside an HTML div
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotposes);
}

function draw() {
	game() //its used to start the game_console
}

function gotposes(results) {
  if(results.length) {
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
  }
}

function modelLoaded() {
	console.log("model loaded");
}




