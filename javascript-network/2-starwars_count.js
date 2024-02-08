const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.log('Error fetching data from API');
    } else {
        // Parse the JSON response
        const films = JSON.parse(body);

        // Initialize a counter for movies where Wedge Antilles is present
        let count = 0;

        // Iterate through // Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request

const request = require('request')
const apiUrl = process.argv[2]
const characterId = 18
let count = 0

request.get(apiUrl, function (error, response, body) {
    if (error) {
        console.error(error.message)
    } else {
        const movieData = JSON.parse(body)
        movieData.results.forEach(function (movie) {
            movie.characters.forEach(function (character) {
                if (character.includes(characterId)) {
                    count += 1
                }
            })
        })
        console.log(count)
    }
})
each film
        films.forEach(film => {
            // Check if Wedge Antilles is present in the characters array of the film
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                count++;
            }
        });

        // Print the count of movies where Wedge Antilles is present
        console.log(count);
    }
});