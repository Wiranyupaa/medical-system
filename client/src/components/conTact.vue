<style  scoped>
.underline-2 {
    background-image: linear-gradient(90deg, #111727, #FF5757);
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    text-decoration: none;
    width: 130px;
    padding-bottom: 5px;

}

hr {
      border-top: 2px solid #6F6565;
      margin-top: 6px;
}
</style>

<template>
      <div class="mt-[180px] mb-[50px] ">
            <div class="border-[1px] h-[300px] rounded-xl bg-[#F3F3F3]">
                  
                        <div class="px-[45px] pt-[10px] ">
                              <h1 class="text-[32px] underline-2">Contact</h1>
                        </div>
                  
                  <div>
                        <div class=" mt-[20px] " v-for="(proContact, index) in contactfoot" :key="index">
                              <h3 class="px-[45px]">👉{{ proContact.produce_name }}</h3>
                              <div class=" mt-[20px] flex justify-between w-full px-[60px]  ">
                                    <button
                                          class='relative flex items-center justify-center overflow-hidden p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  '>
                                          <h3
                                                class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">
                                                {{ proContact.produce_gmail }}</h3>
                                          <span
                                                class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Gmail</span>
                                    </button>

                                    <button
                                          class='relative flex items-center justify-center overflow-hidden p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  '>
                                          <h3
                                                class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">
                                                {{ proContact.produce_fb }}</h3>
                                          <span
                                                class="absolute flex rounded-xl items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Facebook</span>
                                    </button>

                                    <button
                                          class='relative flex items-center justify-center overflow-hidden  p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  '>
                                          <h3
                                                class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">
                                                {{ proContact.produce_ig }}</h3>
                                          <span
                                                class="absolute flex rounded-xl items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Instragram</span>
                                    </button>

                                    <button
                                          class="relative flex items-center justify-center overflow-hidden  p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  ">
                                          <h3
                                                class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">
                                                {{ proContact.produce_git }}</h3>
                                          <span
                                                class="absolute flex rounded-xl items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Github</span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      data: () => ({
            contactfoot: [
                  {
                        produce_name: ' นางสาววิรัลยุพา เพ็ชรอินทร์',
                        produce_gmail: 'wiiranyupa@gmail.com',
                        produce_fb: 'Wiranyupa Niew',
                        produce_ig: 'niniewwys',
                        produce_git: 'Wiranyupaa'

                  },
                  {
                        produce_name: ' นายวิวรรธน์ เหลียงกอบกิจ',
                        produce_gmail: 'wiwatwin1801@gmail.com',
                        produce_fb: 'wiwat liangkobkit',
                        produce_ig: 'xviiivin',
                        produce_git: 'xviiivin'

                  },
            ],
      }),
methods: {
},
components: {
},
watch: {
}
}
</script>