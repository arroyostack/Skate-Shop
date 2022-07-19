<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url("./assets/images/main-bg.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  text-align: center;
  overflow-y: scroll;
  padding: 0.6rem;
  @include mb(700px) {
    height: 100%;
  }
}
</style>
