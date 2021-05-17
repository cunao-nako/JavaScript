function button() { return 'button'; }

class Slider {
  constructor(width, height, slides) {
    this.width = width;
    this.height = height;
    this.slides = slides;
  }
  nextSlide() {
    console.log('next slide');
  }
  prevSlide() {
    console.log('prev slide');
  }
  getAllParam() {
    console.log(`width: ${this.width}, height: ${this.height}, slides: ${this.slides}`);
  }
}

class AutoSlider extends Slider {
  constructor(width, height, slides, auto) {
    super(width, height, slides);
    this.auto = auto;
  }
  play() {
    console.log('auto:', this.auto);
  }
}

export {Slider, AutoSlider, button};