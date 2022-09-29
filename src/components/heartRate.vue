<template>
  <v-card
  elevation="2"
  outlined
  shaped
    class="ma-4 d-flex 
    justify-space-around"
    color="grey lighten-4"
    max-width="300"
    flex
  >
  <div>

    <v-card-title>
      average Rate
    </v-card-title>
    <v-card-subtitle>
      66bpm 
    </v-card-subtitle>
  </div>
<v-icon size="124" color="red" >mdi-heart-pulse</v-icon>
  </v-card>
</template>

<script>
  export default {
    name: 'heartRate',

  }
</script>
