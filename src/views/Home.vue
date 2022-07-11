<template>
  <div class="wrapper">
    <div class="dashboard-grid">
      <div class="side">
        <SideBar @userChoice="handleChoice" :artist="artist" />
      </div>
      <div class="main">
        <Main :artist="artist" @newSearch="handleReEmit" :choice="choice" />
      </div>
      <div class="search">
        <SearchBar @userTerm="handleEmit" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import searchArtist from "../composables/getSpotify.js";
import Main from "../components/Main.vue";
import SearchBar from "../components/SearchBar.vue";
import SideBar from "../components/SideBar.vue";
import { onMounted, onUpdated } from "@vue/runtime-core";
export default {
  components: { Main, SearchBar, SideBar },
  setup(props, { emit }) {
    // VARIABLES
    let tempTerm = ref(null);
    let term = ref(null);
    let artist = ref();
    const getArtist = searchArtist();
    let choice = ref("profile");

    //this function will bring a default artist profile when the user first load the app
    const firstSearch = async () => {
      const data = await getArtist("U2");

      if (data.artist._rawValue.status === false) {
        // prevents error when no artist matches
        alert("no artist matches");
        return;
      }
      artist.value = data.artist._rawValue;
    };
    firstSearch();

    //this function will gather all info about the artist matching the term emited from searchBar component
    const handleEmit = async (e) => {
      const data = await getArtist(e);

      if (data.artist._rawValue.status === false) {
        // prevents error when no artist matches
        alert("no artist matches");
        return;
      }
      artist.value = data.artist._rawValue;
    };

    //new search

    const handleReEmit = (e) => {
      const searchAgain = async (e) => {
        term.value = null;
        term.value = e;
        // -------------------
        const data = await getArtist(e);

        if (data.artist._rawValue.status === false) {
          // prevents error when no artist matches
          alert("no artist matches");
          return;
        }
        artist.value = data.artist._rawValue;
        choice.value = "profile";
        window.scrollTo(0, 0);
        console.log(artist.value);

        // -------------------
      };
      searchAgain(e);
    };
    const handleChoice = (e) => {
      choice.value = e;
      console.log(choice.value);
    };

    return { handleEmit, artist, handleReEmit, handleChoice, choice };
  },
};
</script>

<style lang="scss">
.wrapper {
  background: $overlay;
  border-radius: $radious-15;
  padding: 0.6rem;
  height: 100vh;
}

.dashboard-grid {
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 90% 10%;
  @include mb(700px) {
    @include flexMain($dis: flex, $direction: column);
  }

  .search {
    grid-column-start: 2;
  }

  .side {
    grid-row: span 2;
  }

  .main {
    height: 85%;
  }
}

.card {
  box-shadow: none;

  .container {
    @include w-h($w: 80%, $h: 80%);
    margin: 0 auto;
    padding: 1rem 0;
    @include flexMain(flex, column, null, center, center);
    img {
      @include w-h($w: 20rem, $h: 20rem);
      margin: 1.5rem;
      border-radius: $radious-15;
      border: 5px solid $img-border;
      @include mb(42.5rem) {
        @include w-h($w: 10rem, $h: 10rem);
      }
    }
    h2 {
      font-size: $title;
      font-weight: 700;
      margin: 1rem 0 0.5rem 0;
    }
    small {
      color: $text-sec;
      font-size: $text;
      font-weight: 300;
      margin-bottom: 2rem;
      @include mb(425px) {
        font-size: 1.4rem;
      }
    }
    iframe {
      opacity: 0.7;
      @include w-h($w:80rem, $h:30rem);
      @include menu-radious();
      @include mb(1064px) {
        width: 50rem;
      }
      @include mb(680px) {
        width: 100%;
      }
    }

    .wrapper-bio {
      @include w-h($w:85%, $h:30vh);
      overflow-y: auto;
      scrollbar-width: none;
      font-weight: 500;
      font-size: $text;
      margin: 0 auto;
      @include mb(680px) {
        height: 40vh;
      }
    }
  }
}
</style>
