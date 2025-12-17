
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const position: [number, number] = [8.1436, 124.2519];

  return (
    <div className="h-[400px] w-full">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            North Central Mindanao College. <br /> Maraning, Purok Lemon.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
