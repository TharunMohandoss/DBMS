$( document ).ready(function() {
	jsonText = '{"items":['+
		'{"Name":"Paneer Butter Masala","Cost":"30"},'+
		'{"Name":"Pizza","Cost":"300"},'+
		'{"Name":"Papdi chat","Cost":"40"},'+
		'{"Name":"Chicken Tikka","Cost":"70"}'+
		']}';
	json = JSON.parse(jsonText
	);
	for (i = 0; i < json.items.length; i++) {
    	$("#rows").append("<tr><td>"+json.items[i].Name+"<td>"+json.items[i].Cost+"<td><td>"+"<button class=\"waves-effect waves-light btn \">Delete</button>"+"<td><td></tr>");
	}
});