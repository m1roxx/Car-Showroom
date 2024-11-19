document.addEventListener('DOMContentLoaded', function () {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map container not found');
      return;
    }
  
    const map = L.map('map').setView([48.0196, 66.9237], 5); 
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    const dealerships = [
      { name: 'Astana Dealership', coords: [51.1694, 71.4491] },
      { name: 'Almaty Dealership', coords: [43.2389, 76.8897] },
      { name: 'Shymkent Dealership', coords: [42.3417, 69.5901] },
      { name: 'Aktobe Dealership', coords: [50.2839, 57.1663] },
      { name: 'Kostanay Dealership', coords: [53.2196, 63.6281] }
    ];
  
    dealerships.forEach(dealership => {
      L.marker(dealership.coords)
        .addTo(map)
        .bindPopup(`<b>${dealership.name}</b><br>Visit us here!`);
    });
  });
  