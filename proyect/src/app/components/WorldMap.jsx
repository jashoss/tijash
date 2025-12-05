import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function WorldMap() {
    const [geoData, setGeoData] = useState(null);


    useEffect(() => {
    fetch("/tijash/world_players.geojson")

        .then(res => res.json())
        .then(data => {
            console.log("Ejemplo de feature:", data.features[0].properties);
            setGeoData(data);
        });
}, []);


    useEffect(() => {
        fetch("/tijash/world_players.geojson")

            .then(res => res.json())
            .then(data => setGeoData(data));
    }, []);

    // Colores estilo heatmap tipo NBA
    function getColor(players) {
        return players > 40 ? "#ff8800" :
               players > 25  ? "#e7422e" :
               players > 15  ? "#9c179e" :
               players > 5  ? "#44039e" :
               players > 1   ? "#1f77b4" :
                               "#222";
    }

    function style(feature) {
        const players = feature.properties.players || 0;

        return {
            fillColor: getColor(players),
            color: "#000",
            weight: 1,
            fillOpacity: 0.85
        };
    }

    function onEachFeature(feature, layer) {
        const name = feature.properties.NAME;
        const players = feature.properties.players || 0;

        layer.bindTooltip(`${name}: ${players} jugadores`, {
            sticky: true,
            direction: "auto"
        });
    }

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "600px", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {geoData && (
                <GeoJSON
                    data={geoData}
                    style={style}
                    onEachFeature={onEachFeature}
                />
            )}
        </MapContainer>
    );
}
