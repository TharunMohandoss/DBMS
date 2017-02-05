$( document ).ready(function() {
	jsonText = '{"items":['+
		'{"Name":"Paneer Butter Masala","Cost":"30"},'+
		'{"Name":"Pizza","Cost":"300"},'+
		'{"Name":"Papdi chat","Cost":"40"},'+
		'{"Name":"Chicken Tikka","Cost":"70"}'+
		']}';
	json = JSON.parse(jsonText
	);
	window.Calculate = function(){
		cost = 0;
		for (i = 0; i < json.items.length; i++) {
			cost += $("#item"+i).val()*Number(json.items[i].Cost);
		}
		$("#TotalCost").html("TotalCost : "+cost+"Rs");
	}
	for (i = 0; i < json.items.length; i++) {
    	$("#rows").append("<tr><td>"+json.items[i].Name+"<td>"+json.items[i].Cost+"<td><td>"+"<input onChange=\"Calculate();\" id=\"item"+i+"\" type=\"Number\" min = \"0\"></input>"+"<td><td></tr>");
	}
});