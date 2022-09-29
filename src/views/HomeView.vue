<template>
  <div class="d-flex">
  <div>
    <HeartBeat></HeartBeat>
    <div class="d-flex justify-center">
      <ExerciseProgress></ExerciseProgress>
      <HeartRate></HeartRate>

    </div>
  </div>

  </div>
</template>

<script>
import HeartBeat from "../components/heartBeat.vue";
import ExerciseProgress from "../components/exerciseProgress.vue";
import heartRate from "../components/heartRate.vue";
import HeartRate from "../components/heartRate.vue";

export default {
  components: { HeartBeat, ExerciseProgress, heartRate, HeartRate },
  name: "Home",
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    value: [0, 3, 4, 6, 3, 7, 8, 4, 4, 5, 6, 2, 7],
    fill: false,
    type: "trend",
    autoLineWidth: false,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
};
</script>
