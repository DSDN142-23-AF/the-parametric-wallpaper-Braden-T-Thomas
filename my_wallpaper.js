//your parameter variables go here!
//Use to change how open / closed the eye is. Changing the left eyelid will change the right to be equal
let left_eyelid = 85 // Default Val = 85
let right_eyelid = 200 - left_eyelid

let left_eye_top = 35 // Default val = 35
let right_eye_top = 200 - left_eye_top
let left_eye_bottom = 75 // Default val = 75
let right_eye_bottom = 200 - left_eye_bottom

let oval_eye = false //Default Val = false


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

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

  //Eye point guides
  /**
  strokeWeight(3);
  point(165, 35);
  point(125, 85);
  point(155, 67);
  point(135, 50);
  */

  if (!oval_eye){
    //Top eyelid
    normal_eye_draw();
    
  }
  else{
    let c = color('#f1d027');
    fill(c);
    ellipse(100, 100, 100, 150);
    strokeWeight(3);
    ellipse(100, 100, 50, 75);
    strokeWeight(7);
    ellipse(100, 100, 35, 55);
    strokeWeight(2);
    ellipse(100, 100, 15, 20);
    strokeWeight(3);
    line(100, 102, 100, 98);
  }

}

function normal_eye_draw(){
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
}