//this changes if youre done or not
$("ul").on("click", "li", function(){
	//if li is gray then we'll turn it black
//  if ($(this).css("color") === "rgb(128, 128, 128)"){
//  	$(this).css({
// 		color: "black",
// 		textDecoration:"none"
// 	});
// }
// else{
// 	$(this).css({
// 		color: "gray",
// 		textDecoration:"line-through"
// 	});
// }

$(this).toggleClass("completed");

});

//click event that deletes the list item
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	//stops from bubbling up to other things
	event.stopPropagation();
});

//creating todos

$("input[type='text'").keypress(function(event){
	if(event.which === 13)

	{
		//grabs the text from input
		var todo = $(this).val();
		//clears the bar
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todo +"</li>");


	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadetoggle();
});