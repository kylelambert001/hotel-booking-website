export default class Form {
  constructor() {
    this.location = null
    this.checkIn = null
    this.checkOut = null
    this.count = {
      adult: 1,
      child: 0
    }
  }

  setCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.checkIn = `${day}/${month}/${year}`
  }

  incrementAdultCount() {
    if (this.count.adult < 10) this.count.adult++;
  }
  incrementChildCount() {
    if (this.count.child < 10) this.count.child++;
  }
  decrementAdultCount() {
    if (this.count.adult > 1) this.count.adult--;
  }
  decrementChildCount() {
    if (this.count.child > 0) this.count.child--;
  }
}