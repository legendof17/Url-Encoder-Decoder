function encode() {
	var obj = document.getElementById('rawstring');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
}
function decode() {
	var obj = document.getElementById('rawstring');
    var encoded = obj.value;
    encoded = decodeURIComponent(encoded.replace("https://mylink.cx/?url=",  ""));
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}