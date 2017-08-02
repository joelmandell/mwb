<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn large class="info">
          Organisera scheman.
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn large class="info">
          Organisera annatn.
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
        <v-flex xs8>
          <h4>Hooray</h4>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
