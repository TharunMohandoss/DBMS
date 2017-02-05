$( document ).ready(function() {
	jsonText =  '{"orders":['+
		'{"Address":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus metus, varius at posuere eu, posuere vitae augue. ","Cost":"30","items":['+
		'{"Name":"Paneer Butter Masala","Amount":"3"},'+
		'{"Name":"Pizza","Amount":"1"},'+
		'{"Name":"Papdi chat","Amount":"2"},'+
		'{"Name":"Chicken Tikka","Amount":"1"}'+
		']},'+
		'{"Address":"Vestibulum sagittis tincidunt magna, quis dignissim nibh vehicula et. Etiam cursus turpis a orci rutrum malesuada.","Cost":"300","items":['+
		'{"Name":"Paneer Butter Masala","Amount":"3"},'+
		'{"Name":"Pizza","Amount":"1"},'+
		'{"Name":"Papdi chat","Amount":"2"},'+
		'{"Name":"Chicken Tikka","Amount":"1"}'+
		']},'+
		'{"Address":"Aliquam fringilla lobortis posuere. Aliquam lobortis erat metus, id sodales sapien imperdiet et. Morbi aliquam rhoncus odio, nec volutpat arcu lobortis vulputate.","Cost":"40","items":['+
		'{"Name":"Paneer Butter Masala","Amount":"3"},'+
		'{"Name":"Pizza","Amount":"1"},'+
		'{"Name":"Papdi chat","Amount":"2"},'+
		'{"Name":"Chicken Tikka","Amount":"1"}'+
		']},'+
		'{"Address":"Ut scelerisque tellus in sollicitudin laoreet.","Cost":"70","items":['+
		'{"Name":"Paneer Butter Masala","Amount":"3"},'+
		'{"Name":"Pizza","Amount":"1"},'+
		'{"Name":"Papdi chat","Amount":"2"},'+
		'{"Name":"Chicken Tikka","Amount":"1"}'+
		']}'+
		']}';
	json = JSON.parse(jsonText);
	for (var i = 0; i < json.orders.length; i++) {
    	$("#rows").append("<tr><td onClick=\"openModal("+i+");\" class=\"clickable\">"+json.orders[i].Address+"<td>"+json.orders[i].Cost+"<td><td><button class = \"btn\">Accept</button></td><td><button class = \"btn\">Reject</button><td><td></tr>");
		text = "<div id=\"modal"+i+"\" class=\"modal\">"+"<div class=\"modal-content\">";
		text = text + "<table><thead><tr><td>Name</td><td>Quantity</td></tr></thead><tbody>"
		for (var j = 0; j<json.orders[i].items.length; j++) {
			text = text + "<tr><td>"+json.orders[i].items[j].Name+"</td><td>"+json.orders[i].items[j].Amount+"</td></tr>";
		}
		text = text + "</tbody></table>";
		text = text +"</div>"+"</div>";
		$("body").append(text);
	}
	$('.modal').modal();
	window.openModal = function(a)
	{
		$("#modal"+a).modal('open');
	}
});