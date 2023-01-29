const parent = document.querySelector('.tab-container');
const nodeList = parent.childNodes;
const viewParent = document.querySelector('.view-container');
const viewList = viewParent.childNodes;

document.querySelector('.tab-container').addEventListener('click', function (e) {
  var dataView = '';
  if (e.target.matches('.tab')) {
    for (var tab of nodeList) {
      if (e.target === tab) {
        dataView = e.target.getAttribute('data-view');
        tab.classList.add('active');
      } else if (tab.classList !== undefined && tab.className.includes('active')) {
        tab.classList.remove('active');
      }
    }
    for (var view of viewList) {
      if (view.classList !== undefined) {
        if (view.dataset.view === dataView) {
          view.classList.remove('hidden');
        } else {
          view.classList.add('hidden');
        }
      }
    }
  }
});
