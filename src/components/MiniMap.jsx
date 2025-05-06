import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MiniMap() {
  const [position, setPosition] = useState([51.505, -0.09]); // Default to London

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      () => {
        console.warn("Geolocation permission denied or unavailable");
      }
    );
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-64 h-64 md:w-52 md:h-52 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-[3px] border-blue-500 z-50">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <CircleMarker
          center={position}
          radius={10}
          pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 0.6 }}
        />
      </MapContainer>
    </div>
  );
}
