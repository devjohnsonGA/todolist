//check off todo by clicking
$("ul").on("click", "li", (function(){
	$(this).toggleClass("completed")
	// //if li gray turn black
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// //turn it black
	// $(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// 	});
	// }
	// //else
	// //turn it gray
	// else {
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// 	});
	// }
	}));

$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
}));

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});




