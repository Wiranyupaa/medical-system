<style  scoped>

.underline1 {
    background-image: linear-gradient(90deg, #111727, #FF5757);
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    text-decoration: none;
    background-repeat: no-repeat;
    padding-bottom: 10px;
    display: inline;
    padding-right: 50px;
}
hr {
    border-top: 2px solid #6F6565;
    margin-top: 6px;
}
</style>


<template>
      <div class="mt-[100px]">
      <div class="bg-dark-800 border-[1px] rounded-xl bg-[#F3F3F3] h-[480px] flex justify-between ">
          <div class="mt-[30px]">
              <b class="underline1 text-xl ml-10 ">Prescript</b>
          </div>
          <div class="absolute z-[0] right-0 w-4/5 mt-[120px]">
              <img src="../assets/banner2.png" class="w-[500px] h-[309px] ">
          </div>
          <div
              class="absolute z-[10] right-[22%] w-[28%] mt-[185px] border-2 rounded-xl bg-zinc-100 opacity-80 p-10">
              <p class="text-2xl mb-3">Check your prescript order</p>
              <hr>
              <p class="mt-6">see your personal prescription <br> in <b>prescript</b> now</p>
          </div>
      </div>
  </div>
</template>
<script>

export default {
    data: () => ({
        
    }),
    methods: {
    },
    components: {
    },
    watch: {
    },
    
}
</script>