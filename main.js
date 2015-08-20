// var player = true;
// var wins = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 4 ] ];
// var boxArray = document.querySelectorAll( ".box" );


// function setPlayer() {
// 	return ( player ) ? "X" : "O";	
// }

// function isWin () {
// 	var cnt = 0;
// 	for ( var i = 0; i < wins.length; i++ ) {
// 		cnt = 0;
// 		for ( var j = 0; j < wins[ i ].length; j++ ) {
// 			if ( boxArray[ wins[ i ][ j ] ].innerText === setPlayer() ) {
// 				console.log( setPlayer() );
// 				cnt++;
// 			}
// 		}
// 		if ( cnt >= 3 ) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function isOpen( stuff ) {
// 	return !stuff;
// }

// function resetBoard() {
// 	for ( var i = 0; i < boxArray.length; i++ ) {
// 		boxArray[ i ].innerText = null;
// 	}
// }



// function playGame() {
//     for ( var i = 0 ; i < boxArray.length; i++ ) {
//  	boxArray[ i ].addEventListener( "click", ( function( i ) {

//  		console.log( boxArray[ i ]);
//     	if ( isOpen( boxArray[ i ].innerText ) ) {
// 			boxArray[ i ].innerText = setPlayer();
// 			if ( isWin() ) {
// 				alert(setPlayer() + " is the winner!" );
// 				resetBoard();
// 				playGame();
// 			}
// 			player = !player;
// 		} 
// 		else { 
// 			alert("That space has been taken!");
// 		}
// 	} ) ( i )
// 	)}
// }

// playGame();

var player = true;
var boxArray = $(".box");
var wins = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ];

function reset() {
	$.each( boxArray, function() {
		this.innerText="";
	})
}

function getPlayer() {
	return player ? "X" : "O";
}

$("li").click( function() {
	if ( this.children[ 0 ].innerHTML === "" ) {
		this.children[ 0 ].innerHTML = getPlayer();
		$.each( wins, function() {
            if ( boxArray[ this[ 0 ] ].innerText === getPlayer() && 
            	boxArray[ this[ 1 ] ].innerText === getPlayer() && 
            	boxArray[ this[ 2 ] ].innerText === getPlayer() ) {
                alert( boxArray[ this[ 0 ] ].innerText + " wins!" );
           		reset();
            }
        })	
		player = !player;
	} 
	else {
		alert( "Hey that's taken bro!" );
	}
 });

reset();

























