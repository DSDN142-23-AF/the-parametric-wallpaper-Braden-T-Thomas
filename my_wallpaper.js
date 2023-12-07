//your parameter variables go here!
//Use to change how open / closed the eye is. Changing the left eyelid will change the right to be equal
let left_eyelid = 85; // Default Val = 85
let right_eyelid = 200 - left_eyelid;

let left_eye_top = 35; // Default val = 35
let right_eye_top = 200 - left_eye_top;
let left_eye_bottom = 75; // Default val = 75
let right_eye_bottom = 200 - left_eye_bottom;

let oval_eye = true; //Default Val = false

// On second note just ignore this. It no longer works with the addition of the multiple eyes.
let oval_eye_iris_y_shift = 0; // Default value = 0 (+ for down | - for up) 20 & -20 Max val

let normal_eye_iris_colour = color('#fd0302');

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 250;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background(30);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  let text_type = 1 // 0 for none, 1 for bird, 2 for bud.
  let text_sprawl_count = 5 // Default value = 5. Controls how many lines are on the screen.
  let all_lines = true; // Default value = false
  let light_shine_size = 50

  deranged_text(text_type, text_sprawl_count, all_lines, oval_eye);

  translate(25, 25) // Deciding the canvas size was too small I made it 250 from 200
  // this required me to change all the values for positioning. Instead of going through
  // each and every one I just decided to use translate.

  if (!oval_eye){
    cocoon_draw();
    normal_eye_draw();
  }
  else{
    lantern_draw(light_shine_size);
    oval_eye_draw(0, 0, -0);
    oval_eye_draw(50, 45, -30);
    oval_eye_draw(54, -16, -15);
    oval_eye_draw(80, 23, -32);
    oval_eye_draw(-80, 10, -35);
    oval_eye_draw(-55, 40, -27);
    oval_eye_draw(-50, -18, -20);
  }


  translate(-25, -25); // To get it back to it's original position
  let trumpet_warning = 0; // Takes values between 0 and 3
  wraning_draw(trumpet_warning);
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

function oval_eye_draw(eye_x_offset, eye_y_offset, eye_width_offset){
  let centre_point = 100 + eye_x_offset;
  let middle_eye_y = 50 + eye_y_offset;
  let middle_eye_width = 60 + eye_width_offset;
  let middle_eye_height = middle_eye_width * 1.5;

  let First_ring_width = middle_eye_width * 0.5;
  let First_ring_height = middle_eye_height * 0.5;
  let First_ring_position_y = middle_eye_y + oval_eye_iris_y_shift;

  let Second_ring_width = First_ring_width - 15;
  let Second_ring_height = First_ring_height - 25;
  let Second_ring_posiiton_y = First_ring_position_y + oval_eye_iris_y_shift * 0.45;

  let Third_ring_width = Second_ring_width - 20;
  let Third_ring_height = Second_ring_height - 30;
  let Third_ring_position_y = Second_ring_posiiton_y + oval_eye_iris_y_shift * 0.1;

  const oval_eye_colour = color("#f1d027");
  fill(oval_eye_colour);
  stroke("#000000")
  strokeWeight(0);
  ellipse(centre_point, middle_eye_y, middle_eye_width, middle_eye_height); 
  strokeWeight(2);
  ellipse(centre_point, First_ring_position_y, First_ring_width, First_ring_height);
  strokeWeight(4);
  ellipse(centre_point, Second_ring_posiiton_y, Second_ring_width, Second_ring_height);
  strokeWeight(1);
  ellipse(centre_point, Third_ring_position_y, Third_ring_width, Third_ring_height);
  strokeWeight(1);
  line(centre_point, Third_ring_position_y + 2, centre_point, Third_ring_position_y - 2);
}

