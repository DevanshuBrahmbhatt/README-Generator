<template>
  <v-app>
    <v-row class="white--text">
      <h3>What is it?</h3>

      <h4>So Github has just launched ne feature. With the help of that feature you'll have your bio on Github.</h4>
    </v-row>
    <v-row class="white--text">
      <h3>How to Do that?</h3>

      <h4>So For that you have to create a Repository of your username. Also intialize with README.md.</h4>
    </v-row>
    <v-row class="white--text">
      <h3>How the Bio will appear?</h3>

      <h4>So what ever you'll write on your README.md that will appear on Bio.</h4>
    </v-row>
    <v-row class="white--text">
      <h3>How the gitread.md will help you?</h3>

      <h4>So for that you are suppouse to write README.md file yourown. But using gitread you are just need to give your information and your README.md will genearate.</h4>
    </v-row>
    <v-row>
      <v-col>
        <v-banner two-line>
          <div class="white--text">
            <div class="display-1">How to do that ?!!</div>
            <h5 class="text-justify">1. Click on "Insert Your Detail Button".</h5>
            <h5 class="text-justify">2. Enter Your Details.</h5>
            <h5 class="text-justify">3. Then You will have your README.md file.</h5>
            <h5
              class="text-justify"
            >4. Then go to your github account and create one Repo of username. Also intialize with README.md.</h5>
            <h5
              class="text-justify"
            >5. Once You have Repo then Copy the content of README.md that you have just downloaded and paste to remote README.md</h5>
            <h5 class="text-justify">6. Congrats you have sucessfully completed that.</h5>
            <h5 class="text-justify">7. As it is Markdown file so can edit further as well.</h5>
          </div>
          <h4
            class="white--text"
          >The Motto Of this application is to give good template for your README.md</h4>
        </v-banner>
      </v-col>

      <v-col>
        <v-img src="../assets/3.png" alt="gitreadme" class="grey lighten-2"></v-img>
      </v-col>
    </v-row>
    <div class="my-2 text-center">
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
