var current_screen = 3;
var input_char = '';
var button_valid = false;

function set_char (char)
{
	// Set character for input to text entry field
	input_char = char;
}

function delete_char ()
{
	// Delete char from text entry (not including cursor)
	var text = document.getElementById("touch").innerHTML;
	var word = text.replace('_','');
	var len = word.length;

	if (word.charAt(len-1) == ';') 
	{
		// Perform special delete of no-break space character (&nbsp; --> 6 char)
		document.getElementById("touch").innerHTML = word.substring(0, len-6) + '_';
	}
	else 
	{
		// Perform normal delete by one character
		document.getElementById("touch").innerHTML = word.substring(0, len-1) + '_';
	}
}

function add_char (char)
{
	// Add char to text entry field (and shift cursor)
	if (button_valid || char == ' ')
	{
		if (char == 'del')
		{
			// Delete char from text entry field if delete button press
			delete_char();
		}
		else
		{
			if (char == ' ' || char.charAt(0) == ' ')
			{
				// No-break space character
				char = '\xa0';
			}
			else
			{
				// Character for input at index 0
				char = char.charAt(0);
			}
			
			document.getElementById("touch").innerHTML += char;
			var text = document.getElementById("touch").innerHTML;
			document.getElementById("touch").innerHTML = text.replace('_','') + '_';
			input_char = '';
		}
	}
}

function button_color (char)
{
	// Trigger button selection color change if valid button press
	if (char != '')
	{
		document.getElementById(char).style.background='#87CEFA';
		setTimeout(function () { document.getElementById(char).style.background='white'; }, 100);
	}
}

function change_color (old_z, new_z)
{
	// Highlight current keyboard zone
	switch(old_z)
	{
		case 1:
			for (var i = 1; i <= 6; i++)
				document.getElementById("c_" + i.toString()).style.background = "white";
			document.getElementById("TRBL").style.background = "white";
			document.getElementById("TLBR").style.background = "white";
			document.getElementById("TRBL").parentElement.style.background = "white";
			document.getElementById("TLBR").parentElement.style.background = "white";
			break;
		case 2:
		for (var i = 4; i <= 9; i++)
				document.getElementById("c_" + i.toString()).style.background = "white";
			document.getElementById("BRTL").style.background = "white";
			document.getElementById("BLTR").style.background = "white";
			document.getElementById("BRTL").parentElement.style.background = "white";
			document.getElementById("BLTR").parentElement.style.background = "white";
			break;
		case 3:
			for (var i = 10; i <= 15; i++)
				document.getElementById("c_" + i.toString()).style.background = "white";
			document.getElementById("TRBL").style.background = "white";
			document.getElementById("TLBR").style.background = "white";
			document.getElementById("TRBL").parentElement.style.background = "white";
			document.getElementById("TLBR").parentElement.style.background = "white";
				break;
		case 4:
			for (var i = 13; i <= 18; i++)
				document.getElementById("c_" + i.toString()).style.background = "white";
			document.getElementById("BRTL").style.background = "white";
			document.getElementById("BLTR").style.background = "white";
			document.getElementById("BRTL").parentElement.style.background = "white";
			document.getElementById("BLTR").parentElement.style.background = "white";
			break;
		case 5:
			for (var i = 19; i <= 24; i++)
				document.getElementById("c_" + i.toString()).style.background = "white";
			document.getElementById("TRBL").style.background = "white";
			document.getElementById("TLBR").style.background = "white";
			document.getElementById("TRBL").parentElement.style.background = "white";
			document.getElementById("TLBR").parentElement.style.background = "white";
			break;
		case 6:
			for (var i = 22; i <= 27; i++)
				document.getElementById("c_" + i.toString()).style.background = "white";
			document.getElementById("BRTL").style.background = "white";
			document.getElementById("BLTR").style.background = "white";
			document.getElementById("BRTL").parentElement.style.background = "white";
			document.getElementById("BLTR").parentElement.style.background = "white";
			break;
	}

	switch(new_z)
	{
		case 1:
			for (var i = 1; i <= 6; i++)
				document.getElementById("c_" + i.toString()).style.background = "#98FB98";
			document.getElementById("TRBL").style.background = "#98FB98";
			document.getElementById("TLBR").style.background = "#98FB98";
			document.getElementById("TRBL").parentElement.style.background = "#98FB98";
			document.getElementById("TLBR").parentElement.style.background = "#98FB98";
			break;
		case 2:
		for (var i = 4; i <= 9; i++)
				document.getElementById("c_" + i.toString()).style.background = "#98FB98";
			document.getElementById("BRTL").style.background = "#98FB98";
			document.getElementById("BLTR").style.background = "#98FB98";
			document.getElementById("BRTL").parentElement.style.background = "#98FB98";
			document.getElementById("BLTR").parentElement.style.background = "#98FB98";
			break;
		case 3:
			for (var i = 10; i <= 15; i++)
				document.getElementById("c_" + i.toString()).style.background = "#98FB98";
			document.getElementById("TRBL").style.background = "#98FB98";
			document.getElementById("TLBR").style.background = "#98FB98";
			document.getElementById("TRBL").parentElement.style.background = "#98FB98";
			document.getElementById("TLBR").parentElement.style.background = "#98FB98";
			break;
		case 4:
			for (var i = 13; i <= 18; i++)
				document.getElementById("c_" + i.toString()).style.background = "#98FB98";
			document.getElementById("BRTL").style.background = "#98FB98";
			document.getElementById("BLTR").style.background = "#98FB98";
			document.getElementById("BRTL").parentElement.style.background = "#98FB98";
			document.getElementById("BLTR").parentElement.style.background = "#98FB98";
			break;
		case 5:
			for (var i = 19; i <= 24; i++)
				document.getElementById("c_" + i.toString()).style.background = "#98FB98";
			document.getElementById("TRBL").style.background = "#98FB98";
			document.getElementById("TLBR").style.background = "#98FB98";
			document.getElementById("TRBL").parentElement.style.background = "#98FB98";
			document.getElementById("TLBR").parentElement.style.background = "#98FB98";
			break;
		case 6:
			for (var i = 22; i <= 27; i++)
				document.getElementById("c_" + i.toString()).style.background = "#98FB98";
			document.getElementById("BRTL").style.background = "#98FB98";
			document.getElementById("BLTR").style.background = "#98FB98";
			document.getElementById("BRTL").parentElement.style.background = "#98FB98";
			document.getElementById("BLTR").parentElement.style.background = "#98FB98";
			break;
	}
}

