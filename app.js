var state = {
    items: ["apples", "oranges", "milk", "bread"],
    finishedState:["", ""," shopping-item__checked",""]
};

var addItem = function(state, item) {
    state.items.push(item);
};
var finishedState= "";


var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item, index) {
        return '<li><span class="shopping-item'+ state.finishedState[index] + '">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
    });
    element.html(itemsHTML);
};

renderList(state, $('.shopping-list')); //rendering the list before clickevent

$('.shopping-list-add').on("submit", function(event) {
    event.preventDefault();
    if($('.shopping-list-add-input').val()){
        addItem(state, $('.shopping-list-add-input').val());
        renderList(state, $('.shopping-list'));
        $('.shopping-list-add').children('input').val('')
}
    else alert("Please enter a value");
});


$(document).on("click", ".shopping-item-toggle", function (event){
var i = $(".shopping-item-toggle").index(this);  
if (state.finishedState[i]){
 state.finishedState[i] = "";
}
else{ state.finishedState[i] = " shopping-item__checked";
    }
       renderList(state, $('.shopping-list')) ;    
});

$(document).on("click", ".shopping-item-delete", function (event){
var i =$(".shopping-item-delete").index(this);
if(confirm("Are you sure you want to delete this?")){
state.finishedState.splice(i,1);
state.items.splice(i,1);
renderList(state, $('.shopping-list')) ;   
}




});