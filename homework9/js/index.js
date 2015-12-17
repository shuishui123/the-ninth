var tab = document.querySelectorAll("#little div");
var act = document.querySelector(".big0");
for (var i = 0; i < tab.length; i ++) {
	tab[i].index = i;
	tab[i].addEventListener('click',function () {
		for(i = 0; i < tab.length; i ++) {
			tab[i].style.backgroundColor = "";
		}
		tab[this.index].style.backgroundColor = "#fff";
		act.className = "big" + this.index;
	})

}