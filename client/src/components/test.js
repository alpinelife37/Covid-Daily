import React from "react";
import axios from "axios";
import { Dimmer, Loader, Segment, Button } from "semantic-ui-react";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";

class GeoJsonMap extends React.Component {
  state = {
    geodata: null,
    geourl: null
  };
  componentDidMount() {
    axios({
      url: "https://covid19-data.p.rapidapi.com/geojson-ww",
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid19-data.p.rapidapi.com",
        "x-rapidapi-key": "1e604574f3msh5f2b072afbe3555p1f4ebajsn89dc88914d1d"
      }
    }).then(response => {
      this.setState({
        geodata: response.data
      });
      console.log(this.state.geodata.features);
    });
  }

  handleSubmit() {
    
}
  getGeoMap = e => {
    switch(e.target.name) {
      case "usa":
        this.state.geourl = "https://covid19-data.p.rapidapi.com/geojson-us"
        break;
      case "worldmap":
        this.state.geourl = "https://covid19-data.p.rapidapi.com/geojson-ww"
        break;
      default:
    }
    axios({
      url: this.state.geourl,
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid19-data.p.rapidapi.com",
        "x-rapidapi-key": "1e604574f3msh5f2b072afbe3555p1f4ebajsn89dc88914d1d"
      }
    }).then(response => {
      this.setState({
        geodata: response.data
      });
      console.log(this.state.geodata.features);
    });
  }

  


  render() {
    const { geodata } = this.state;
    if (!geodata) {
      return (
        <Segment style={{ height: 200 }}>
          <Dimmer active inverted>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </Segment>
      );
    }
    const LeafletMarkers = geodata.features.map(marker => (
      <Marker
        position={{
          lat: marker.properties.latitude,
          lon: marker.properties.longitude
        }}
        key={`marker_${marker.properties.name}`}
      >
        <Popup>
          <span>{marker.properties.name}</span>
          <br />
          <span>Confirmed - {marker.properties.confirmed}</span>
          <br />
          <span>Deaths - {marker.properties.deaths}</span>
          <br />
        </Popup>
      </Marker>
    ));
    return (
      <div>
   <Button.Group widths='2'>
      <Button name="worldmap" onClick={this.getGeoMap}>World Map</Button>
      <Button.Or />
      <Button name="usa" onClick={this.getGeoMap}>United States</Button>
    </Button.Group>
        <Map
          stlye={{ height: 100, width: 100 }}
          id="map"
          center={[38.25, -17.75]}
          zoom={3}
          
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {LeafletMarkers}
          <GeoJSON data={geodata} />
        </Map>
      </div>
    );
  }
}

export default GeoJsonMap;
