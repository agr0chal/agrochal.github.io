const scroll = document.getElementById("scroll");
const panel = document.getElementById("projects_list");

scroll.oninput = function() {

  let total = panel.scrollWidth - panel.offsetWidth;
  let percentage = total * (this.value / 100);

  panel.scrollLeft = percentage;
}

panel.onscroll = function() {
  let total = panel.scrollWidth - panel.offsetWidth;
  let percentage = panel.scrollLeft / total * 100;
  scroll.value = percentage;

}
