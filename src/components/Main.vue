<template>
  <div class="card">
    <div v-if="artist == null" class="loading-spin">
      <img src="../assets/images/loading.gif" alt="" />
      <h1>Loading Artist....</h1>
    </div>
    <div v-show="myChoice == 'profile'">
      <div class="container" v-if="artist">
        <img :src="artistImg" alt="profile-img" />
        <h2>{{ artist.name }}</h2>
        <small>Spoty Fans: {{ artist.stats.followers }}</small>

        <div class="wrapper-bio" v-if="artist.biography">
          <p>
            {{ artist.biography.replace(/<\/?[^>]+(>|$)/g, "") }}
          </p>
        </div>
      </div>
    </div>
    <div v-show="myChoice == 'media'">
      <MediaWindow :artist="artist" />
    </div>

    <div v-show="myChoice == 'related'">
      <RelatedArtists :artist="artist" @newSearch="handleReEmit" />
    </div>

    <div v-show="myChoice == 'events'">
      <Events :artist="artist" @newSearch="handleReEmit" />
    </div>
  </div>
</template>

<script>
import { onUpdated, ref, watch } from "@vue/runtime-core";
import MediaWindow from "../components/MediaWindow.vue";
import RelatedArtists from "../components/RelatedArtists.vue";
import Events from "../components/Events.vue";
import RadioMenu from "./SearchBar.vue";
export default {
  components: { MediaWindow, RelatedArtists, Events, RadioMenu },
  props: ["artist", "choice"],
  setup(props, { emit }) {
    let artist = ref(null);
    let artistImg = ref(null);
    let myChoice = ref("profile");
    onUpdated(() => {
      artist.value = props.artist;
      artistImg.value = props.artist.visuals.avatar[0].url;
      console.log(props.choice);
      myChoice.value = props.choice;
    });

    const handleReEmit = (e) => {
      emit("newSearch", e);
    };

    return {
      artist,
      artistImg,
      handleReEmit,
      myChoice,
    };
  },
};
</script>

<style scoped>
.loading-spin {
padding-top: 20rem;
}
</style>
