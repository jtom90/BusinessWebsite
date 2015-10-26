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
				alert("enter missing text feild")
			} else {
				alert("thank you")
			}
		})};
	subBttn(".submitbttn",".name",".favhero",".email",".phone",".comments");
	// subBttn(".submitbttn",".favhero");
	// subBttn(".submitbttn",".email");
	// subBttn(".submitbttn",".phone");
	// subBttn(".submitbttn",".comments");

});