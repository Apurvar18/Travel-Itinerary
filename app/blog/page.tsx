'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';  // Import the Navbar component

export default function BlogPage() {
  const [chartUrl, setChartUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);  // For loading state

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/chart');
        if (response.ok) {
          const data = await response.text();
          // Save the chart HTML to a separate file or return the URL of a chart
          setChartUrl('http://127.0.0.1:5000/api/chart'); // Or set the URL if you are serving it
          setLoading(false);  // Set loading to false once data is fetched
        } else {
          console.error('Failed to fetch chart:', response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching chart:", error);
        setLoading(false);
      }
    };

    fetchChart();
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(About.jpg)',  // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',  // Ensure it covers the full viewport height
        backgroundAttachment: 'fixed',  // Keeps the background fixed while scrolling
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Blog Header */}
      <div className="container" style={{ padding: '20px', marginTop: '60px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
        <h1 className="text-center">
          Travel Statistics in Canada (2024)
        </h1>

        <p className="text-lg text-center my-8">
          In 2024, over 25 million people are expected to travel across Canada, with Ontario, Quebec, and British Columbia leading the way in tourism. Let's dive into some interesting data about the top regions for travel within Canada!
        </p>

        <p className="text-lg text-center">
          Explore the top destinations in Canada like Vancouver, Toronto, and Montreal, which attract millions of travelers each year.
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center mt-8">
          <p>Loading chart...</p>
        </div>
      )}

      {/* Embed the chart in an iframe */}
      {!loading && chartUrl && (
        <div className="chart-container" style={{ textAlign: 'center' }}>
          <iframe
            src={chartUrl}
            style={{
              width: '80%',
              height: '500px',  // You can adjust the height if needed
              border: '1px solid #ddd',
              marginTop: '20px',
            }}
            title="Travel Statistics Chart"
          />
        </div>
      )}

      {/* Error message if no chart is loaded */}
      {!loading && !chartUrl && (
        <div className="text-center mt-8">
          <p>Failed to load chart.</p>
        </div>
      )}
    </div>
  );
}
