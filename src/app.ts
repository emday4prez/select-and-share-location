import axios from 'axios'
import { Loader } from "@googlemaps/js-api-loader"

const API_KEY = process.env.GOOGLE_API_KEY;
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const loader = new Loader({
  apiKey: `${API_KEY}`,
  version: "weekly"
});

type GoogleGeoCodingResponse = {
 results: {geometry: {location: {lat: number, lng: number}}}[];
 status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressHandler(event: Event){
 event.preventDefault();
 const enteredAddress = addressInput.value

 // send to google api
 axios.get<GoogleGeoCodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`
 ).then(response => {
  if (response.data.status !== 'OK'){
   throw new Error('Could not fetch location');
  }
  const coordinates = response.data.results[0].geometry.location;
//   const map = new google.maps.Map(document.getElementById('map')!, {
//   center: coordinates,
//   zoom: 16
// });
loader.load().then(() => {
 const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: coordinates,
    zoom: 16,
  });
new google.maps.Marker({
    position: coordinates,
    map: map,
  });

});


 }).catch(err => {
  alert(err.message)
  console.log(err)
 })


}


form.addEventListener('submit', searchAddressHandler)