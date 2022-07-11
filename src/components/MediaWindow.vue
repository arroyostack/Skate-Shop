<template>
  <div class="card">
    <div class="container" v-if="artist != null">
      <img :src="artistImg" alt="profile-img" />
      <h2>{{ artist.name }}</h2>
      <small>Spoty Fans: {{ artist.stats.followers }}</small>
      <div v-if="artist !== null">
   
          <iframe
            style="border-radius: 12px"
            :src="playerSource"
            width="100%"
            height="100%"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowtransparency="true"
          ></iframe>
       
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
    let playerSource = ref(null);
    let artistImg = ref(null);

    onUpdated(() => {
     
      artist.value = props.artist;
      playerSource.value = `https://open.spotify.com/embed/artist/${artist.value.id}?utm_source=generator`;
       artistImg.value = props.artist.visuals.avatar[0].url;
     
    });

    return { artist, playerSource, artistImg };
  },
};
</script>
