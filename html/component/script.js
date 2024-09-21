const flagButton = document.querySelector('.flag-button');
const flagList = document.querySelector('.flag-list');

flagButton.addEventListener('click', () => {
  flagList.classList.toggle('show');
});

flagList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedFlag = e.target.querySelector('.flag-icon').src;
    const selectedFlagText = e.target.querySelector('.flag-text').textContent;
    flagButton.querySelector('.flag-icon').src = selectedFlag;
    flagButton.querySelector('.flag-text').textContent = selectedFlagText;
    flagList.classList.remove('show');
  }
});

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');
    const icon = accordion.querySelector('.icon');
  
    header.addEventListener('click', () => {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        icon.textContent = '+';
        
      } else {
        content.classList.add('show');
        icon.textContent = '-';
      }
    });
  });

  