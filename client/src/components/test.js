import React from 'react';
import axios from 'axios';
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
//import worldGeoJSON from 'geojson-world-map';

class GeoJsonMap extends React.Component {
  state={
    geodata: []
  }
//   componentDidMount() {
//     axios({
//         url:
//           "https://covid19-data.p.rapidapi.com/geojson-na",
//         method: "GET",
//         headers: {
//           "x-rapidapi-host": "covid19-data.p.rapidapi.com",
//           "x-rapidapi-key": "1e604574f3msh5f2b072afbe3555p1f4ebajsn89dc88914d1d",
//         }
//       }).then((response) => {
        
//         this.setState({geodata: response.data})
//         console.log(this.state.geodata)
//         L.geoJSON(geojsonFeature).addTo(map);
//       })
// }
  render() {
    return (
      <LeafletMap
        // center={[50, 10]}
        // zoom={6}
        // maxZoom={10}
        // attributionControl={true}
        // zoomControl={true}
        // doubleClickZoom={true}
        // scrollWheelZoom={true}
        // dragging={true}
        // animate={true}
        // easeLinearity={0.35}
      >
        <GeoJSON
        type="featurecollection"
          data={this.state.geodata}
          
          // style={() => ({
          //   color: '#4a83ec',
          //   weight: 0.5,
          //   fillColor: "#1a1d62",
          //   fillOpacity: 1,
          // })}
        />
      </LeafletMap>
    );
  }
}

export default GeoJsonMap



