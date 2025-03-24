 			const icon = document.querySelector(".icon");

const body = document.querySelector("body");

icon.addEventListener("click", (e) => {
	body.classList.toggle("secondary-theme");
	if(body.classList.contains("secondary-theme")){
		icon.style="background-image:url('primary.gif')"
		body.style="pointer-events: none"
		setTimeout(function() {
    document.location.href = 'dzir.html';
}, 2000);
	}
});