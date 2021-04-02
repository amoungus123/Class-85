canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

nasa_image_background_array = ["moving_rover_img_1.jpg", "moving_rover_img_2.jpg", "moving_rover_img_3.jpg", "moving_rover_img_4.jpg"];
var random_number = Math.floor(Math.random() * 4);
console.log(random_number);
background_image = nasa_image_background_array[random_number];
console.log("background_image" + background_image);
rover_image = "rover.png";
rover_height = 100;
rover_width = 100;
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up() {
    if(rover_y >=0)
    {
        rover_y -=10;
        console.log("When up arrow is pressed x = " + rover_x + " , y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if(rover_y <=500)
    {
        rover_y +=10;
        console.log("When down arrow is pressed x = " + rover_x + " , y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >= 0)
    {
        rover_x -=10;
        console.log("When left arrow is pressed x = " + rover_x + " , y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if(rover_x <= 700)
    {
        rover_x +=10;
        console.log("When right arrow is pressed x = " + rover_x + " , y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}