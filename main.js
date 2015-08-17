var player = true;
var wins = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 4 ] ];

function setPlayer() {
	return ( player ) ? "X" : "O";	
}

function isWin () {
	var cnt = 0;
	for ( var i = 0; i < wins.length; i++ ) {
		cnt = 0;
		for ( var j = 0; j < wins[ i ].length; j++ ) {
			if ( boxArray[ wins[ i ][ j ] ].innerText === setPlayer() ) {
				console.log( setPlayer() );
				cnt++;
			}
		}
		if ( cnt >= 3 ) {
			return true;
		}
	}
	return false;
}

function isOpen( stuff ) {
	return !stuff;
}

function resetBoard() {
	for ( var i = 0; i < boxArray.length; i++ ) {
		boxArray[ i ].inerText = undefined;
	}
}

var boxArray = document.querySelectorAll( ".square" );

    for ( var i = 0 ; i < boxArray.length; i++ ) {
 	boxArray[ i ].addEventListener( "click",function() {


    	if ( isOpen( this.children[ 0 ].innerText ) ) {
			this.children[ 0 ].innerText = setPlayer();
			if ( isWin() ) {
				alert(setPlayer() + " is the winner!" );
				resetBoard();
			}
			player = !player;
		} 
		else { 
			alert("That space has been taken!");
		}
	}
)}


































