import Count from './models/Count.js'
import * as countView from './views/countView.js'
import {
  elements
} from './views/base.js'

let state = {}

///////////////////////////// COUNT CONTROLLER /////////////////////////////
const controlCount = () => {
  state.count = new Count();
  countView.displayCount(state.count.adult, state.count.child);

  elements.guestSelect.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.matches('[data-js=guest-dropdown], [data-js=guest-dropdown] *')) {
      countView.toggleDropdown(state);
    }
  });

  document.addEventListener('click', e => {
    e.preventDefault();
    if (state.count.isOpen && !e.target.matches('[data-js=guest], [data-js=guest] *')) {
      elements.dropdown.classList.remove('dropdown--active');
      state.count.isOpen = !state.count.isOpen;
    }
  })

  elements.dropdownButtons.forEach(button => {
    button.addEventListener('click', e => {
      const value = e.target.closest('[data-js=dropdown-button]').value
      if (value === 'minus-adult') {
        state.count.minusAdult();
      } else if (value === 'add-adult') {
        state.count.addAdult();
      } else if (value === 'minus-child') {
        state.count.minusChild();
      } else if (value === 'add-child') {
        state.count.addChild();
      }
      countView.displayCount(state.count.adult, state.count.child);
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  controlCount();
})


///////////////////////////// COUNT CONTROLLER /////////////////////////////