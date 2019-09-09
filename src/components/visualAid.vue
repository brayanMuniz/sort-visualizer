<template>
  <div>
    <BarChart :chartData="dataCollection"></BarChart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BarChart from "./BarChart.vue";
import { dataSet, barDataType } from "@/types/barTypes";

export default Vue.extend({
  extends: BarChart,
  components: {
    BarChart
  },
  name: "visualAid",
  props: {
    numberOfBars: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      dataCollection: { labels: [], datasets: [] } as barDataType
    };
  },
  mounted() {
    //   init with default number of bars
    this.fillData();
  },
  methods: {
    //   Todo: add all the methods and trigger visual when user promps it
    fillData() {
      this.dataCollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        // Todo: generate as many bars using numberOfBars
        // Todo: look for a good blue to set as a default and a red to indicate that it was selected
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#a87979",
            data: [this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt(): Number {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
});
</script>

