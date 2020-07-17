<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-btn href="/" text>
          <div class="headline">gitread.me</div>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://devanshubrahmbhatt.github.io/portfolio/" target="_blank" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content></v-content>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
#app {
  font-family: "Lato", sans-serif;
  font-size: 20px;
  background: #2b3137;
}
</style>
