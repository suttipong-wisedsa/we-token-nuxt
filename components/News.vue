<template>
  <div>
    <!-- <v-card class="red justify-center d-flex align-center" style="height:50vh">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="400vw" height="450vw" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </v-card> -->
    <template>
      <div class="li">
        <v-container>
          <h1 class="text-center my-10 texttitle--text">WE Token NEWS</h1>
          <v-row style="height:60vh">
            <v-col class="d-flex justify-center">
              <v-carousel v-model="model" style="width:50vw">
                <v-carousel-item v-for="(color, i) in colors" :key="color">
                  <v-sheet :color="color" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="text-h2">
                        Slide {{ i + 1 }}
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
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
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
}
</script>
