'use client';

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { useRouter, useSearchParams } from 'next/navigation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom marker icon (pin)
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const ItineraryPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    totalDays: 1,
    destination: searchParams.get('cities') || '',
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [itinerary, setItinerary] = useState<{ day: number; activity: string; location: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mapLocations, setMapLocations] = useState<{ lat: number; lon: number; name: string }[]>([]);

  const fetchCities = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/destination?query=${query}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      console.log('API response:', data);
      if (data.destinations && typeof data.destinations === 'object') {
        const formattedSuggestions = Object.entries(data.destinations).map(([city, country]) => `${city}, ${country}`);
        setSuggestions(formattedSuggestions);
      } else {
        console.error('Invalid data format: destinations is not an object');
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
      setSuggestions([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const destinationQuery = searchParams.get('cities') || '';
    setFormData((prev) => ({ ...prev, destination: destinationQuery }));
    fetchCities(destinationQuery);
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, destination: value }));
    router.push(`/itinerary?cities=${value}`);
    
    if (value.length > 1) {
      fetchCities(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setFormData((prev) => ({ ...prev, destination: suggestion }));
    setSuggestions([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const cleanedDestination = formData.destination.split(',')[0];
    const url = `/api/itinerary?destination=${encodeURIComponent(cleanedDestination)}&total_days=${formData.totalDays}`;

    console.log("URL for itinerary:", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Itinerary Data:", data);
      setItinerary(data);

      // Fetch geolocation for each place
      // Fetch geolocation only for cleanedDestination
  const location = await fetchGeoLocation(cleanedDestination);
  if (location) {
    setMapLocations([location]); // Store it as an array
  }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGeoLocation = async (place: string) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`);
      const data = await response.json();
      if (data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon),
          name: place,
        };
      }
    } catch (error) {
      console.error(`Failed to fetch location for ${place}:`, error);
    }
    return null;
  };

  return (
    <div>
      <Navbar />

      <div className="d-flex align-items-center justify-content-center min-vh-100" style={{padding: '20px', marginTop: '60px'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">
                    Travel Itinerary Form 🌍✈️
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="totalDays" className="form-label">Number of Days 📅</label>
                      <input
                        type="number"
                        id="totalDays"
                        name="totalDays"
                        min="1"
                        value={formData.totalDays}
                        onChange={(e) => setFormData({ ...formData, totalDays: +e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="destination" className="form-label">Destination 🌍</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter destination (e.g., Quebec City, Canada)"
                      />
                      {isLoading && <div className="text-center mt-2">Loading...</div>}
                      {suggestions.length > 0 && (
                        <ul className="list-group mt-2">
                          {suggestions.map((suggestion, index) => (
                            <li key={index} className="list-group-item" onClick={() => handleSuggestionSelect(suggestion)}>
                              {suggestion}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Generate Itinerary 📝</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
 {/* Display Itinerary */}
 <div className="itinerary-map-container">
  {/* Itinerary Section */}
  <div className="itinerary-section">
    <div className="itinerary-container">
      <h4 className="itinerary-title">Travel Itinerary</h4>
      {isLoading ? (
        <div className="itinerary-loading">Loading itinerary...</div>
      ) : itinerary.length > 0 ? (
        <div className="itinerary-grid">
          {itinerary.map((item, index) => (
            <div key={index} className="itinerary-day">
              <div className="itinerary-circle">{item.day}</div>
              <div className="itinerary-content">
                <strong>Day {item.day}:</strong> {item.activity}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="itinerary-empty">No itinerary available</div>
      )}
    </div>
  </div>

  {/* Map Section */}
  <div className="map-section">
    <div className="map-container">
      <h4>Map View 🗺️</h4>
      <MapContainer
        key={mapLocations.length > 0 ? `${mapLocations[0].lat}-${mapLocations[0].lon}` : 'default'}
        center={mapLocations.length > 0 ? [mapLocations[0].lat, mapLocations[0].lon] : [46.8139, -71.2082]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mapLocations.map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lon]} icon={customIcon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
