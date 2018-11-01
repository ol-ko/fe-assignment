<template>
    <div class="detail-page">
        <to-do-2></to-do-2>
        <to-do-3></to-do-3>
    </div>
</template>

<script>
import ToDo2 from '../components/todos/ToDo2.vue';
import ToDo3 from '../components/todos/ToDo3.vue';

export default {
  components: {
    ToDo2,
    ToDo3,
  },
};
</script>
