<template>
  <!-- <v-card class="red justify-center d-flex align-center" style="height:50vh">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="400vw" height="450vw" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </v-card> -->
  <div class="li">
    <h1 class="text-center my-10 texttitle--text">WE Token NEWS</h1>
    <v-container class="d-flex justify-center">
      <div class="hidden-sm-and-down">
        <v-carousel v-model="model" style="width: 24vw">
          <v-carousel-item v-for="(color, i) in colors" :key="i">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2 mt-3">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fweservetoken&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="350"
                    height="500"
                    style="border: none; overflow: hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="hidden-md-and-up">
        <v-col class="d-flex justify-center hidden-md-and-up">
          <v-carousel v-model="model" style="width: 93vw">
            <v-carousel-item v-for="(color, i) in colors" :key="i">
              <v-sheet :color="color" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2 mt-3 mr-2">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fweservetoken&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="365"
                      height="500"
                      style="border: none; overflow: hidden"
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </div>
    </v-container>
  </div>
</template>
<style>
.hiegth {
  height: 500px;
}
</style>
<script>
export default {
  data: () => ({
    model: 0,
    colors: ["li", "li", "li", "li", "li"],
  }),
};
</script>