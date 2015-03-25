$(document).ready(function () {
	$("form").submit(function(event) {
		event.preventDefault();
		console.log("form submitted!");
		var submission = $("#query").val();
		console.log(submission);
		getRequest(submission);
	  	
	})
	function showResults (searchTerm) {
	  		$("#search-results").empty();
	  		for (i = 0; i < searchTerm.length; i++) {
	    		console.log(searchTerm[i].Title);
	    		$("#search-results").append("<p>" + searchTerm[i].Title + "</p>")
	    	}
	  	}
  	function getRequest(searchTerm){
	  var params = {
	    s: searchTerm,
	    r: 'json'
	  };
	  url = 'http://www.omdbapi.com';
	 
	  $.getJSON(url, params, function (data) {
	    showResults(data.Search);
	  });
	}

	var params = {
	    part: "snippet",
	    key: "AIzaSyCCfB1OxM-Bn2n9mvo8Y3f0hELvJSUHmLI",
	    q: 'Chocolate Rain'
	  };
	  url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function (data) {
	    // showResults(data.Search);
	    console.log(data);
	    console.log(data.items[0].snippet.thumbnails.medium.url);
	  });
})
