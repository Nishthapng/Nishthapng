noseX=0;
 noseY = 0;
 leftwristX=0;
 rightwristX=0;
 difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
    console.log('posenet i intialized');
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
}
}
function draw(){
    background('#6C91C2');
    textsize(10);
    fill('#FFE787');
    text('best',50,400);

}