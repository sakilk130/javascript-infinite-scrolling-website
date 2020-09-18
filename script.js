const imgeContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Fetch API
const count = 10;
const apiKey = 'UUqDH9rOXlYnClojNJntfvlz8ky5fno1KvVtZ5TmehY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//**********************

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
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

getPhots();
