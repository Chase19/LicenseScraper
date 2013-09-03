$(document).ready(function() {
	
	// ---------------------- load up the page ------------------------
	
	// get the query string parameters
	var parameters = $.parseQueryString();
	
	
	// get the license number (or set it to a default of "0I02102" if we don't have one)
	var licenseNumber = (parameters.license) ? parameters.license : "0I02102";
	
	
	// set up a function to call when the iframe's content is loaded
	$("iframe").load(scrapeHTML);
	
	
	// tell the iframe to load up the page with the license we want
	$("iframe").attr("src", "pull_url?license=" + licenseNumber);
	
	
	
	
	
	

	
	
	
	// ------------------------ html scraping ---------------------------
	
	function scrapeHTML() {
		
		var  name = "";
		var  license = "";
		var  status = "";
		var  address = "";
		// get a reference to the iframe's html contents
		page = $("iframe").contents();
		
		
		// find the content we want from the page....
		page.find("center table td").each(function(){

			var text = $(this).text();
			
			if(text != ""){
				if(text.search("Name:") != -1){
					name = text.replace("Name:", "").trim();
				}
				
				if(text.search("License#:") != -1){
					license = text.replace("License#:", "").trim();
				}
				
				if(text.search("Status:") != -1){
					status = text.replace("Status:", "").trim();
				}
				
				if(text.search("Business Address:") != -1){
					address = text.replace("Business Address:", "").trim();
				}
			}
		});
		console.log(name + "\n \n" + license + "\n \n" + status + "\n \n" + address);
		

		// page.find("tbody:first-child").addClass("name");
		
		// var name = page.find(".name:nth-child(2)");
		// console.log(name);
	}
});










