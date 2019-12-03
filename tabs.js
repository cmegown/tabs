export class Tabs {
  constructor() {
    this.tabs = document.querySelectorAll('.c-tab');
    this.tablists = document.querySelectorAll('.c-tablist');
    this.tabpanels = document.querySelectorAll('.c-tabpanel');
  }

  create() {
    this.tabs.forEach(tab => {
      tab.setAttribute('role', 'tab');
    });

    this.tablists.forEach(tablist => {
      tablist.setAttribute('role', 'tablist');
    });

    this.tabpanels.forEach(tabpanel => {
      tabpanel.setAttribute('role', 'tabpanel');
    });
  }

  destroy() {
    this.tabs.forEach(tab => {
      tab.removeAttribute('role');
    });

    this.tablists.forEach(tablist => {
      tablist.removeAttribute('role');
    });

    this.tabpanels.forEach(tabpanel => {
      tabpanel.removeAttribute('role');
    });
  }
}
