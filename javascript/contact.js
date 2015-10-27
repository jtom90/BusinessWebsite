$(document).ready(function(){

	// $(".submitbttn").click(function(){
	// 	var name = $(".name").val();

	// 	if (name === "") {
	// 		alert("enter name")
	// 	} else {
	// 		alert("thank you")
	// 	};

	// });


	function subBttn(el,le,ll,li,lj,lo){
		$(el).click(function(){
			if ($(le).val(), $(ll).val(), $(li).val(), $(lj).val(), $(lo).val() === ""){
				return $(".missingtextfield").show();
			} else {
				return $(".thankstextfield").show();
			};
		})};
	subBttn(".submitbttn",".name",".favhero",".email",".phone",".comments");
	// subBttn(".submitbttn",".favhero");
	// subBttn(".submitbttn",".email");
	// subBttn(".submitbttn",".phone");
	// subBttn(".submitbttn",".comments");
	function closeX(el,le){
		$(el).click(function(){
			$(le).hide();
		})};
	closeX(".close",".missingtextfield");
	closeX(".close",".thankstextfield");
	// Hey whoever is checking this when the submit button//
	//is clicked one of those divs in the if statement//
	//is supposed to show up, but they don't stay on the//
	//page and i don't why i would like to know why//
	//on a good note the close x does work to hide the divs//


});