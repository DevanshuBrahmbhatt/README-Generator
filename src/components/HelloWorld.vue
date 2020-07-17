<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-banner two-line>
            <div class="white--text">
              <div class="display-1">How it will help you!!</div>
              <h5 class="text-justify">1. Click on "Insert Your Detail Button".</h5>
              <h5 class="text-justify">2. Enter Your Details.</h5>
              <h5 class="text-justify">3. Then You will have your README.md file.</h5>
              <h5 class="text-justify">4. As Markdown so can edit further as well.</h5>
            </div>
            <h4
              class="white--text"
            >The Motto Of this application is to give good template for your README.md</h4>
          </v-banner>
        </v-col>

        <v-col>
          <v-img
            src="../assets/1.png"
            aspect-ratio="1"
            max-width="500"
            max-height="500"
            class="grey lighten-2"
          ></v-img>
        </v-col>
      </v-row>
      <div class="my-2 text-center">
        <v-btn x-large color="white" class="black--text" to="/detail" dark>Insert Your Detail</v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