function change_screen (dir, current)
{
	// Swipe between keyboard zones
	var new_screen = Number(current);
	switch(dir)
	{
		case "up": 
		case "down":
			new_screen = new_screen + -1 + 2*(new_screen%2);
			break;
		case "right":
			new_screen = (new_screen + 2)%6;
			if (new_screen == 0)
				new_screen = 6;
			break;
		case "left":
			new_screen = (new_screen + 4)%6;
			if (new_screen == 0)
				new_screen = 6;
			break;
		case "BR->TL":
			if (new_screen % 2 == 0)
				new_screen = (new_screen + 3)%6;
			if (new_screen == 0)
				new_screen = 6;
			break;
		case "BL->TR":
			if (new_screen % 2 == 0)
				new_screen = (new_screen + 1)%6;
			if (new_screen == 0)
				new_screen = 6;
			break;
		case "TR->BL":
			if (new_screen % 2 == 1)
				new_screen = (new_screen + 5)%6;
			if (new_screen == 0)
				new_screen = 6;
			break;
		case "TL->BR":
			if (new_screen % 2 == 1)
				new_screen = (new_screen + 3)%6;
			if (new_screen == 0)
				new_screen = 6;
			break;
	}
	change_color(current_screen,new_screen);
	current_screen = new_screen;
	document.getElementById("z_" + current.toString()).style.display = "none";
	document.getElementById("z_" + new_screen.toString()).style.display = "grid";
}

