<template>
  <div>
    <button @click="fillData">Reset</button>
    <button @click="switchBarLocation(0,4)">Switch</button>
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
      default: 5
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
      // Todo: look for a good blue to set as a default and a red to indicate that it was selected
      // ? Should I only work with one dataSet and work with its data property
      // ? How would I be able to change its color to red when "selected"
      // Todo: Figure out what it is I want and what I need
      this.dataCollection = {
        labels: [],
        datasets: []
      };
      for (let i = 0; i < this.numberOfBars; i++) {
        this.dataCollection.datasets.push({
          label: String(i),
          backgroundColor: "#f87979",
          data: [this.getRandomInt()]
        });
      }
    },
    getRandomInt(): Number {
      return Math.floor(Math.random() * 3 * Math.random() * 3) + 1;
    },
    switchBarLocation(firstIndex: number, secondIndex: number) {
      console.log(this.dataCollection.datasets[0].label);
      let firstValue: dataSet = this.dataCollection.datasets[firstIndex];
      let secondValue: dataSet = this.dataCollection.datasets[secondIndex];
      this.dataCollection.datasets[firstIndex] = secondValue;
      this.dataCollection.datasets[secondIndex] = firstValue;
      console.log(this.dataCollection.datasets[0].label);
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
