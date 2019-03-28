(function(d){
	const baseSize = 32;
	const maxWidth = 540;
	const setrem = () =>{
		const { min } = Math;
		const cw = d.documentElement.clientWidth;
		const scale = min(cw,maxWidth) / 750;
		d.documentElement.style.fontSize = (baseSize * min(scale, 2)) + 'px';
	}
	setrem()
	d.addEventListener("resize",setrem)	
})(document)
