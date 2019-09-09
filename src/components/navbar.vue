<template>
  <!-- Todo: add spaces and lines between all the options -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- Todo: whenever any are clicked send message to visualAid sort -->
        <li class="nav-item active" v-for="(type, index) in typeOfSorts" :key="index">
          <a class="nav-link" href="#">{{type}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "navbar",
  data() {
    return {
      // Todo: add atags so it can render with a pop up link to the thing
      typeOfSorts: [
        "Bubble",
        "Insertion",
        "Selection",
        "Quick",
        "Heap",
        "Merge"
      ]
    };
  }
});
</script>

