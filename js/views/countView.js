import {
  elements
} from './base.js';

export const displayCount = (adult, child) => {
  elements.guestCountAdult.textContent = `${adult} ${adult === 1 ? 'adult' : 'adults'}`;
  elements.guestCountChild.textContent = `${child} ${child === 1 ? 'child' : 'children'}`;
  elements.dropdownCountAdult.textContent = adult;
  elements.dropdownCountChild.textContent = child;
}

export const toggleDropdown = state => {
  if (state.count.isOpen) {
    elements.dropdown.classList.remove('dropdown--active');
    state.count.isOpen = !state.count.isOpen;
  } else {
    elements.dropdown.classList.add('dropdown--active');
    state.count.isOpen = !state.count.isOpen;
  }
}