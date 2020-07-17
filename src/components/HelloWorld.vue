<template>
  <v-app>
    <v-container>
      <v-row>
        <v-banner class="indigo white" two-line>
          <div class="white--text">
            <div class="display-1">We are DSC (Developer Student Club)</div>

            <p class="subtitle-1 text-justify">
              Three line text string example
              with two actions. One to two lines is preferable. Three
              lines should be considered the maximum string length on
              with two actions. One to two lines is preferable. Three
              lines should be considered the maximum string length on
              with two actions. One to two lines is preferable. Three
              lines should be considered the maximum string length on
              desktop in order to keep messages short and actionable.
            </p>
          </div>
        </v-banner>
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
