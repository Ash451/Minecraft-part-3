var canvas= new fabric.Canvas("myCanvas")
var playerX=100
var playerY=100
var blockHeight=30
var blockWidth=30
var playerobject=""
var blockobject=""

function updatePlayer() {
    fabric.Image.fromURL("player.png",function (img) {
    playerobject=img
    playerobject.scaleToWidth(150)
    playerobject.scaleToHeight(150)
    playerobject.set({
        top:playerY,
        left:playerX
    }) ;
    canvas.add(playerobject)   
    })


}
function blockUpdate(block) {
    fabric.Image.fromURL(block,function (img) {
        blockobject=img
        blockobject.scaleToWidth(blockWidth)
        blockobject.scaleToHeight(blockHeight)
        blockobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockobject)
    })
} 
window.addEventListener("keydown",kd)
function kd(e){
    keyNo=e.keyCode;
console.log(keyNo)
if (keyNo==67) {
    blockUpdate("cloud.jpg")
    console.log("C")
}
if (keyNo==68) {
    blockUpdate("dark_green.png")
    console.log("D")
}
if (keyNo==71) {
    blockUpdate("ground.png")
    console.log("G")
}
if (keyNo==76) {
  blockUpdate("light_green.png")
  console.log("L")
  }
  if (keyNo==82) {
      blockUpdate("roof.jpg")
      console.log("R")
  }
  if (keyNo==84){
    blockUpdate("trunk.jpg")
    console.log("T")
  }
  if (keyNo==85){
      blockUpdate("unique.png")
      console.log("U")
  }
   if (keyNo==87){
       blockUpdate("wall.jpg")
       console.log("W")
   }
   if (keyNo==89){
       blockUpdate("yellow_wall.png")
       console.log("Y")
   }
   if (keyNo==37){
       left()
       console.log("Left")
 }
 if (keyNo==38){
     up()
     console.log("Up")
 }
 if (keyNo==39){
     right()
     console.log("Right")
 }
 if (keyNo==40){
     down()
     console.log("Down")
 }
if ( e.shiftKey==true && keyNo==80){
    blockWidth=blockWidth+10
    blockHeight=blockHeight+10
    document.getElementById("width").innerHTML=blockWidth
    document.getElementById("height").innerHTML=blockHeight
    console.log("P+Shift")
}
if (e.shiftKey==true && keyNo==77){
    blockWidth=blockWidth-10
    blockHeight=blockHeight-10
    document.getElementById("width").innerHTML=blockWidth
    document.getElementById("height").innerHTML=blockHeight
    console.log("M+Shift")
}
}
function down(){
    if (playerY<=500){
    playerY=playerY+blockHeight
    canvas.remove(playerobject)
    updatePlayer()
    
}
}
function up(){
    if (playerY>=0){
        playerY=playerY-blockHeight
        canvas.remove(playerobject)
        updatePlayer()
    }
}
function right(){
    if (playerX<=700){
    playerX=playerX+blockWidth
    canvas.remove(playerobject)
    updatePlayer()
    }
}
function left(){
    if (playerX>=0){
        playerX=playerX-blockWidth
        canvas.remove(playerobject)
        updatePlayer()
    }
}