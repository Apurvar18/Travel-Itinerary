"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const fetchHotels = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/chatbot?city=${encodeURIComponent(city)}`);
      const data = await response.json();
      setHotels(data.hotels || []);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChatbot}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <h3>Hotel Suggestions 🏨</h3>
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchHotels} disabled={loading}>
            {loading ? "Searching..." : "Find Hotels"}
          </button>

          <div className="hotel-list">
            {hotels.length > 0 ? (
              hotels.map((hotel, index) => (
                <div key={index} className="hotel-item">
                  <strong>{hotel.name}</strong>
                  <p>{hotel.address}</p>
                </div>
              ))
            ) : (
              <p>No hotels found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
