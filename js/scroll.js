const scroll = document.getElementById("scroll");

scroll.oninput = function () {
	const panel = document.getElementById("projects_list");

	let total = panel.scrollWidth - panel.offsetWidth;
	let percentage = total*(this.value/100);

	panel.scrollLeft = percentage;
}
