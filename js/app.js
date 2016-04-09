$(document).ready(function(){
	//Add item to top of shopping list if field is not empty
	$(".add").click(function(){
		var $item = $("#newItem").val();
		if($item !== ""){
			$(".shopping-list").prepend(
				"<li class='item'>" +
				"<i class='fa fa-square-o fa-2x'></i>" +
				"<p class='shopping-item'>" + $item + "</p>" +
				"<input type='text' class='shopping-item' value='" + $item + "'></input>" +
				"<i class='fa fa-trash fa-2x trash'></i></li>"
			);
			$("#newItem").val("");
			$(".trash").click(removeItem);
		}
	});

	//Add click event handler to remove item
	$(".trash").click(function(){
		removeItem;
	});
});

// remove item from shopping list
function removeItem(){
	$(this).parent().remove();
}