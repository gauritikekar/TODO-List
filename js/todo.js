// strike thru the todo items
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete the item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	event.stopPropagation();
})

// add new TODO item
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newItem = $(this).val();

		$("ul").append("<li><span>X</span> "+ newItem + "</li>");
	}
});