
// Bernice Johnson -->
// Project 3 GOLD APP -->
// MIU 12/10 -->
// write your javascript in here


var parseForm = function(data){
	console.log(data);

};

$(document).on('pageinit',function(){


		var myForm = $('#addmomentform');
		    myerrorslink= $('#myerrorslink')

		    myForm.validate({
		    
	    	invalidHandler: function(form, validator) {
	    		myerrorslink.click();
	    		var html ='';
	    		for (var key in validator.submitted){
	    		  var label  =	$('label[for^="'+ key +'"]').not('[generated]');
                  var legend=label.closest('fieldset').find('.ui-controlgroup-label');
	    		  var fieldName = legend.length ? legend.text() : label.text();
                  html +='<li>' + fieldName + '</li>';
               };   
               $("#momenterrors ul").html(html);
			},
			submitHandler: function() {
		       var data = myForm.serializeArray();
			    parseForm(data);
	   
	
		}
	});

});


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addamoment').on('pageinit', function(){
	   delete $.validator.methods.date;

		var myForm = $('#addmomentform');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	var id =Math.floor(Math.random()*1000000001);
	localStorage.setItem(id, JSON.stringify(data));

	localStorage.setItem(id, JSON.stringify(data));
	alert("Memory Saved!");
	
}; 

var	deleteItem = function (){
			
};

		
