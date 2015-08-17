//Sets player as a bool to either be yes or no / X or O
var player = true;
//This is an array of all the possible win options to be checked by the isWin function
var wins = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ];

//boxArray is making an array of all class="square" elements
var boxArray = document.querySelectorAll( ".square" );

//Sets the player to X or O respectively based on if player is true or false.
function setPlayer() {
	return ( player ) ? "X" : "O";	
}

//Cycles through the array of box spaces to check if any player has won based on wins Array of possible wins. 
function isWin () {
	//var cnt is a counter to see if the player has 3 in a row.
	var cnt = 0;
	for ( var i = 0; i < wins.length; i++ ) {
		cnt = 0;
		for ( var j = 0; j < wins[ i ].length; j++ ) {
			//If box at position in wins array is equal to the current player add 1 to cnt.
			if ( boxArray[ wins[ i ][ j ] ].innerText === setPlayer() ) {
				console.log( setPlayer() );
				cnt++;
			}
		}
		//If cnt is 3 or more, a player has won so this fucntion should return true.
		if ( cnt >= 3 ) {
			return true;
		}
	}
	//If cnt is less than 3, then no winner found yet.
	return false;
}

//Is used to see if if box's innerText is empty or not.
function isOpen( text ) {
	return !text;
}

//Once game finishes, this will reset the board to empty.
function resetBoard() {
	for ( var i = 0; i < boxArray.length; i++ ) {
		boxArray[ i ].innerText = null;
	}
}

//Consantly checking each box listening for a "click"
function playGame() {
	for ( var i = 0 ; i < boxArray.length; i++ ) {
		boxArray[ i ].addEventListener( "click",function() {

		//Checks if box clicked is open 
		if ( isOpen( this.children[ 0 ].innerText ) ) {
			//If space is empty add player's charcter to the innerText
			this.children[ 0 ].innerText = setPlayer();
			//Checks to see if move is a winning move
			if ( isWin() ) {
				alert(setPlayer() + " is the winner!" );
				//Resets board to empty
				resetBoard();
				//Restarts game
				playGame();
			}
			//Toggles player to next player since moved has been acceptd
			player = !player;
		} 
		//Alert's players thatpace is already taken
		else { 
			alert("That space has been taken!");
		}
	}
	)}
}

playGame();



































