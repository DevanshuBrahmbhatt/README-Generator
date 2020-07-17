<template>
  <v-app>
    <v-banner two-line class="blue">
      <v-container>
        <v-row class="white--text">
          <div class="mb-5 text-justify">
            <h2 style="line-height:1;">What is this new feature and Why is so Important?</h2>
          </div>
          <div class="mb-4 text-justify">
            <h4
              style="line-height:1.3;"
            >Github has launched a new feature. With the help of that feature, you'll have your own short bio on Github.So For that, you have to create a Repository of your username. Also, initialize with README.md.And then whatever you'll write on your README.md file that will appear as your Bio on Github. It's great for us to showcase who we are and what we did.</h4>
          </div>
        </v-row>
        <v-row class="white--text">
          <div class="mb-4 mt-3 text-justify">
            <h2 style="line-height:1;">How the gitread.me will help you?</h2>
          </div>
          <div class="mb-3 text-justify">
            <h4
              style="line-height:1.3;"
            >So For that, you are supposed to write README.md file by yourown. But using gitread you just need to give your information and the template that is shown in the below video will automatically be generated.</h4>
          </div>
        </v-row>
      </v-container>
    </v-banner>
    <v-container>
      <v-row>
        <v-col sm="12" lg="6">
          <div class="white--text">
            <div class="mb-3">
              <h1>How to do that ?!!</h1>
            </div>
            <h5 class="text-justify mb-2">1. Click on "Insert Your Detail Button".</h5>
            <h5 class="text-justify mb-2">2. Enter Your Details.</h5>
            <h5 class="text-justify mb-2">3. Then You will have your README.md file.</h5>
            <h5
              class="text-justify mb-2"
            >4. Then go to your GitHub account and create one Repo of username. Also, initialize with README.md.</h5>
            <h5
              class="text-justify mb-2"
            >5. Once You have Repo then Copy the content of README.md that you have just downloaded and pasted to remote README.md .</h5>
            <h5 class="text-justify mb-2">6. Congrats you have successfully completed that.</h5>
            <h5 class="text-justify mb-2">7. As it is Markdown file so can edit further as well.</h5>
          </div>
          <div class="mt-8">
            <h4
              class="white--text"
            >1. The Motto Of this application is to give a good template for your README.md</h4>

            <h4
              class="white--text mt-3"
            >2. Please Check Your README.md File in Preview Mode while you are updating remote README.md and remove the things that you haven't mention.</h4>
          </div>
        </v-col>

        <v-col sm="12" lg="6">
          <div style="width:600 !important">
            <v-responsive :aspect-ratio="16/9">
              <video class="responsive-video" max-width="400" height="400" controls autoplay>
                <source src="../assets/Gitread.mp4" type="video/mp4" />
              </video>
            </v-responsive>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-btn x-large color="white" class="black--text" to="/detail" dark>Insert Your Detail</v-btn>
    </div>
    <br />
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