function lantern_draw(light_shine_size){
  ellipseMode(CENTER);
  noStroke();
  
  fill(191, 170, 59, 150);
  ellipse(100, 143, light_shine_size*1.5, light_shine_size*1.5);

  fill(179, 171, 127, 150);
  ellipse(100, 143, light_shine_size, light_shine_size);

  // Outer flame
  fill("#f1d027");
  stroke("#f1d027");
  beginShape();
  curveVertex(100, 130); // Beginning
  curveVertex(100, 130); // Beginning
  curveVertex(95, 150); // curve point 1
  curveVertex(100, 156); //Mid Point
  curveVertex(105, 150); // curve point 2
  curveVertex(100, 130); // End
  curveVertex(100, 130); // End
  endShape();

  // Inner flame
  fill("#eb8c23");
  stroke("#eb8c23");
  beginShape();
  curveVertex(100, 137); // Beginning
  curveVertex(100, 137); // Beginning
  curveVertex(97, 150); // curve point 1
  curveVertex(100, 155); //Mid Point
  curveVertex(103, 150); // curve point 2
  curveVertex(100, 137); // End
  curveVertex(100, 137); // End
  endShape();

  fill("#000000");
  stroke("#000000");
  rect(80, 165, 40, 2);

  // Lantern outline
  noFill();
  strokeWeight(2);
  beginShape();
  curveVertex(81, 166); // Beginning
  curveVertex(81, 166); // Beginning
  curveVertex(83, 135); // curve point 1
  curveVertex(100, 115); //Mid Point
  curveVertex(117, 135); // curve point 2
  curveVertex(119, 166); // End
  curveVertex(119, 166); // End
  endShape();

  beginShape();
  curveVertex(90, 166); // Beginning
  curveVertex(90, 166); // Beginning
  curveVertex(91, 135); // curve point 1
  curveVertex(100, 115); //Mid Point
  curveVertex(109, 135); // curve point 2
  curveVertex(110, 166); // End
  curveVertex(110, 166); // End
  endShape();
}

function cocoon_draw(){
  fill("#8c8893");
  stroke("#8c8893");
  
  beginShape();
  curveVertex(100, 166); // Beginning
  curveVertex(100, 166); // Beginning
  curveVertex(91, 160); // curve point 1
  curveVertex(97, 115); // Midpoint 1
  curveVertex(103, 115); //Mid Point 2
  curveVertex(109, 160); // curve point 2
  curveVertex(100, 166); // End
  curveVertex(100, 166); // End
  endShape();

  ellipse(100, 172, 12, 16);

  stroke("#48474e");
  line(94, 132, 108, 143);
  line(104, 123, 97, 124);
  line(109, 154, 92, 143);
  line(91, 163, 107, 139);
  line(94, 171, 108, 159);
  // Edge cover up outline
  noFill();
  stroke("#8c8893")
  beginShape();
  curveVertex(100, 166); // Beginning
  curveVertex(100, 166); // Beginning
  curveVertex(91, 160); // curve point 1
  curveVertex(97, 115); // Midpoint 1
  curveVertex(103, 115); //Mid Point 2
  curveVertex(109, 160); // curve point 2
  curveVertex(100, 166); // End
  curveVertex(100, 166); // End
  endShape();
  
  // Goes between head and body, with the outline it needs to be drawn over
  stroke("#48474e");
  line(94, 171, 108, 159);
}

