const previousEl = document.getElementById("previous");
const nextEl = document.getElementById("next");
const sliderEl = document.getElementById("slider");

previousEl.addEventListener("click", onPreviousClick);
nextEl.addEventListener("click", onNextClick);

autoScroll();

function onPreviousClick() {
	const sliderWidth = sliderEl.offsetWidth;
	sliderEl.scrollLeft -= sliderWidth;
	handleSliderClick();
}

function onNextClick() {
	const sliderWidth = sliderEl.offsetWidth;
	sliderEl.scrollLeft += sliderWidth;
	handleSliderClick();
}

function autoScroll() {
	setInterval(() => {
		const sliderWidth = sliderEl.offsetWidth;
		const numberOfImages = sliderEl.childElementCount;
		const selectedImages = sliderEl.scrollLeft / sliderWidth + 1;

		// Si es la última => vuelve al 0
		if (numberOfImages === selectedImages) {
			sliderEl.scrollLeft = 0;
			return;
		}

		//Sino scrollea a la derecha cada 5s
		sliderEl.scrollLeft += sliderWidth;
	}, 5000);
}
