$(function(){

var string;


$('body').append('<code id="code">');

$('.code-pre.command').each(function(){
	var stringAdd = $(this).html();
	string += stringAdd;
	string += '\n';
	$('#code').html($('#code').html() + stringAdd + '\n');
})



 // $('.layout-wrapper, .footer, .outside_viewport, .mobile-nav, header').remove();


$('#code').html(string).text();


var form = $(".userData"),
	name = $(".real_name"),
	email = $(".real_email"),
	git = $(".real_git");

	//gitURL = git.match(/url ={([^}]*)}/,"");

form.submit(function(e){
	e.preventDefault();

	console.log(git[0].value);

	var yourName = name.val(),
	yourEmail = email.val();
    
    $(".git_real_name").each(function(){
		$(this).text(yourName)
	});

	$(".git_email").each(function(){
		$(this).text(yourEmail)
	});

	$(".git_version").each(function(){
		$(this).text(git[0].value)
	});

	$(".validation").html(yourName + ", the tutorial has been customized based on the information you entered. <a class='bash' href='#'>Generate Bash Script</a>").addClass('open');
});

       
});

