/*
Write the song 99 lines of code in a FUNCTION. 
The function will run 99 lines of codes when the function is called. 
(You should take into account that when you hit 1 line of code in the file 
	the word line is NOT plural). 
*/


/*
*** Example Output: 
99 lines of code in the file, 
99 lines of code; 
John strikes one out, clears it all out, 
98 lines of code in the file, etc…
*/


function lines_of_code_check(){
	for(i = 99; i >= 2; i--){
		document.write(i + " lines of code in the file, " + i + " lines of code; Gabe strikes one out, clears it all out... <br>");
	}

	document.write(i + " line of code in the file, " + i + " line of code; Gabe says, \"That's all folks!\" <br>")
}	


lines_of_code_check();




