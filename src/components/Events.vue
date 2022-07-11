<template>
  <div class="card">
    <div class="container" v-if="artist">
      <img :src="artistImg" alt="profile-img" />
      <h2>{{ artist.name }}</h2>
      <small>Spoty Fans: {{ artist.stats.followers }}</small>
  <div v-if="events.length == 0">
    <h2>No events to show</h2>
  </div>
      <div v-if="events !== null" class="wrapper-bio">
        <div v-for="event in events" :key="event">
          <div class="single-event">
           
          <span>Evento: </span> {{ event.title }} <span>Date: </span>
          {{ event.date }} <span>Venue: </span> {{ event.venue }}
          <span>Location: </span> {{ event.location }}
          <span>+artists: </span>
          {{ event.artists.forEach((item) => item.name + " ") }}
   
      <br>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onUpdated, ref } from "@vue/runtime-core";
export default {
  props: ["artist"],
  setup(props) {
    let artist = ref(null);
    let events = ref(null);
    let artistImg = ref(null);
    onUpdated(() => {
      artist.value = props.artist;
      artistImg.value = props.artist.visuals.avatar[0].url;
      events.value = artist.value.goods.concerts.items;
    });

    return { artist, events, artistImg };
  },
};
</script>

<style lang="scss" scoped>
.single-event {
  color: $label;
}
span {
  font-weight: 700;
  color: $text-sec;
}
</style>