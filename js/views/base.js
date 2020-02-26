export const elements = {
  formInput: document.querySelector('[data-js=form-input]'),
  checkinDate: document.querySelector('[data-js=date-picker-checkin]'),
  checkoutDate: document.querySelector('[data-js=date-picker-checkout]'),
  guestSelect: document.querySelector('[data-js=guest]'),
  guestCountAdult: document.querySelector('[data-js=guest-count-adult]'),
  guestCountChild: document.querySelector('[data-js=guest-count-child]'),

  dropdown: document.querySelector('[data-js=guest-dropdown]'),
  dropdownCountAdult: document.querySelector('[data-js=dropdown-count-adult]'),
  dropdownCountChild: document.querySelector('[data-js=dropdown-count-child]'),
  dropdownButtons: Array.from(document.querySelectorAll('[data-js=dropdown-button]'))
}