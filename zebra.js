function zebra(x,y,size) {
  push();
  
  //translate(x,y)
  //scale(size);
  translate(-125,-135);
  angleMode(DEGREES);
  noStroke();
  
  
  //White Base
/*  
  //front leg left
  push();
  rotate(78);
  rect(220,-120,50,10);
  pop();
  
  push();
  rotate(110);
  rect(165,-243,9,9);
  pop();
*/ 
  //yeah...I'm not dealing with rotation anymore. It is easier and faster to do two triangles than one rotated rectangle
  
  //head
  push()
  fill(0)
  ellipse(92,127,16,16);
  pop()
  ellipse(124,113,30,30);
  ellipse(120,110,31,27);
  triangle(106, 103, 96, 114, 120, 114);
  triangle(86, 120, 100, 112, 115, 122);
  triangle(100, 112, 119, 98, 116, 123); 
  triangle(95, 132, 119,125, 88, 119); 
  triangle(94, 116, 123,117, 101, 127);
  triangle(103, 126, 125,123, 114, 111); 
 
  //eye
  push()
  fill(0)
  ellipse(110,109,6,6);
  pop()
  triangle(105, 105, 113, 108, 119, 108);
  triangle(114, 107, 112, 112, 120, 110);
  
  //hair behind ear
  push()
  fill(0)
  triangle(108,89, 118,87, 114,97)
  triangle(126,98, 122,86, 129,90) 
  pop()
  
  //ear
  ellipse(120,95,11,20);

  //white mane
  triangle(129,90, 137,94, 124,102)
  triangle(126,99, 130,102, 135,94)
  triangle(142,101, 134,105, 141,117)
  triangle(142,101, 147,115, 141,117)
  triangle(151,121, 145,126, 150,134) 
  triangle(151,121, 156,131, 150,134)
  
  //black mane
  push()
  fill(0)
  triangle(136,93, 143,102, 130,99)
  triangle(130,99, 143,102, 134,105)
  triangle(148,115, 141,118, 146,126) 
  triangle(152,122, 141,118, 146,126)
  triangle(148,115, 151,120, 145,121)
  triangle(156,130, 149,134, 158,138)
  triangle(155,141, 149,134, 158,138)
  pop()
  
  //neck
  ellipse(130,134,25,40);
  triangle(138, 110, 146, 140, 131, 151);
  triangle(156, 145, 138, 152, 136, 114);
  triangle(129, 168, 113, 124, 151, 153);
  triangle(136, 109, 160, 147, 144, 157);
 
/*
  //Body
  ellipse(146,161,35,40);
  ellipse(171,165,80,40);
  ellipse(200,161,40,40);
  //Behind
  ellipse(210,165,45,45);
  
  //Body Filler    
  ellipse(167,240,10,10);
  ellipse(142,240,10,10);
  ellipse(212,180,30,30);
 
  //Legs
  triangle(139, 163, 169, 151, 162, 220);
  triangle(135, 156, 135, 177, 160, 174);
  triangle(135, 175, 138, 194, 160, 174);
  triangle(138, 192, 151, 183, 138, 241);
  triangle(137, 243, 147, 240, 154, 170);
  triangle(193, 170, 166, 145, 198, 141);
  triangle(168, 203, 159, 183, 167, 221);
  triangle(166, 202, 168, 179, 157, 181);
  triangle(216, 208, 200, 188, 230, 178);
  triangle(216, 206, 222, 193, 225, 202);
  triangle(223, 196, 230, 206, 224, 219);
  triangle(213, 204, 225, 198, 224, 219);
  triangle(222, 214, 228, 241, 231, 206);
  triangle(226, 238, 233, 241, 230, 212);
  triangle(226, 238, 233, 241, 230, 212);
  triangle(192, 179, 204, 202, 225, 170);
  triangle(223, 188, 208, 212, 197, 179);
  triangle(208, 208, 220, 201, 211, 228);
  triangle(209, 208, 203, 241, 212, 237);  
  triangle(205, 235, 213, 236, 210, 241);
  triangle(208, 239, 203, 235, 200, 247);

*/
  //Switching color to BLACK for hooves and stripes  
  push()
  fill(0)
/*  //Hoof
  triangle(219, 243, 218, 250, 233, 250);
  triangle(226, 237, 219, 244, 227, 247);
  triangle(225, 237, 231, 242, 232, 250);
  triangle(225, 238, 223, 248, 232, 250);
  triangle(229, 241, 222, 241, 227, 248);
  triangle(231, 249, 230, 241, 222, 242);
  
  //Hoof
  triangle(202, 238, 213, 239, 207, 247);
  triangle(202, 238, 213, 239, 207, 247);
  triangle(209, 243, 210, 250, 197, 249);
  triangle(202, 238, 197, 243, 207, 247);
  triangle(197, 243, 197, 249, 205, 245);
  
  //Hoof
  triangle(160, 242, 171, 242, 168, 247);
  triangle(160, 242, 160, 247, 167, 247);
  triangle(159, 242, 156, 247, 167, 247);
  triangle(161, 238, 170, 241, 164, 247);
  triangle(161, 238, 156, 246, 164, 247);
  
  //Hoof
  triangle(136, 236, 145, 243, 132, 247);  
  triangle(148, 247, 145, 243, 132, 247); 
  
  //Stripe
  triangle(197, 184, 199, 187, 210, 177);
  triangle(209, 176, 230, 177, 229, 182);
  triangle(210, 176, 211, 181, 228, 181);
  triangle(200, 187, 197, 185, 211, 177);
  triangle(211, 180, 210, 177, 199, 187);
  triangle(206, 183, 216, 180, 212, 177);

  //Stripe
  triangle(204, 193, 208, 198, 223, 187);
  
  //Stripe
  triangle(226, 202, 224, 198, 215, 205);
*/   
  //stripe
  triangle(130,99, 137,104, 122,115); 
  triangle(126,107, 115,127, 114,121);
  triangle(128,117, 115,130, 117,139);
  triangle(133,105, 118,128, 127,119);

  //stripe
  triangle(142,117, 131,123, 146,124);
  triangle(132,122, 126,136, 148,124);
  triangle(130,133, 119,142, 129,139);
  triangle(128,139, 155,139, 152,133);

  //more stripes
  triangle(145,107, 129,112, 146,111);
  triangle(122,150, 121,147, 146,145);
  triangle(155,143, 131,155, 160,145);
  triangle(110,99, 108,100, 112,103); 
  triangle(120,109, 128,98, 126,95);
  triangle(97,112, 100,108, 100,120);
/*  
  triangle(162,146, 142,164, 169,144);
  triangle(134,176, 141,178, 156,158);
  triangle(145,181, 150,187, 156,168);
  triangle(126,158, 129,167, 144,156);
  triangle(168,185, 174,186, 166,154);
  triangle(151,189, 160,178, 154,195);
  triangle(160,146, 161,169, 164,145);
  triangle(180,143, 175,179, 173,143);
  triangle(185,186, 180,187, 184,148);
  triangle(185,186, 180,187, 184,148);
  triangle(187,142, 194,142, 189,176);
  triangle(201,140, 209,141, 196,174);
  triangle(217,143, 199,178, 224,147);
  triangle(228,152, 209,173, 231,160);
  triangle(135,185, 137,192, 147,187);
  triangle(150,196, 138,197, 151,202);
  triangle(166,194, 167,180, 159,194);
  triangle(155,201, 157,207, 163,202);
  triangle(138,206, 147,207, 137,210);
  triangle(138,217, 137,225, 144,224);
  triangle(157,215, 160,222, 166,220);
  
  //tail
  triangle(229, 177, 229, 199, 238, 200);  
  triangle(239, 208, 229, 199, 238, 200); 
*/  
  pop()
 pop()
  //After about one triangle I got tired of trying to guess coordinates so I used this code to help.
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}
