<template>
  <div>
    <button @click="fillData">Reset</button>
    <button @click="bubbleSort">Bubble Sort</button>
    <button @click="switchBarLocation(0,1)">Switch</button>
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
      default: 8
    },
    highestNumber: {
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
        datasets: [
          {
            data: []
          }
        ]
      };
      for (let i = 0; i < this.numberOfBars; i++) {
        this.dataCollection.labels.push(i);
        this.dataCollection.datasets[0].data.push(this.getRandomInt());
      }
      console.log(this.dataCollection.datasets[0].data);
    },
    getRandomInt(): Number {
      return (
        Math.floor(Math.random() * 3 * Math.random() * this.highestNumber) + 1
      );
    },
    switchBarLocation(firstIndex: number, secondIndex: number) {
      let firstValue: dataSet = this.dataCollection.datasets[firstIndex];
      let secondValue: dataSet = this.dataCollection.datasets[secondIndex];
      this.dataCollection.datasets[firstIndex] = secondValue;
      this.dataCollection.datasets[secondIndex] = firstValue;
    },
    bubbleSort() {
      // !DOES NOT UPDATE THE CHART BUT FILL CHART DATA DOES
      // !WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
      // Todo: for the selected element make it red
      const lengthFirstDataSet = this.dataCollection.datasets[0].data.length;
      this.dataCollection.datasets[0].data[0] = this.getRandomInt();
      // for (let i = 0; i < lengthFirstDataSet; i++) {
      //   for (let j = 0; j < lengthFirstDataSet - 1 - i; j++) {
      //     let leftValue = this.dataCollection.datasets[0].data[j];
      //     let leftIdx = this.dataCollection.labels[j];
      //     let rightValue = this.dataCollection.datasets[0].data[j + 1];
      //     let rightIdx = this.dataCollection.labels[j + 1];
      //     console.log(leftValue > rightValue);
      //     if (leftValue > rightValue) {
      //       this.dataCollection.datasets[0].data[j] = rightValue;
      //       this.dataCollection.labels[j] = rightIdx;
      //       this.dataCollection.datasets[0].data[j + 1] = leftValue;
      //       this.dataCollection.labels[j + 1] = leftIdx;
      //     }
      //   }
      // }
      console.log(this.dataCollection.datasets[0].data);
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
