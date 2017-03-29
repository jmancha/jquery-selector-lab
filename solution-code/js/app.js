console.log("yeah JS!");

$(document).ready(function(){

		alert("jQuery ready for action!");

		$('#addHome').removeClass ('btn-danger').addClass ('btn-success');
		
		$('h1').addClass('text-center');

		var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );
		$newLink.attr('target', "blank");
		$newLink.appendTo('body');
		console.log($("#zillowLink").attr("href"));
		
		$('#addHome').click(function(event){

		console.log(event);
		console.log(this);

		
)		//house goes here
$(document).ready(function(){

		alert("jQuery ready for action!");

		$('#addHome').removeClass ('btn-danger').addClass ('btn-success');
		
		$('h1').addClass('text-center');

		var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );
		$newLink.attr('target', "blank");
		$newLink.appendTo('body');
		console.log($("#zillowLink").attr("href"));
		
		$('#addHome').click(function(event){

		console.log(event);
		console.log(this);


function House(address, sf, bedroom, baths, price){
		this.address = address;
		this.sf = sf;
		this.bedrooms = bedrooms;
		this.baths = baths;
		this.price = price;

}

var sesame = new House("123 Sesame Street", "1,234", 3, 2, $280,000);
var sesame = new House("456 ")




}		