//your parameter variables go here!
//Use to change how open / closed the eye is. Changing the left eyelid will change the right to be equal
let left_eyelid = 85 // Default Val = 85
let right_eyelid = 200 - left_eyelid

let left_eye_top = 35 // Default val = 35
let right_eye_top = 200 - left_eye_top
let left_eye_bottom = 75 // Default val = 75
let right_eye_bottom = 200 - left_eye_bottom

let oval_eye = true //Default Val = false

let oval_eye_iris_y_shift = 0 // Default value = 0 (+ for down | - for up) 20 & -20 Max val

let normal_eye_iris_colour = color('#fd0302');

let trumpet_warning = 2 //Takes values between 0 and 3

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background(170);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(0.1);
  line(0, 100, 200, 100);
  line(100, 0, 100, 200);

  if (!oval_eye){
    normal_eye_draw();
  }
  else{
    lantern_draw();
    oval_eye_draw();
  }

  wraning_draw();

}

function normal_eye_draw(){
  let normal_eye_colour = color("#ffe7b6");
  fill(normal_eye_colour);
  stroke("#000000");
  // Main middle eye
  //Left eyelid
  strokeWeight(1.5);
  beginShape();
  curveVertex(100, 10);
  curveVertex(100, 10);
  curveVertex(left_eyelid, 55);
  curveVertex(100, 100);
  curveVertex(100, 100);
  endShape();
  

  //Right eyelid
  beginShape();
  curveVertex(100, 10);
  curveVertex(100, 10);
  curveVertex(right_eyelid, 55);
  curveVertex(100, 100);
  curveVertex(100, 100);
  endShape();


  // Flanking eyes
  // Right eye
  beginShape();
  curveVertex(right_eye_top, 35);
  curveVertex(right_eye_top, 35);
  curveVertex(135, 50);
  curveVertex(right_eye_bottom, 85);
  curveVertex(right_eye_bottom, 85);
  endShape();

  beginShape();
  curveVertex(right_eye_top, 35);
  curveVertex(right_eye_top, 35);
  curveVertex(155, 67);
  curveVertex(right_eye_bottom, 85);
  curveVertex(right_eye_bottom, 85);
  endShape();

  // Left eye
  beginShape();
  curveVertex(left_eye_top, 35);
  curveVertex(left_eye_top, 35);
  curveVertex(65, 50);
  curveVertex(left_eye_bottom, 85);
  curveVertex(left_eye_bottom, 85);
  endShape();

  beginShape();
  curveVertex(left_eye_top, 35);
  curveVertex(left_eye_top, 35);
  curveVertex(45, 67);
  curveVertex(left_eye_bottom, 85);
  curveVertex(left_eye_bottom, 85);
  endShape();

  let normal_eye_iris_colour = color('#fd0302');
  fill(normal_eye_iris_colour);
  ellipse(100, 80, 15, 20);
  circle(69, 77, 8);
  circle(131, 77, 8)
}

function oval_eye_draw(){
  let CENTRE_POINT = 100
  let MIDDLE_EYE_Y = 50
  let MIDDLE_EYE_WIDTH = 60
  let MIDDLE_EYE_HEIGHT = MIDDLE_EYE_WIDTH * 1.5

  let First_ring_width = MIDDLE_EYE_WIDTH * 0.5
  let First_ring_height = MIDDLE_EYE_HEIGHT * 0.5
  let First_ring_position_y = MIDDLE_EYE_Y + oval_eye_iris_y_shift

  let Second_ring_width = First_ring_width - 15
  let Second_ring_height = First_ring_height - 25
  let Second_ring_posiiton_y = First_ring_position_y + oval_eye_iris_y_shift * 0.45

  let Third_ring_width = Second_ring_width - 20
  let Third_ring_height = Second_ring_height - 30
  let Third_ring_position_y = Second_ring_posiiton_y + oval_eye_iris_y_shift * 0.1

  let oval_eye_colour = color("#f1d027");
  fill(oval_eye_colour);
  strokeWeight(0);
  ellipse(CENTRE_POINT, MIDDLE_EYE_Y, MIDDLE_EYE_WIDTH, MIDDLE_EYE_HEIGHT); 
  strokeWeight(2);
  ellipse(CENTRE_POINT, First_ring_position_y, First_ring_width, First_ring_height);
  strokeWeight(4);
  ellipse(CENTRE_POINT, Second_ring_posiiton_y, Second_ring_width, Second_ring_height);
  strokeWeight(1);
  ellipse(CENTRE_POINT, Third_ring_position_y, Third_ring_width, Third_ring_height);
  strokeWeight(1);
  line(CENTRE_POINT, Third_ring_position_y + 2, CENTRE_POINT, Third_ring_position_y - 2);
}

function lantern_draw(){
  fill("#000000");
  rect(80, 165, 40, 2);

  noFill();
  strokeWeight(2);
  beginShape();
  curveVertex(81, 166); // Beginning
  curveVertex(81, 166); // Beginning
  curveVertex(83, 135);
  curveVertex(100, 115); //Mid Point
  curveVertex(117, 135)
  curveVertex(119, 166); // End
  curveVertex(119, 166); // End
  endShape();

  beginShape();
  curveVertex(90, 166); // Beginning
  curveVertex(90, 166); // Beginning
  curveVertex(91, 135);
  curveVertex(100, 115); //Mid Point
  curveVertex(109, 135)
  curveVertex(110, 166); // End
  curveVertex(110, 166); // End
  endShape();
}

function wraning_draw(){
  angleMode(DEGREES);
  switch(trumpet_warning){
    case 1:
      stroke("#ffbd00");
      fill("#332600");
      strokeWeight(2);
      triangle(5, 5, 5, 45, 45, 5);
      triangle(5, 195, 5, 150, 45, 195);
      triangle(195, 195, 195, 150, 150, 195);
      triangle(195, 5, 195, 45, 150, 5)
      break;

    case 2:
      stroke("#ff5100");
      fill("#331000");
      strokeWeight(2);
      triangle(5, 5, 5, 45, 45, 5);
      triangle(5, 195, 5, 150, 45, 195);
      triangle(195, 195, 195, 150, 150, 195);
      triangle(195, 5, 195, 45, 150, 5)
      break;
  
    case 3:
      stroke("#ff0000");
      fill("#330000");
      strokeWeight(2);
      triangle(5, 5, 5, 45, 45, 5);
      triangle(5, 195, 5, 150, 45, 195);
      triangle(195, 195, 195, 150, 150, 195);
      triangle(195, 5, 195, 45, 150, 5)
      break;

    default:
      break;
  }
}