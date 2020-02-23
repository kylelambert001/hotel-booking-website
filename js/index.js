import Form from './components/Form.js'
import {
  elements,
  updateCount,
  updateCheckIn,
  setupToggleDropdown
} from './views/FormView.js'

let state = {}

document.addEventListener('DOMContentLoaded', () => {
  init();
})

const init = () => {
  state.form = new Form();
  state.form.setCurrentDate();
  updateCheckIn(state.form.checkIn);
  updateCount(state.form.count);
  setupToggleDropdown();
  setupEventListeners();
}

const setupEventListeners = () => {
  // Guest increment/decrement button events
  elements.incrementAdultBtn.addEventListener('click', () => {
    state.form.incrementAdultCount();
    updateCount(state.form.count)
  })
  elements.incrementChildBtn.addEventListener('click', () => {
    state.form.incrementChildCount();
    updateCount(state.form.count)
  })
  elements.decrementAdultBtn.addEventListener('click', () => {
    state.form.decrementAdultCount();
    updateCount(state.form.count)
  })
  elements.decrementChildBtn.addEventListener('click', () => {
    state.form.decrementChildCount();
    updateCount(state.form.count)
  })
}