export class Tabs {
  constructor() {
    this.tabs = document.querySelectorAll('.tab');
    this.tablists = document.querySelectorAll('.tablist');
    this.tabpanels = document.querySelectorAll('.tabpanel');
    this.containers = document.querySelectorAll('.container');
  }

  ///

  _closest(element, selector) {
    while (element) {
      if (element.matches(selector)) break;
      element = element.parentElement;
    }
    return element;
  }

  ///

  _addAria() {
    this.tabs.forEach(tab => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', 'false');
      tab.parentElement.setAttribute('role', 'presentation');
    });

    this.tablists.forEach(tablist => {
      tablist.setAttribute('role', 'tablist');
    });

    this.tabpanels.forEach(tabpanel => {
      tabpanel.setAttribute('role', 'tabpanel');
      tabpanel.hidden = true;
    });
  }

  _bindTabEvents() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', this._eventTabClick.bind(this));
    });
  }

  _eventTabClick(e) {
    e.preventDefault();
    this._showTab(e.target);
  }

  _showTab(target) {
    let i = 0;
    let container = this._closest(target, '.container');
    let tabs = container.querySelectorAll('.tab');
    let tabpanels = container.querySelectorAll('.tabpanel');

    tabs.forEach((tab, index) => {
      if (tab === target) i = index;
      tab.setAttribute('aria-selected', 'false');
    });

    tabpanels.forEach(tabpanel => {
      tabpanel.hidden = true;
    })

    target.setAttribute('aria-selected', 'true');
    tabpanels[i].hidden = false;
  }

  ///

  create() {
    this._addAria();
    this._bindTabEvents();

    this.containers.forEach(container => {
      this._showTab(container.querySelectorAll('.tab')[0]);
    });
  }

  destroy() {
    //
  }
}
