import axios from 'axios';

// Unsplash API endpoint and your access key
const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random';
const ACCESS_KEY = '2CP8k8jUtQ2LzhOwTGmfYNRqFL58JdHhrsyH2rpWUFQ'; // Replace this with your Unsplash API key

/**
 * Fetch random images from Unsplash
 * @param {number} count - Number of images to fetch
 * @returns {Promise<Array>} - Returns an array of image objects
 */
export async function fetchImages(count = 5, query = "travel") {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=${count}&query=${query}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
  
      const data = await response.json();
      return data; // This will return an array of images
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  }
