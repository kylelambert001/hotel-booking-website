export const elements = {
  guestEl: document.querySelector('[data-guest]'),
  dropdownEl: document.querySelector('[data-guest-dropdown]'),

  guestAdultCount: document.querySelector('[data-adult-count]'),
  guestChildCount: document.querySelector('[data-child-count]'),
  stepperAdultCount: document.querySelector('[data-stepper-adult-count]'),
  stepperChildCount: document.querySelector('[data-stepper-child-count]'),

  incrementAdultBtn: document.querySelector('[data-adult-increment]'),
  incrementChildBtn: document.querySelector('[data-child-increment]'),

  decrementAdultBtn: document.querySelector('[data-adult-decrement]'),
  decrementChildBtn: document.querySelector('[data-child-decrement]'),

  checkInDate: document.querySelector('[data-check-in]'),
  checkOutDate: document.querySelector('[data-check-out]')
}

export const updateCount = (obj) => {
  _updateGuestCount(obj);
  _updateStepperCount(obj);

}

export const updateCheckIn = (date) => {
  elements.checkInDate.innerHTML = date;
}

export const setupToggleDropdown = () => {
  elements.guestEl.addEventListener('click', (e) => {
    if (!e.target.matches('[data-guest-dropdown] *')) {
      elements.dropdownEl.classList.toggle('dropdown--active');
    }
  })
}

const _updateGuestCount = (obj) => {
  elements.guestAdultCount.innerHTML = `${obj.adult} ${obj.adult === 1 ? 'adult' : 'adults'}`;
  elements.guestChildCount.innerHTML = `${obj.child} ${obj.child === 1 ? 'child' : 'children'}`;
}

const _updateStepperCount = (obj) => {
  elements.stepperAdultCount.innerHTML = obj.adult;
  elements.stepperChildCount.innerHTML = obj.child;
}