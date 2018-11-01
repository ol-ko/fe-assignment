<template>
  <div class="home">
    <to-do-1></to-do-1>

    <ul class="listing-list">
      <li v-for="listing in listings" :key="listing.id" class="listing">
        <div class="img">
          <img v-if="listing.images" :src="listing.images[0]" alt="listing.title">
        </div>
        <p>
          {{ listing.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ToDo1 from '../components/todos/ToDo1.vue';

export default {
  components: {
    ToDo1,
  },
  computed: mapState(['listings']),
};
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  $listing-img-width: 160px;
  $listing-img-height: 100px;
  $listing-image-placeholder-background: #eaeaea;

  .listing-list{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .listing {
    padding: $layout-space-base;
    clear: both;

    .img {
      width: $listing-img-width;
      height: $listing-img-height;
      position: relative;
      overflow: hidden;
      float: left;
      background: $listing-image-placeholder-background;

      img {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    p {
      margin-left: $listing-img-width + ($layout-space-base / 2);
    }
  }
</style>
