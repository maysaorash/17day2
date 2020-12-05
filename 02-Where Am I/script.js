const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");
const apiKey = "1d034200-3668-11eb-92d4-75137161fa98";  
const whereAmI = function (lat, lng) {
    let full =`https://app.geocodeapi.io/api/v1/reverse?apikey=1d034200-3668-11eb-92d4-75137161fa98&point.lat=${lat}&point.lon=${lng}`
console.log(full)
    return fetch(full).then((response)=>{
      return response.ok ? response.json() : Promise.reject(Error('Unsuccessful response'))
    }).then((data)=>{
      console.log(data);
      console.log(`You are in ${data.features[0].properties.locality}, country of ${data.features[0].properties.country}`)
    }).catch((error)=>{
    console.log(error);
  });
}
    // console.log(whereAmI('52.508','13.381'))
    console.log(whereAmI(latitudeInput.value,longitudeInput.value))
btn.addEventListener("click", displayCountry);