//Fetch API
const count = 10;
const apiKey = 'UUqDH9rOXlYnClojNJntfvlz8ky5fno1KvVtZ5TmehY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhots() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPhots();
