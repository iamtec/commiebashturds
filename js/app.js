$(function(){

// Sharon's test comment

var string;


$('body').append('<code id="code">');

$('code').each(function(){
	var stringAdd = $(this).html();
	string += stringAdd;
	string += '\n';
	$('#code').html($('#code').html() + stringAdd + '\n');
})



 $('.layout-wrapper, .footer, .outside_viewport, .mobile-nav, header').remove();


$('#code').html(string).text();

});