export default class Count {
  constructor() {
    this.adult = 1;
    this.child = 0;
    this.isOpen = false;
  }

  addAdult() {
    this.adult < 9 ? this.adult++ : this.adult;
  }

  addChild() {
    this.child < 9 ? this.child++ : this.child;
  }

  minusAdult() {
    this.adult > 1 ? this.adult-- : this.adult;
  }

  minusChild() {
    this.child > 0 ? this.child-- : this.child;
  }
}