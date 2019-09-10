<template>
  <!-- Todo:  Time option for how fast animation should happen, max and low int values for bars -->
  <div id="app" class="container-fluid">
    <navbar></navbar>
    <!-- Todo:  Time option for how fast animation should happen, max and low int values for bars -->
    <div class="row container-fluid mx-auto py-auto">
      <div class="col-md-8 mx-auto my-auto py-auto">
        <!-- Todo: add in props: type of sort, and how much data there would be in bars -->
        <!-- Todo: adjust how tall this should be. Preferiabilly it woudl be a rectangle  -->
        <visualAid></visualAid>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import visualAid from "@/components/visualAid.vue";
import navbar from "@/components/navbar.vue";
import bootstrap from "bootstrap";
export default Vue.extend({
  name: "app",
  components: {
    navbar,
    visualAid
  }
});
</script>

<style lang="scss">
@import "custom";
@import "~bootstrap/scss/bootstrap";
</style>
