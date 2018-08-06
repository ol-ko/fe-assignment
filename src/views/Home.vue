<template>
  <div class="home">
    <div class="todo">
      <h2>TODO 1: Navigation to property details</h2>
      <p>User should be able to navigate to the details page by clicking on the property.</p>
    </div>

    <ul class="property-list">
      <li v-for="property in properties" class="property">
        <div class="img">
          <img v-if="property.images" :src="property.images[0]" alt="property.title">
        </div>
        <p>
          {{ property.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['properties']),
};
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  $property-img-width: 160px;
  $property-img-height: 100px;
  $property-image-placholder-background: #eaeaea;

  .property-list{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .property {
    padding: $layout-space-base;
    clear: both;

    .img {
      width: $property-img-width;
      height: $property-img-height;
      position: relative;
      overflow: hidden;
      float: left;
      background: $property-image-placholder-background;

      img {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    p {
      margin-left: $property-img-width + ($layout-space-base / 2);
    }
  }
</style>
