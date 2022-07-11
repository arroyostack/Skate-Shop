<template>
  <div class="card">
    <div class="related-container container" v-if="artist">
      <img :src="artistImg" alt="profile-img" class="related-img"/>
      <h2>{{ artist.name }}</h2>
      <small>Spoty Fans: {{ artist.stats.followers }}</small>
      <div class="related-artists">
        <div
          class="wrapper-bio"
          v-if="artist !== null"
          @click.prevent="handleClick"
        >
          <div v-for="star in related" :key="star">
            <div>
              <h2 class="related-title">{{ star.name }}</h2>
              <img :src="star.visuals.avatar[0].url" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="artist !== null" @click.prevent="handleClick"></div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onUpdated } from "@vue/runtime-core";
export default {
  props: ["artist"],
  setup(props, { emit }) {
    let artist = ref(null);
    let related = ref(null);
    let artistImg = ref(null);

    onUpdated(() => {
      artist.value = props.artist;
      related.value = artist.value.relatedContent.relatedArtists.items;
      artistImg.value = props.artist.visuals.avatar[0].url;
    });

    const handleClick = (e) => {
      emit("newSearch", e.target.parentNode.firstChild.textContent);
    };

    return { artist, artistImg, related, handleClick };
  },
};
</script>

<style lang="scss">
.card {
  text-align: center;

  .related-container {
    @include w-h($w: 80%, $h: 100%);
    @include flexMain(flex, column, null, center, center);
    margin: 0 auto;
    padding: 1rem 0;

    .wrapper-bio {
      height: 35vh;
      overflow-y: auto;
      scrollbar-width: none;
      @include mb(900px) {
        height: 30vh;
      }
      @include gridOne(2, null, null, null, 1rem);
      @include mb(968px) {
        @include gridOne(1, null, null, null, 1rem);
      }
    }

    .related-title {
      color: $text-sec;
    }

    .related-img {
      @include w-h($w: 15rem, $h: 15rem);
    }
  }
}
</style>