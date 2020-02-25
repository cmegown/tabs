export class Tabs {
  constructor() {
    this.tabs = document.querySelectorAll('.c-tab');
    this.tablists = document.querySelectorAll('.c-tablist');
    this.tabpanels = document.querySelectorAll('.c-tabpanel');
  }

  ///

  _addAria() {
    this.tabs.forEach(tab => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', 'false');
    });

    this.tablists.forEach(tablist => {
      tablist.setAttribute('role', 'tablist');
    });

    this.tabpanels.forEach(tabpanel => {
      tabpanel.setAttribute('role', 'tabpanel');
      tabpanel.setAttribute('tabindex', '-1');
    });
  }

  _removeAria() {
    this.tabs.forEach(tab => {
      tab.removeAttribute('role');
      tab.removeAttribute('aria-selected');
    });

    this.tablists.forEach(tablist => {
      tablist.removeAttribute('role');
    });

    this.tabpanels.forEach(tabpanel => {
      tabpanel.removeAttribute('role');
      tabpanel.removeAttribute('tabindex');
    });
  }

  ///

  create() {
    this._addAria();
  }

  destroy() {
    this._removeAria();
  }
}
