<template>
   <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list shaped>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
<router-view></router-view>  
  </v-main>
  </v-app></template>

<script>

export default {
  name: 'App',
  data: () => ({ drawer: null, 
    selectedItem: 1,
      items: [
        { text: 'home', icon: 'mdi-finance' },
        { text: 'dashboard', icon: 'mdi-toolbox-outline' },
        { text: 'user', icon: 'mdi-weight-lifter' },
        { text: 'messages', icon: 'mdi-forum' },
        { text: 'settings', icon: 'mdi-application-cog' },
        { text: 'help', icon: 'mdi-help-network-outline' },
      ],
  }),
 
};
</script>
