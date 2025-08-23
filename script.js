const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    contents.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-hidden', 'true');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const tabId = tab.getAttribute('data-tab');
    const content = document.getElementById(tabId);
    if (content) {
      content.classList.add('active');
      content.setAttribute('aria-hidden', 'false');
    }
  });
});
