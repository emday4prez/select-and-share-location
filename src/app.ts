import axios from 'axios'

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;



function searchAddressHandler(event: Event){
 event.preventDefault();
 const enteredAddress = addressInput.value

 // send to google api
 axios.get();
}


form.addEventListener('submit', searchAddressHandler)