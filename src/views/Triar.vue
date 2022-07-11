<template>
  
</template>

<script>
export default {
      // let geoPosition = ref(null);
    // let currentWeather = ref(null);
// const getGeolocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else {
    //     alert("Geolocation is not supported by this browser.");
    //   }
    //   function showPosition(position) {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //     geoPosition.value = {
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     };
    //   }
    // };
    // getGeolocation();
    // watch(geoPosition, (currentValue, oldValue) => {
    //   console.log(currentValue);
    //   console.log(oldValue);
    //   geoPosition.value = currentValue;
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "66139f69ffmsh57f75d90d3171e6p11b8b4jsn622e760fc912",
    //       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    //     },
    //   };
    //   fetch(
    //     `https://weatherapi-com.p.rapidapi.com/current.json?q=${geoPosition.value.latitude}%20${geoPosition.value.longitude}`,
    //     options
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       currentWeather.value = data;
    //       console.log(data);
    //     })
    //     .catch((err) => console.error(err));
    // });

       const tick = () => {
      const now = new Date();
      const mill = now.getMilliseconds();
      const seconds = now.getSeconds();
      const mins = now.getMinutes();
      const hours = now.getHours();
      // ${hours} : ${mins} : ${seconds} : ${mill}`
  
    };
    setInterval(tick, 1000);
}
</script>

<style>

</style>