function detect_swipe ()
{
	document.addEventListener('touchstart', touch, false);
	document.addEventListener('touchmove', touch, false);
	document.addEventListener('touchend', touch, false);

	var init_x, init_y, curr_x, curr_y, fin_x, fin_y;
	var init_x2, init_y2, curr_x2, curr_y2, fin_x2, fin_y2;
	var del_x, del_y;
	var del_x2, del_y2;
	var valid = true;
	var twoTouch = false;

	function compute_dir (valid, init_x, init_y, fin_x, fin_y)
	{
		var local = document.getElementById("touch");

		// Determine single finger swipe direction, if within 2x2 area
		if (valid)
		{
			var thresh_up = 30;
			var thres_down = 15;

			// Compute delta b/w init and final coordinates
			del_x = fin_x - init_x;
			del_y = fin_y - init_y;

			if (del_x >= thresh_up && Math.abs(del_y) <= thres_down)
			{
				// Right swipe
				change_screen("right",current_screen);
			}
			else if (del_x <= -thresh_up && Math.abs(del_y) <= thres_down)
			{
				// Left swipe
				change_screen("left",current_screen);
			}
			else if (Math.abs(del_x) <= thres_down && del_y <= -thresh_up)
			{
				// Up swipe
				change_screen("up",current_screen);
			}
			else if (Math.abs(del_x) <= thres_down && del_y >= thresh_up)
			{
				// Down swipe
				change_screen("down",current_screen);
			}
			else if (del_x >= thresh_up && del_y <= -thresh_up)
			{
				// Diagonal swipe (LB -> RT)
				change_screen("BL->TR",current_screen);
			}
			else if (del_x <= -thresh_up && del_y <= -thresh_up)
			{
				// Diagonal swipe (RB -> LT)
				change_screen("BR->TL",current_screen);
			}
			else if (del_x >= thresh_up && del_y >= thresh_up)
			{
				// Diagonal swipe (LT -> RB)
				change_screen("TL->BR",current_screen);
			}
			else if (del_x <= -thresh_up && del_y >= thresh_up)
			{
				// Diagonal swipe (RT -> LB)
				change_screen("TR->BL",current_screen);
			}
		}
		else
		{
			// Reset valid toggle if false
			valid = true;
		}
	}

	function compute_2dir (valid, init_x, init_y, fin_x, fin_y, init_x2, init_y2, fin_x2, fin_y2)
	{
		// Determine two finger swipe direction, if within 2x2 area
		if (valid)
		{
			var thresh_up = 15;
			var thres_down = 10;

			// Compute delta b/w init and final coordinates
			del_x = fin_x - init_x;
			del_y = fin_y - init_y;
			del_x2 = fin_x2 - init_x2;
			del_y2 = fin_y2 - init_y2;

			if (del_x >= thresh_up && Math.abs(del_y) <= thres_down && del_x2 >= thresh_up && Math.abs(del_y2) <= thres_down)
			{
				// Right swipe w/ 2 finger
				add_char(' ');
			}
			else if (del_x <= -thresh_up && Math.abs(del_y) <= thres_down && del_x2 <= -thresh_up && Math.abs(del_y2) <= thres_down)
			{
				// Left swipe w/ 2 finger
				delete_char();
			}
			else if (Math.abs(del_x) <= thres_down && del_y <= -thresh_up && Math.abs(del_x2) <= thres_down && del_y2 <= -thresh_up)
			{
				// Up swipe w/ 2 finger
			}
			else if (Math.abs(del_x) <= thres_down && del_y >= thresh_up && Math.abs(del_x2) <= thres_down && del_y2 >= thresh_up)
			{
				// Down swipe w/ 2 finger
				// Clear all char from text entry (not including cursor)
				document.getElementById("touch").innerHTML = '_';
			}
		}
		else
		{
			// Reset valid toggle if false
			valid = true;
		}
	}

	function touch (event)
	{
		var event = event || window.event;
		var left_sq = 135, right_sq = 275, top_sq = 510, bottom_sq = 650;

		switch(event.type)
		{
			case "touchstart":
				button_valid = false;

				if(event.touches.length > 1)
				{
					// Two finger swipe
					twoTouch = true;
					init_x = event.touches[0].clientX;
					init_y = event.touches[0].clientY;
					init_x2 = event.touches[1].clientX;
					init_y2 = event.touches[1].clientY;
					if ((init_x < left_sq || init_x > right_sq) || (init_y < top_sq || init_y > bottom_sq) || 
						(init_x2 < left_sq || init_x2 > right_sq) || (init_y2 < top_sq || init_y2 > bottom_sq))
					{
						// Touch invalid if outside 2x2 area
						valid = false;
					}
					else
					{
						// Otherwise, touch valid
						valid = true;
					}
				}
				else
				{
					// Single finger swipe
					twoTouch = false;
					init_x = event.touches[0].clientX;
					init_y = event.touches[0].clientY;
					if ((init_x < left_sq || init_x > right_sq) || (init_y < top_sq || init_y > bottom_sq))
					{
						// Touch invalid if outside 2x2 area
						valid = false;
					}
					else
					{
						// Otherwise, touch valid
						valid = true;
					}
				}
				break;
			case "touchmove":
				// event.preventDefault(); // Uncomment to prevent scrolling

				if(twoTouch)
				{
					// Two finger swipe
					curr_x = event.touches[0].clientX;
					curr_y = event.touches[0].clientY;
					curr_x2 = event.touches[1].clientX;
					curr_y2 = event.touches[1].clientY;
					if ((curr_x < left_sq || curr_x > right_sq) || (curr_y < top_sq || curr_y > bottom_sq) || 
						(curr_x2 < left_sq || curr_x2 > right_sq) || (curr_y2 < top_sq || curr_y2 > bottom_sq))
					{
						// Touch invalid if outside 2x2 area
						valid = false;
					}
					else
					{
						// Otherwise, touch valid
						valid = true;
					}
				}
				else
				{
					// Single finger swipe
					curr_x = event.touches[0].clientX;
					curr_y = event.touches[0].clientY;
					if ((curr_x < left_sq || curr_x > right_sq) || (curr_y < top_sq || curr_y > bottom_sq))
					{
						// Touch invalid if outside 2x2 area
						valid = false;
					}
					else
					{
						// Otherwise, touch valid
						valid = true;
					}
				}
				break;
			case "touchend":
				if(twoTouch)
				{
					// Two finger swipe
					fin_x = event.changedTouches[0].clientX;
					fin_y = event.changedTouches[0].clientY;
					if ((fin_x < left_sq || fin_x > right_sq) || (fin_y < top_sq || fin_y > bottom_sq) || 
						(curr_x2 < left_sq || curr_x2 > right_sq) || (curr_y2 < top_sq || curr_y2 > bottom_sq))
					{
						// Touch invalid if outside 2x2 area
						valid = false;
					}
					else
					{
						// Otherwise, touch valid
						valid = true;
					}

					// Compute direction of two finger swipe, if valid
					compute_2dir(valid, init_x, init_y, fin_x, fin_y, init_x2, init_y2, curr_x2, curr_y2);
				}
				else
				{
					// Single finger swipe
					fin_x = event.changedTouches[0].clientX;
					fin_y = event.changedTouches[0].clientY;
					
					if ((fin_x < left_sq || fin_x > right_sq) || (fin_y < top_sq || fin_y > bottom_sq))
					{
						// Touch invalid if outside 2x2 area
						valid = false;
					}
					else
					{
						// Otherwise, touch valid
						valid = true;
						if ((Math.abs(fin_x - init_x) < 5) && (Math.abs(fin_y - init_y) < 5))
						{
							// Button press valid if not swipe event, add char to text entry field
							button_valid = true;
							button_color(input_char);
							add_char(input_char);
						}
						else
						{
							// Otherwise, button press invalid
							button_valid = false;
						}
					}

					// Compute direction of swipe, if valid
					compute_dir(valid, init_x, init_y, fin_x, fin_y);
				}
				break;
		}
	}
}

window.addEventListener('load',
						function () {
							detect_swipe();
							document.getElementById("z_3").style.display = "grid";
							document.getElementById("z_1").style.display = "none";
							document.getElementById("z_2").style.display = "none";
							document.getElementById("z_4").style.display = "none";
							document.getElementById("z_5").style.display = "none";
							document.getElementById("z_6").style.display = "none";

							for (var i = 10; i <= 15; i++)
								document.getElementById("c_" + i.toString()).style.background = "#98FB98";

							document.getElementById("up").style.background = "#98FB98";
							document.getElementById("down").style.background = "#98FB98";
							document.getElementById("left").style.background = "#98FB98";
							document.getElementById("right").style.background = "#98FB98";
							document.getElementById("up").parentElement.style.background = "#98FB98";
							document.getElementById("down").parentElement.style.background = "#98FB98";
							document.getElementById("left").parentElement.style.background = "#98FB98";
							document.getElementById("right").parentElement.style.background = "#98FB98";

							document.getElementById("TRBL").style.background = "#98FB98";
							document.getElementById("TLBR").style.background = "#98FB98";
							document.getElementById("TRBL").parentElement.style.background = "#98FB98";
							document.getElementById("TLBR").parentElement.style.background = "#98FB98";
						
						}, false)
