const projectGrid = document.querySelector('#projectGrid');

projectGrid.addEventListener('click', (event) => {
  const clickedProject = event.target.closest('.project');
  if (!clickedProject) return;

  // remove highlight from all projects
  document.querySelectorAll('.project').forEach(project => {
    project.classList.remove('highlight');
  });

  // add highlight to the clicked one
  clickedProject.classList.add('highlight');
});
//I trigger a CSS animation using JavaScript by toggling a class. The animation ends at the original transform state, so the element naturally returns to its initial position without extra cleanup.
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  // reset animation if clicked again
  logo.classList.remove('spring');
  void logo.offsetWidth; // force reflow
  logo.classList.add('spring');
});
// JS adds a class

// CSS handles:

// spring motion

// circle morph

// Animation ends at neutral values

// Logo returns to original shape automatically
// This ensures:

// Clicking multiple times replays the animation

// No stacking animations

// Always resets back to normal
//bounces on load
window.addEventListener('load', () => {
  logo.classList.add('spring');
});