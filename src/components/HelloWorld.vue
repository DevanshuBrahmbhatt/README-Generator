<template>
  <v-app>
    <v-banner two-line class="blue">
      <v-container>
        <v-row class="white--text">
          <div class="mb-5 text-justify">
            <h2 style="line-height:1;">What is this new feature and why is so Important?</h2>
          </div>
          <div class="mb-4 text-justify">
            <h4 style="line-height:1.3;">
              Github has recently just launched new feature. With the help of that feature you'll have your own short bio on the Github.
              So For that you have to create a Repository of your username. Also intialize with README.md.
              So what ever you'll write on your README.md that will appear on Bio.
            </h4>
          </div>
        </v-row>
        <v-row class="white--text">
          <div class="mb-4 mt-3 text-justify">
            <h2 style="line-height:1;">How the gitread.md will help you?</h2>
          </div>
          <div class="mb-3 text-justify">
            <h4
              style="line-height:1.3;"
            >So for that you are suppouse to write README.md file yourown. But using gitread you are just need to give your information and your README.md will genearate.</h4>
          </div>
        </v-row>
      </v-container>
    </v-banner>
    <v-container>
      <v-row>
        <v-col>
          <div class="white--text">
            <div class="display-1 mb-3">How to do that ?!!</div>
            <h5 class="text-justify mb-2">1. Click on "Insert Your Detail Button".</h5>
            <h5 class="text-justify mb-2">2. Enter Your Details.</h5>
            <h5 class="text-justify mb-2">3. Then You will have your README.md file.</h5>
            <h5
              class="text-justify mb-2"
            >4. Then go to your github account and create one Repo of username. Also intialize with README.md.</h5>
            <h5
              class="text-justify mb-2"
            >5. Once You have Repo then Copy the content of README.md that you have just downloaded and paste to remote README.md</h5>
            <h5 class="text-justify mb-2">6. Congrats you have sucessfully completed that.</h5>
            <h5 class="text-justify mb-2">7. As it is Markdown file so can edit further as well.</h5>
          </div>
          <div class="mt-4">
            <h4
              class="white--text"
            >The Motto Of this application is to give good template for your README.md</h4>
          </div>
        </v-col>

        <v-col>
          <v-img
            src="../assets/3.png"
            alt="gitreadme"
            height="400"
            width="600"
            class="grey lighten-2"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-btn x-large color="white" class="black--text" to="/detail" dark>Insert Your Detail</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
