var links = document.getElementsByTagName("a");

var currentUrl = window.location.href;

for (var i = 0; i < links.length; i++) {
	console.log(links[i].href);
	if (links[i].href === currentUrl) {
		links[i].className = "active";
	}
}


