<template>
  <div class="container mx-auto">
    <NaV />
    <div>
        <a >asdnas</a>

    </div>
  </div>
</template>


<script>
import NaV from "../components/Navbar.vue";

export default {
  components: {
    NaV,
  },

  data() {
    return {
      
      checked: new Date().getDay() - 1,
      anime: [],
    };
  },


  methods: () => {},
};
</script>



<style scoped>
</style>