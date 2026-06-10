'use client';
// prototype2 — interactive realistic (satellite) Leaflet map. Client-only.
import { Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, CircleMarker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Brand teardrop pin for the project.
const projectIcon = L.divIcon({
  className: '',
  html: `
    <div style="position:relative;width:42px;height:52px;">
      <div style="position:absolute;left:50%;top:0;transform:translateX(-50%);
        width:38px;height:38px;border-radius:50% 50% 50% 0;rotate:45deg;
        background:#8C6A52;box-shadow:0 6px 16px rgba(0,0,0,.6);border:3px solid #FAF7F3;"></div>
      <div style="position:absolute;left:50%;top:10px;transform:translateX(-50%);
        color:#FAF7F3;font:700 14px/1 system-ui;">★</div>
    </div>`,
  iconSize: [42, 52],
  iconAnchor: [21, 48],
});

// Category badge pin for points of interest (icon shown like on real maps).
const makePoiIcon = (emoji) =>
  L.divIcon({
    className: '',
    html: `<div style="display:grid;place-items:center;width:30px;height:30px;border-radius:50%;
      background:#FAF7F3;border:2.5px solid #8C6A52;box-shadow:0 3px 10px rgba(0,0,0,.45);
      font-size:15px;line-height:1;">${emoji}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

export default function MapInner({ data }) {
  const { center, zoom, project, pois, metroLines } = data;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      dragging={true}
      className="h-full w-full"
      style={{ background: '#0b1a2a' }}
    >
      {/* realistic satellite imagery */}
      <TileLayer
        attribution="&copy; Esri, Maxar, Earthstar Geographics"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        maxZoom={19}
      />
      {/* place / road labels on top */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        maxZoom={19}
      />

      {/* Metro lines (full network) */}
      {metroLines.map((line) => (
        <Fragment key={line.name}>
          {/* white casing under the colored line for a clean transit look */}
          <Polyline positions={line.path} pathOptions={{ color: '#ffffff', weight: 7, opacity: 0.6, lineCap: 'round', lineJoin: 'round' }} />
          <Polyline positions={line.path} pathOptions={{ color: line.color, weight: 4, opacity: 1, lineCap: 'round', lineJoin: 'round' }} />
          {line.stations.map((s) => (
            <CircleMarker
              key={s.name}
              center={s.coords}
              radius={5}
              pathOptions={{ color: line.color, weight: 2.5, fillColor: '#fff', fillOpacity: 1 }}
            >
              <Tooltip direction="top" offset={[0, -4]}>🚇 {s.name} · {line.name}</Tooltip>
            </CircleMarker>
          ))}
        </Fragment>
      ))}

      {/* Connectivity POIs — category pins + labels on the map */}
      {pois.map((p) => (
        <Marker key={p.name} position={p.coords} icon={makePoiIcon(p.emoji)}>
          <Tooltip permanent direction={p.dir} offset={[0, 0]} className="poi-label">
            <span className="poi-name">{p.name}</span>
            <span className="poi-mins">{p.mins}</span>
          </Tooltip>
        </Marker>
      ))}

      {/* Project */}
      <Marker position={project.coords} icon={projectIcon}>
        <Tooltip permanent direction="top" offset={[0, -46]} className="project-label">
          {project.name}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
