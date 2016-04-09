$(document).ready(function(){
	$("body").on('click', '.add', addItem);
	$("body").on('click', '.trash', removeItem);
	$("body").on('click', '.status', toggleChecked);
	$("body").on('click', '.item p', showEditable);
	$("body").on('focusout', '.item input', closeEditable);

	//Allows for enter key to be used whne adding new items
	$(document).keypress(function(e){
		if(e.which === 13){
			if($('.add').focus()){
				addItem();
			}
		}
	});
});

//Adds new item to the shopping list
function addItem(){
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
}

// remove item from shopping list
function removeItem(){
	$(this).parent().remove();
}

//Toggles checked off state on list items
function toggleChecked(){
	if($(this).hasClass("fa-square-o")){
		$(this).removeClass("fa-square-o");
		$(this).addClass("fa-check-square");
		$(this).siblings('p').addClass("checked");
		//Move item to bottom of the list
		$(".shopping-list").append($(this).parent());
	} else{
		$(this).removeClass("fa-check-square");
		$(this).addClass("fa-square-o");
		$(this).siblings('p').removeClass("checked");
		//Move item to top of list
		$(".shopping-list").prepend($(this).parent());
	}
}

//Allows for user to edit the shopping list items 
//if they are not checked off
function showEditable(){
	if(!$(this).hasClass("checked")){
		$(this).hide();
		$(this).next().show().focus();
	}
}

//Closes editable form on shopping list items and updates shopping list
function closeEditable(){
	var newItem = $(this).val();
	$(this).hide();
	$(this).prev().text(newItem).show();
}