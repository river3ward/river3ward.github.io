var hi = document.getElementById('Hi');
var higuy = document.getElementById('higuy')
var whobutton = document.getElementById('Who')
var whoimage = document.getElementById('who2')
var arebutton = document.getElementById('Are')
var areimage = document.getElementById('are2')
var youbutton = document.getElementById('You')
var youimage = document.getElementById('you2')

hi.addEventListener('click', function(e) {
	e.preventDefault();
	higuy.hidden=false
	whoimage.hidden=true
	areimage.hidden=true
	youimage.hidden=true;
})
whobutton.addEventListener('click', function(e) {
	e.preventDefault();
	whoimage.hidden=false
	higuy.hidden=true
	areimage.hidden=true
	youimage.hidden=true;
})
arebutton.addEventListener('click', function(e) { 
	e.preventDefault();
	areimage.hidden=false
	higuy.hidden=true
	whoimage.hidden=true
	youimage.hidden=true;
})
youbutton.addEventListener('click', function(e) { 
	e.preventDefault();
	youimage.hidden=false
	areimage.hidden=true
	higuy.hidden=true
	whoimage.hidden=true
})
