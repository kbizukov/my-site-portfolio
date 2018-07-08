<template lang="pug">
  router-view
</template>

<script>
import admin from "./components/admin";

export default {
  components: {
    admin
  }
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", Helvetica, sans-serif;
  line-height: 1.42;
  color: $text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;

  input,
  button,
  textarea {
    outline: none;
  }

  input,
  textarea {
    border: none;
    border-radius: 4px;
    min-height: 32px;
  }

  button {
    font-family: "Roboto", Helvetica, sans-serif;
    cursor: pointer;
    font-weight: 500;

    border: 0;
    cursor: pointer;

    &:visited,
    &:focus,
    &:active {
      outline: none;
    }
  }
}
</style>
