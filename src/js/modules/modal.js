export default class Modal {
  constructor(id) {
    this.id = id;
    this.element = document.getElementById(this.id);
  }

  open() {
    this.element.showModal();
  }

  close() {
    this.element.close();
  }

  outsideClick(e) {
    if (e.target === this.element) {
      this.element.close();
    }
  }
}
