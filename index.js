import { createInterface } from 'readline';

// Create readline interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to fetch anime quotes by anime name
async function fetchAnimeQuote(animeName) {
    // Encode the anime name before appending to URL
    const encodedAnimeName = encodeURIComponent(animeName);

    // API endpoint with dynamic anime name
    const apiUrl = `https://animechan.xyz/api/random/anime?title=${encodedAnimeName}`;

    try {
        // Fetch anime quote using fetch
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch anime quote');
        }

        // Extract quote from response data
        const quote = await response.json();
        return quote;
    
    } catch (error) {
        
        console.error('Error fetching anime quote:', error.message);
        throw error;
    }
}

// Function to validate if the input is a valid anime name
async function isValidAnimeName(animeName) {
    try {
        const quote = await fetchAnimeQuote(animeName);
        return !!quote; // Returns true if a quote is fetched
    } catch (error) {
        return false; // Returns false if an error occurs (anime name not found)
    }
}

// Function to prompt user for anime title and display quote
async function getAndDisplayQuote() {
    try {
        // Ask user to enter an anime title
        const animeName = await new Promise((resolve) => {
            rl.question('\nEnter an anime title: ', resolve) 
        });

        // Validate the anime name
        const isValid = await isValidAnimeName(animeName);
        if (!isValid) {
            console.log('Anime not found. Please enter a valid anime title.');
            await getAndDisplayQuote(); // Prompt again if not valid
            return;
        }

        // Fetch and display anime quote
        const quote = await fetchAnimeQuote(animeName);
        console.log('Quote for', animeName + ':', quote);
        console.log();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to ask user if they want to continue or exit
async function askToContinue() {
    while (true) {
        const answer = await new Promise((resolve) => {
            rl.question('Do you want to enter another anime title? (yes/no): ', resolve);
        });
        const trimmedAnswer = answer.trim().toLowerCase();
        if (trimmedAnswer === 'yes') {
            return true;
        } else if (trimmedAnswer === 'no') {
            return false;
        } else {
            console.log('Invalid input. Please enter "yes" or "no".\n');
        }
    }
}

// Main function to run the program
async function main() {
    try {
        let done = false;
        while (!done) {
            await getAndDisplayQuote();
            done = !await askToContinue();
        }
        rl.close();
    } catch (error) {
        console.error('Error:', error.message);
        rl.close();
    }
}

// Start the program
main();
