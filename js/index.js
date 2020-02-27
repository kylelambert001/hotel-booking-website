// import Search from './models/Search.js'
import SearchBox from './models/SearchBox.js'
import * as searchBoxView from './views/searchBoxView.js'
import {
  elements
} from './views/base.js'

let state = {}
window.state = state;


///////////////////////////// SEARCHBOX CONTROLLER /////////////////////////////
const controlSearchBox = () => {
  state.searchBox = new SearchBox();
  state.searchBox.initSearchBox()

  searchBoxView.displayGuests(state.searchBox.guests.adult, state.searchBox.guests.child);
  searchBoxView.displayArrivalDate(state.searchBox.dates.arrive);

  // Toggle dropdown menu for guest count
  elements.guestSelect.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.matches('[data-js=guest-dropdown], [data-js=guest-dropdown] *')) {
      if (state.searchBox.dropdownOpen) {
        elements.dropdown.classList.remove('dropdown--active');
        state.searchBox.dropdownOpen = !state.searchBox.dropdownOpen;
      } else {
        elements.dropdown.classList.add('dropdown--active');
        state.searchBox.dropdownOpen = !state.searchBox.dropdownOpen;
      }
    }
  });

  // Close dropdown when user clicks outside of select area
  document.addEventListener('click', e => {
    e.preventDefault();
    if (state.searchBox.dropdownOpen && !e.target.matches('[data-js=guest], [data-js=guest] *')) {
      elements.dropdown.classList.remove('dropdown--active');
      state.searchBox.dropdownOpen = !state.searchBox.dropdownOpen;
    }
  })

  // Button events for adding/removing guest count
  elements.dropdownButtons.forEach(button => {
    button.addEventListener('click', e => {
      const value = e.target.closest('[data-js=dropdown-button]').value
      if (value === 'minus-adult') {
        state.searchBox.minusAdult();
      } else if (value === 'add-adult') {
        state.searchBox.addAdult();
      } else if (value === 'minus-child') {
        state.searchBox.minusChild();
      } else if (value === 'add-child') {
        state.searchBox.addChild();
      }
      searchBoxView.displayGuests(state.searchBox.guests.adult, state.searchBox.guests.child);
    })
  })

  elements.formInput.addEventListener('keyup', e => {
    if (elements.formInput.value) {
      state.searchBox.setLocation(elements.formInput.value);
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  controlSearchBox();
})


///////////////////////////// SEARCH CONTROLLER /////////////////////////////
const controlSearch = () => {
  state.search = new Search('Adelaide', state.count.adult, state.count.child);


}


elements.searchButton.addEventListener('click', e => {
  e.preventDefault();
  console.log('clicked');
  controlSearch();
})