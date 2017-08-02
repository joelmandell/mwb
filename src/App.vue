<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile :key="'navItems'+i" 
          v-for="(item,i) in navItems" 
          v-if="signedIn == item.whenAuthed" 
          router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native="sideNav = !sideNav"
      class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Veckomötet</router-link>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        
        <v-btn flat :key="'navItems'+i" 
          v-for="(item,i) in navItems" 
          v-if="signedIn == item.whenAuthed" 
          router :to="item.link"
          >
          <v-icon left>{{item.icon}}</v-icon>
            {{item.title}} 
        </v-btn>
        
      </v-toolbar-items>

    </v-toolbar>
    <main>
      <router-view></router-view>
   </main>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        signedIn: true,
        navItems: [
          {
            icon: 'schedule',whenAuthed:true,title:'Scheman',link:'/schedules'
          },
          {
            icon: 'supervisor_account',whenAuthed:true,title:'Medverkande',link:'/participators'
          },
          {
            icon: 'settings',whenAuthed:true,title:'Inställningar',link:'/settings'
          },
          {
            icon: 'lock_open',whenAuthed:false,title:'Logga in'
          },
          {
            icon: 'lock_outline',whenAuthed:true,title:'Logga ut'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