function wraning_draw(trumpet_warning){
  angleMode(DEGREES);
  switch(trumpet_warning){
    case 1:
      stroke("#ffbd00");
      fill("#332600");
      strokeWeight(2);
      triangle(5, 5, 5, 65, 65, 5); // Top left
      triangle(5, 245, 5, 185, 65, 245); // Bottom left
      triangle(245, 245, 245, 185, 185, 245); // Bottom right
      triangle(245, 5, 245, 65, 185, 5); // Top right

      fill("#ffbd00");
      textSize(9);
      strokeWeight(0.3);
      rotate(-45);
      textAlign(CENTER, CENTER);
      text("FIRST TRUMPET", -10, 37, 22);
      break;
    case 2:
      stroke("#ff5100");
      fill("#331000");
      strokeWeight(2);
      triangle(5, 5, 5, 65, 65, 5); // Top left
      triangle(5, 245, 5, 185, 65, 245); // Bottom left
      triangle(245, 245, 245, 185, 185, 245); // Bottom right
      triangle(245, 5, 245, 65, 185, 5); // Top right

      fill("#ff5100");
      textSize(9);
      strokeWeight(0.3);
      rotate(-45);
      textAlign(CENTER, CENTER);
      text("SECOND TRUMPET", -10, 37, 22);
      break;
  
    case 3:
      stroke("#ff0000");
      fill("#330000");
      strokeWeight(2);
      triangle(5, 5, 5, 65, 65, 5); // Top left
      triangle(5, 245, 5, 185, 65, 245); // Bottom left
      triangle(245, 245, 245, 185, 185, 245); // Bottom right
      triangle(245, 5, 245, 65, 185, 5); // Top right

      fill("#ff0000");
      textSize(9);
      strokeWeight(0.3);
      rotate(-45);
      textAlign(CENTER, CENTER);
      text("THIRD TRUMPET", -10, 37, 22);
      break;

    default:
      break;
  }
}

function deranged_text(text_type, text_sprawl_count, all_lines, oval_eye){
  switch(text_type){
    case 1:
      var bird_lines = ["No one has to worry. You'll be safe as long as I'm here.", 
      "Let's brighten the road ahead, so I can have a good view of the lives I must save.",
      "If I kill them first… then no one would be killed by the beast!",
      "I should do something for the safety of creatures in the forest.",
      "I'll be sad if you got hurt. I'll protect you."];
      textSize(6);
      textAlign(CENTER, CENTER);
      let bird_text_colour = color(241, 208, 39, 160);
      fill(bird_text_colour);
      if(oval_eye){
        if (all_lines){
          for (let i = 0; i <= text_sprawl_count; i++){
            let random_line = Math.floor(Math.random() * 4);
            let random_offset = Math.floor(Math.random * 10)
            let random_x = Math.floor(Math.random() * 250);
            let random_y = Math.floor(Math.random() * 250);
            random_y + random_offset;
            text(bird_lines[random_line], random_x, random_y);
          }
        }
        else{
          let random_line = Math.floor(Math.random() * 4);
          for (let i = 0; i <= text_sprawl_count; i++){
            let random_offset = Math.floor(Math.random * 10)
            let random_x = Math.floor(Math.random() * 250);
            let random_y = Math.floor(Math.random() * 250);
            random_y + random_offset;
            text(bird_lines[random_line], random_x, random_y);
          }
        }
      }
      
      break;

    case 2:
      var bud_lines = ["For my children to be fed… You will become their prized meal.",
      "You lowly creature… You dare touch my children?!",
      "Growing children are always hungry.",
      "We never know when we'll find another prey… Let us preserve this one.",
      "Go ahead, show that worthless courage you had when you robbed me of my children!"];
      textSize(6);
      textAlign(CENTER, CENTER);
      let bud_text_colour = color(253, 3, 2, 160)
      fill(bud_text_colour);
      if(!oval_eye){
        if (all_lines){
          for (let i = 0; i <= text_sprawl_count; i++){
            let random_line = Math.floor(Math.random() * 4);
            let random_offset = Math.floor(Math.random * 10)
            let random_x = Math.floor(Math.random() * 250);
            let random_y = Math.floor(Math.random() * 250);
            random_y + random_offset;
            text(bud_lines[random_line], random_x, random_y);
          }
        }
        else{
          let random_line = Math.floor(Math.random() * 4);
          for (let i = 0; i <= text_sprawl_count; i++){
            let random_offset = Math.floor(Math.random * 10)
            let random_x = Math.floor(Math.random() * 250);
            let random_y = Math.floor(Math.random() * 250);
            random_y + random_offset;
            text(bud_lines[random_line], random_x, random_y);
          }
        }
      }
      break;

    default:
      break;
  }
}
