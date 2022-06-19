// for category tab filter
var categories = document.querySelectorAll('.category-list');
var selectedImage = document.querySelectorAll('.show-collection');

for (var images of selectedImage) {
  images.classList.add('collection-active');
}

for (i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', function () {
    for (j = 0; j < categories.length; j++) {
      categories[j].classList.remove('category-active');
    }
    this.classList.add('category-active');
    var dataCategory = this.getAttribute('data-category');
    for (var images of selectedImage) {
      images.classList.remove('collection-active');
      if (images.getAttribute('data-name') == dataCategory || dataCategory == 'all') {
        images.classList.add('collection-active');
      }
    }
  })
}
// category tab filter ends here

// for modal
var gallery = document.querySelector('.gallery > .wrapper');
var container = document.querySelector('.container');
var modal = document.createElement("ul");
modal.className = "modal";
var modalClose = document.createElement("a");
modalClose.setAttribute('href', '#FIXME');
modalClose.className = "close";
modalClose.setAttribute('title', 'Close');
modalClose.textContent = "close";

for (i = 0; i < selectedImage.length; i++) {
  selectedImage[i].addEventListener('click', function () {
    for (j = 0; j < selectedImage.length; j++) {
      selectedImage[j].classList.remove('modal-active');
    }
    gallery.appendChild(modal);
    this.classList.add('modal-active');
    container.className = "container-active";
    var selectedModal = document.querySelector('.modal');
    var collections = document.querySelector('.modal-active');
    newCollection = collections.cloneNode(true);
    selectedModal.appendChild(newCollection);
    var activeModal = document.querySelector('.modal > .modal-active');
    activeModal.appendChild(modalClose);
    var closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function () {
      activeModal.parentNode.removeChild(activeModal);
      container.classList.remove('container-active');
      modal.parentNode.removeChild(modal);
    })
    var modalButton = activeModal.innerHTML;
    modalButton += '<ul class="modal-action">';
    modalButton += '<li><a href="#FIXME" class="prev" title="previous">previous</a></li>';
    modalButton += '<li><a href="#FIXME" class="next" title="next">next</a></li>';
    modalButton += '</ul>';

    activeModal.innerHTML = modalButton;
  })
}



// modal ends here

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