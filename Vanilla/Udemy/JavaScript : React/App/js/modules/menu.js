function menu() {
  const getData = async url => {
    let result = await fetch(url);
    if (result.ok) {return await result.json(); }
    else { throw new Error(`Fatal fetch ${url} with status: ${result.status}`); }
  };

  class MenuItem {
    constructor (src, alt, title, text, cost, parent, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.cost = this.convert(cost);
      this.parent = document.querySelector(parent);
      this.classes = classes;
    }

    convert(cost) { return cost * 27; }

    render() {
      let element = document.createElement('div');
      if (this.classes.length) { this.classes.forEach( className => element.classList.add(className) ); }
      else { element.classList.add('menu__item'); }
      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.text}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.cost}</span>грн/день</div>
        </div>`;
      this.parent.append(element);
    }
  }

  getData('http://localhost:3000/menu').then(result => {
    result.forEach(({img, altimg, title, descr, price}) => {
      new MenuItem(img, altimg, title, descr, price, '.menu .menu__field .container').render(); });
  });
}

module.exports = menu;