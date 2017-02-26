$(document).ready(function(){
	
	function changeHover(el,le,hp){
		$(el).hover(
				function(){
					$(le).attr("src",hp);
	})};
	changeHover(".img1",".img","images/lego.jpg");
	changeHover(".img2",".img","images/godofwar.jpg");
	changeHover(".img3",".img", "images/gta.jpg");
	changeHover(".img4", ".img", "images/BioShock.jpg");
	changeHover(".img5", ".img", "images/haloandfriends.jpg");
	changeHover(".img6", ".img", "images/harleyquinn.jpg");
	changeHover(".img7", ".img", "images/legomovie.jpg");
	changeHover(".img8", ".img", "images/mario.jpg");
	changeHover(".img9", ".img", "images/marioandfriends.jpg");
	changeHover(".img10", ".img", "images/sonic.jpg");

});