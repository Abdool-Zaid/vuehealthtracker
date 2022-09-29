<template>
  <v-card
    elevation="2"
    outlined
    shaped
    class="ma-4"
    color="grey lighten-4"
    max-width="300"
  >
    <v-card-title class="pa-2"> exercise </v-card-title>
    <div class="text-center">
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value"
        color="teal"
      >
        {{ value }}
      </v-progress-circular>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>
