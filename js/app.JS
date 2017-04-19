function generer(){
	$.get('http://192.168.1.177/user')
	.done(function(data){
		console.log(data);
		//envoie des donnée vers la page HTML
		$('#name').html(data.name);
		$('#LastName').html(data.lastName);
		$('#avat').html('<img src="'+data.avatar+'">');
		$('#company').html(data.job.company)
		$('#role').html(data.job.role)
	})
}
generer()		
$('button').click(function(){
	generer()
})
