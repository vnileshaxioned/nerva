// for category tab filter
var categories = document.querySelectorAll('.category-list');
var selectedImage = document.querySelectorAll('.show-collection');

for (var images of selectedImage) {
  images.classList.add('collection-active');
}

categories.forEach(function (category) {
  var clicked = category.dataset.category;
    category.addEventListener('click', function () {
      for (var images of selectedImage) {
        if (clicked == 'all') {
          images.classList.add('collection-active');
        } else if (images.classList.contains(clicked)) {
          images.classList.add('collection-active');
        } else {
          images.classList.remove('collection-active');
        }
      }
    });
});
// category tab filter ends here

// for modal
selectedImage.forEach(function (image) {
  image.addEventListener('click', function() {
    var clicked = image.classList.add('modal-active');
    var modalContent = document.querySelectorAll('.modal-active > .gallery-content');
    for (var content of modalContent) {
      content.classList.remove('gallery-content');
    }
  })
});
// modal ends here