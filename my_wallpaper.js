//your parameter variables go here!
let top_eyelid = 75 //Default Val = 75
let bottom_eyelid = 125 //Default Val = 125


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

  /**Eye point guides
  strokeWeight(3);
  point(25, 100);
  point(100, 75);
  point(175, 100);
  */

  //Top eyelid
  noFill();
  strokeWeight(1.5);
  beginShape();
  curveVertex(25, 100);
  curveVertex(25, 100);
  curveVertex(100, top_eyelid);
  curveVertex(175, 100);
  curveVertex(175, 100);
  endShape();

  //Bottom eyelid
  beginShape();
  curveVertex(25, 100);
  curveVertex(25, 100);
  curveVertex(100, bottom_eyelid);
  curveVertex(175, 100);
  curveVertex(175, 100);
  endShape();
}