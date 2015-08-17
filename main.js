// document.querySelector("#topLeft").addEventListener( "click", function() {
// 	document.getElementById("#leftTop").innerHTML = "X";
// });

var player = true;

function setPlayer() {
	return ( player ) ? "X" : "O";	
}

function isWin () {

}

function isOpen( stuff ) {
	return !stuff;
}

var boxArray = document.querySelectorAll( "li" );

for ( var i = 0 ; i < boxArray.length; i++ ) {
	boxArray[ i ].addEventListener( "click",function() {
		document.getElementsByTagName( "h1" )[ i ].innerHTML = "X";
	} );
}



// if ( isOpen( this.children[ 0 ].innerText ) ) {
// 			 this.children[ 0 ].innerText = setPlayer();	 
// 			 player = !player;
// 		} else { 
// 			alert("That space has been taken!");
// 		}

// boxArray[ 0 ].addEventListener( "click", function() {
// 	if ( player % 2 ) {
// 		document.getElementById( "1" ).innerText = "X";
// 		player++;
// 	} else {
// 		document.getElementById( "1" ).innerText = "O";
// 		player++;
// 	}
// })




























