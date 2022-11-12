import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()


import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';


var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  ClassicEditor
  .create(document.querySelector('.ckeditor'))
    .catch(error => {
      console.log(`error`, error)
    });
});


