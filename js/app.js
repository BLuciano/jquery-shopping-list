$(document).ready(function(){
	//Add item to top of shopping list if field is not empty
	$(".add").click(function(){
		var $item = $("#newItem").val();
		if($item !== ""){
			$(".shopping-list").prepend(
				"<li class='item'>" +
				"<i class='fa fa-square-o fa-2x status'></i>" +
				"<p class='shopping-item'>" + $item + "</p>" +
				"<input type='text' class='shopping-item' value='" + $item + "'></input>" +
				"<i class='fa fa-trash fa-2x trash'></i></li>"
			);
			$("#newItem").val("");
		}
	});

	$("body").on('click', '.trash', removeItem);
	$("body").on('click', '.status', toggleChecked);
	$("body").on('click', '.item p', showEditable);
});

// remove item from shopping list
function removeItem(){
	$(this).parent().remove();
}

//Toggles checked off state on list items{
function toggleChecked(){
	if($(this).hasClass("fa-square-o")){
		$(this).removeClass("fa-square-o");
		$(this).addClass("fa-check-square");
		$(this).siblings('p').addClass("checked");
	} else{
		$(this).removeClass("fa-check-square");
		$(this).addClass("fa-square-o");
		$(this).siblings('p').removeClass("checked");
	}
}

//Allows for user to edit the shopping list items.
function showEditable(){
	if(!$(this).hasClass("checked")){
		$(this).hide();
		$(this).next().show().focus();
	}
}

