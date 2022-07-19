<template>
  <div class="my-container">
    <img src="../assets/logo.png" alt="" />
    <div class="radio_container">
      <input
        type="radio"
        name="radio"
        id="one"
        value="profile"
        v-model="choice"
        checked
      />
      <label for="one">Profile</label>
      <input
        type="radio"
        name="radio"
        id="two"
        value="media"
        v-model="choice"
      />
      <label for="two">Media</label>
      <input
        type="radio"
        name="radio"
        id="three"
        value="events"
        v-model="choice"
      />
      <label for="three">Events</label>
      <input
        type="radio"
        name="radio"
        id="four"
        value="related"
        v-model="choice"
      />
      <label for="four">More</label>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onUpdated, watch } from "@vue/runtime-core";

export default {
  setup(props, { emit }) {
    let choice = ref("profile", "artist");
    onUpdated(() => {
      emit("userChoice", choice.value);
    });

    return {
      choice,
    };
  },
};
</script>

<style scoped lang="scss">
// ------------------

.my-container {
  @include w-h($w: 100%, $h: 100%);
  @include flexMain(
    $dis: flex,
    $just: flex-start,
    $align: center,
    $direction: column
  );
  padding: 1rem;
  padding-top: 7rem;
  @include mb(700px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 1rem;
  }

  .radio_container {
    @include flexMain($dis: flex, $direction: column);
    @include mb(700px) {
      flex-direction: row;
    }
    box-shadow: inset 0.5px 0.5px 2px 0 rgba(0, 0, 0, 0.15);
  }

  input[type="radio"] {
    appearance: none;
    display: none;
  }

  img {
    @include w-h($w: 9rem, $h: 9rem);
    margin-bottom: 2rem;
    @include mb(700px) {
      @include w-h($w: 4rem, $h: 4rem);
      margin-bottom: 0;
      margin-right: .2rem;
    }
  }

  label {
    @include flexMain($dis: flex, $just: center, $align: center);
    @include w-h($w: 7rem, $h: 6rem);
    font-weight: 500;
    border-radius: $radious-15;
    overflow: hidden;
    color: $label;

    @include mb(700px) {
      height: 3rem;
      border-radius: $radious-15;
      font-size: 1.5rem;
      
    }
    @include mb(500px) {
      font-size: 1rem;
    }
  }

  input[type="radio"]:checked + label {
    background-color: $sec-bg;
    color: $text-sec;
    transition: 0.3s;
  }
}
</style>