$(function() {
	$.ajax({
    url: 'https://www.codeschool.com/users/jogkunal5.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var obj=response.courses.completed;
      console.log(obj);
      for (var key in obj) {
    		console.log(key + " -> " + obj[key].title);
    		$('#badges').append('<div class="course"><h3>'+obj[key].title+'</h3><img src="'+obj[key].badge+'"><a href="'+obj[key].url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
	  }
	}
  });
});
