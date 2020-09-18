const imgeContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImage = 0;
let photosArray = [];

//Fetch API
const count = 5;
const apiKey = 'UUqDH9rOXlYnClojNJntfvlz8ky5fno1KvVtZ5TmehY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//**********************

function imageLoaded() {
  //console.log('image loaded');
  imagesLoaded++;
  //console.log(imagesLoaded);
  if (imagesLoaded === totalImage) {
    ready = true;
    loader.hidden = true;
    //console.log('Ready = ', ready);
  }
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImage = photosArray.length;
  // console.log('Total Images= ', totalImage);

  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener('load', imageLoaded);

    item.appendChild(img);
    imgeContainer.appendChild(item);
  });
}

async function getPhots() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    //console.log(photosArray);
  } catch (error) {
    console.log(error);
  }
}

//scrolling
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhots();
  }
});

getPhots();
