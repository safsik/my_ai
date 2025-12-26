require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- 1. THE SCRAPER FUNCTION ---
async function scrapePropertyData(url) {
    try {
        console.log(`🔍 Scraping: ${url}...`);
        
        // NOTE: For dynamic sites (React/Angular), you might need Puppeteer instead of Axios
        // This is a generic header to mimic a browser
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });

        const $ = cheerio.load(data);

        // EXAMPLE SELECTORS (You must change these to match the specific website you are targeting)
        // For this example, we pretend we are grabbing a title and a big block of description text
        const title = $('h1').text().trim();
        const price = $('.price-class-name').text().trim(); // Replace with actual class
        const rawDescription = $('.description-class-name').text().trim(); // Replace with actual class

        // Return the messy raw data
        return {
            title,
            price,
            rawText: rawDescription
        };

    } catch (error) {
        console.error("Error scraping site:", error.message);
        return null;
    }
}

// --- 2. THE AI PROCESSING FUNCTION ---
async function analyzeWithGemini(rawPropertyData) {
    console.log("🤖 Sending data to Gemini for analysis...");

    const prompt = `
    I have scraped some raw text from a real estate listing. 
    Please extract the key details and format them as a clean JSON object.
    
    Here is the raw data:
    Title: ${rawPropertyData.title}
    Price string: ${rawPropertyData.price}
    Description: ${rawPropertyData.rawText}

    Please output ONLY valid JSON with the following keys:
    - city (string)
    - bedrooms (number, estimate if not clear)
    - price_numeric (number)
    - key_features (array of strings)
    - sentiment (string: "positive", "neutral", or "negative" based on description)
    - investment_rating (number 1-10 based on implied value)
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up markdown code blocks if Gemini adds them
        text = text.replace(/```json/g, '').replace(/```/g, '');
        
        return JSON.parse(text);
    } catch (error) {
        console.error("Error connecting to Gemini:", error);
    }
}

// --- 3. MAIN EXECUTION ---
(async () => {
    // Replace this with a real URL you have permission to scrape
    // For testing without a URL, comment out the scrape function and use dummy data below
    const targetUrl = 'https://example-real-estate-site.com/property/123'; 
    
    // --- OPTION A: REAL SCRAPE (Uncomment if you have a valid URL and Selectors) ---
    // const rawData = await scrapePropertyData(targetUrl);

    // --- OPTION B: DUMMY DATA (Use this to test the AI part immediately) ---
    const rawData = {
        title: "Stunning 2 Bed Flat near Shoreditch",
        price: "£450,000",
        rawText: "Beautiful apartment located in E1. The property features a large balcony, 2 double bedrooms and a modern open plan kitchen. Needs some paint work but great potential. 5 mins walk to Old Street station. Cash buyers only due to short lease."
    };

    if (rawData) {
        const structuredData = await analyzeWithGemini(rawData);
        console.log("\n✨ Final Structured Data from AI:");
        console.log(JSON.stringify(structuredData, null, 2));
    }
})();