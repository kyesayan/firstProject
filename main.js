function contact_us(){
	var switcher = true;
	var increment = 2;
	var contact_us = $("#contact_us");
	var right = parseInt(contact_us.css("right"));
	var bottom = parseInt(contact_us.css("bottom"));
	var opacity_bg = $('#opacity_bg');
	var contact_us_block = $('#contact_us_block');
	$('#contact_us_block').css({'margin-left':-contact_us_block.outerWidth()/2});
	
	
	contact_us.mousedown(function(){
		increment = increment*-1;
		animate_contact_icon(increment);
	}).mouseup(function(){
		increment = increment*-1;
		animate_contact_icon(increment);
	}).click(function(){
		show_hide_contact_form();
	}); 
	
	$('#opacity_bg').click(function(){
		show_hide_contact_form();
	});
	
	function animate_contact_icon(increment){
		right=right+increment;
		bottom=bottom+increment;
		contact_us.css("bottom",right+"px").css("right",bottom+"px");
	}
	
	function show_hide_contact_form(){
		if(switcher == true){
			opacity_bg.show(500);
			contact_us_block.show(500);
			switcher = false;
		}
		else{
			opacity_bg.hide(500);
			contact_us_block.hide(500);
			switcher = true;
		}
	}
};
contact_us();




function slider(items){
	var slider_container = $('#slider');
	var curr = 'current';
	var display = '';
	for(var i in items){
		if(i>0){
			curr = '';
			display = 'display:none';
		}
		slider_container.append("<div class='slider_bgs "+curr+" "+items[i].style_class+"' style='"+display+";background-image:url(source/"+items[i].src+")'><h2>"+items[i].title+"</h2><p>"+items[i].description+"</p></div>");
	}
	var slider_first_child = $('#slider div:first-child');
	setInterval(function(){
		var current = $('.current');
		$('.current').hide(500);
		current.removeClass('current');
		if(current.next('.slider_bgs').length){
			current.next().addClass('current');
		}
		else{
			slider_first_child.addClass('current');
		}
		$('.current').show(100);
	},3000 );
}

var slider_items = [
	{
		src: 'bg1.jpg',
		title: '',
		description: '',
		style_class : 'big_font', 
	},
	{
		src: 'sale.jpg',
		title: '',
		description: '',
		style_class : 'small_font', 
	},
	{
		src: 'sales-solutions.jpg',
		title: '',
		description: '',
		style_class : '', 
	},
];
slider(slider_items);

function showTab(id){
	$('.tab_content').hide();
	$('#'+id).show();
}