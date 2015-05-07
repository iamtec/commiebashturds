$(function(){

var string = "<li class='line' prefix='$'>#!/bin/bash</li>";


$('.code-pre.command ul').each(function(){
	var stringAdd = $(this).html();
	//console.log(string)
	string += stringAdd;
	string += '\n';
})


$('body').on('click', "#basher", function(){
	$('#modalBody').append('<pre class="code-pre command"><code langs="" id="codeStuff"><ul class="prefixed"></ul></code></pre>');
	$('#codeStuff ul').html(string);

    $(".hexxit_url").each(function(){
		$(this).text(hexxitURL[0].value);
	});

    $(".screen_name").each(function(){
    	$(this).text(screenName[0].value);
	});

	$(".max_ram").each(function(){
		$(this).text(maxRam[0].value);
	});

	$(".min_ram").each(function(){
		$(this).text(minRam[0].value);
	});

	var strung = '';
	$('#codeStuff .line').each(function(){
		var strungAdd = $(this).text();
		//console.log(string)
		strung += strungAdd;
		strung += '\n';
		console.log(strung);
		$('#copy-button').attr('data-clipboard-text',strung)
	})


})
//data-clipboard-text

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );

// EARL ABOVE

var form = $(".userData"),
	hexxitURL = $(".hexxit_url_form"),
	screenName = $(".screen_name_form"),
	maxRam = $(".max_ram_form"),
	minRam = $(".min_ram_form");


	//gitURL = git.match(/url ={([^}]*)}/,"");

form.submit(function(e){
	e.preventDefault();
    
    $(".hexxit_url").each(function(){
		$(this).text(hexxitURL[0].value);
	});

    $(".screen_name").each(function(){
    	$(this).text(screenName[0].value);
	});

	$(".max_ram").each(function(){
		$(this).text(maxRam[0].value);
	});

	$(".min_ram").each(function(){
		$(this).text(minRam[0].value);
	});

	$(".validation").html('The tutorial has been customized based on the information you entered. <a class="bash" href="#" data-toggle="modal" data-target="#myModal" id="basher">Generate Bash Script</a>').addClass('open');
});


var arr = { name: 'test-bullshit-4', region: 'nyc3', size: '4gb', image: 'ubuntu-14-04-x64', ssh_keys: null, backups: false, ipv6: false, private_networking: false };


$('#triggerIt').on('click', function(){
	addData(arr);
});

function addData(data){
 $.ajax({
     type: "POST",
     url: "https://api.digitalocean.com/v2/droplets",
     data: JSON.stringify(data),
     contentType: "application/json; charset=utf-8",
     crossDomain: true,
     dataType: "json",
     beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer 91d942cb04a23c5bbce505c89fab03a82fed6854bd6e00ede0cdd02d357ef6fe');
     },
     success: function (data, status, jqXHR) {
         console.log("success");
     },
     error: function (jqXHR, status) {
         console.log(jqXHR);
         console.log('fail' + status.code);
     }
   });
}

       
});
