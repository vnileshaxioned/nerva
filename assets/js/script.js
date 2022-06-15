/* Author: 

*/
var categories = document.querySelectorAll('.category-list');
var selectedCategory = document.querySelectorAll('.show-collection');

selectedCategory.forEach(function (select) {
  categories.forEach(function (category) {
      if (select.dataset.category == category.dataset.category) {
        category.addEventListener('click', function () {
          select.classList.remove('collection-inactive')
        })
      } else if (category.dataset.category == 'all') {
        category.addEventListener('click', function () {
          select.classList.remove('collection-inactive')
        })
      } else {
        category.addEventListener('click', function () {
          select.classList.add('collection-inactive')
        })
      }
  })
})
