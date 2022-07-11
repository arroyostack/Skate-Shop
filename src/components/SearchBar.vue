<template>
  <div class="">
    <!-- <img src="../assets/logo.png" alt="" class="side-img" /> -->
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="tempTerm"
        placeholder="Enter artist name. Ex: Queen"
      />

      <button>Go!</button>
    </form>
    <!-- END OF FORM -->
    <!-- ====================================================== -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup(props, { emit }) {
    let tempTerm = ref(null);
    let term = ref(null);

    const handleSubmit = () => {
      term.value = null;
      term.value = tempTerm.value;
      emit("userTerm", term.value);
    };
    return {
      handleSubmit,
      tempTerm,
    };
  },
};
</script>

<style  lang="scss">
input {
  @include sectionBox();
  width: 40vw;
  border-radius: $radious-15;
  font-family: $font-main;
  font-size: 1.6rem;
  border: none;
  padding: 1rem;
  text-align: center;
  color: $label;
  border: none;
}

button {
  margin-left: 1rem;
  background: $sec-bg;
  border: none;
  padding: 1rem;
  font-family: $font-main;
  font-size: $text;
  border-radius: $radious-15;
  color: $label;
}

button:hover {
  background: $sec-bg;
}
</style>