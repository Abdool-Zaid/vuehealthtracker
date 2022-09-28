<template>
  <v-flex >

    <div>
      <v-text-field
      label="search symptoms"
      prepend-inner-icon="mdi-store-search-outline"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
      label="search symptoms"
      prepend-inner-icon="mdi-store-search-outline"
      ></v-text-field>
    </div>
  </v-flex>
  </template>

<script>

  export default {
    name: 'Home',
data:()=>({
    width:2,
radius:10,
padding:8,
lineCap:'round',
value:[0,3,4,6,3,7,8,4,4,5,6,2,7,],   
fill:false,
type:'trend',
autoLineWidth:false, 
  })
}
</script>
