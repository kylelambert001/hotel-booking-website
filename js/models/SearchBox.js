export default class SearchBox {
  constructor() {
    this.location = null;
    this.dates = {
      arrive: null,
      depart: null
    }
    this.guests = {
      adult: 1,
      child: 0
    }
    this.dropdownOpen = false;
  }

  setLocation(query) {
    this.location = query;
  }

  setArrivalDate() {
    const current = new Date();
    const date = current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
    const month = (current.getMonth() + 1) < 10 ? `0${current.getMonth() + 1}` : current.getMonth() + 1;
    const year = current.getFullYear();
    this.dates.arrive = `${date}/${month}/${year}`
  }

  addAdult() {
    this.guests.adult < 9 ? this.guests.adult++ : this.guests.adult;
  }

  addChild() {
    this.guests.child < 9 ? this.guests.child++ : this.guests.child;
  }

  minusAdult() {
    this.guests.adult > 1 ? this.guests.adult-- : this.guests.adult;
  }

  minusChild() {
    this.guests.child > 0 ? this.guests.child-- : this.guests.child;
  }

  initSearchBox() {
    this.setArrivalDate();
  }
}