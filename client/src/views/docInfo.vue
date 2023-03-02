<style scoped>

</style>

<template>
      <Nav />
      <div class="mx-w-5xl mb-[200px]" >
            <img src="../assets/docInfo-image.png" class="h-full w-full">
            <div class="absolute right-[200px] top-[200px] h-[250px] w-[600px] text-[#111727] flex justify-center">
                  <p class="absolute text-3xl pt-[20px] font-bold" >นางสาววิรัลยุพา เพ็ชรอินทร์</p>
                  <p class="absolute text-lg text-[#949494] font-light pt-[80px]">โรงพยาบาลW&N</p>
                  <p class="absolute text-xl pt-[140px] font-semibold">สาขาที่เชียวชาญ</p>
                  <ol 
                  class="text-md font-medium pt-[180px] pl-[100px] list-outside list-disc">
                        <li class="text-red-500" > <span  class="text-[#111727]"> สาขาออร์โธปิดิกส์</span></li>
                        <li class="text-red-500" > <span  class="text-[#111727]"> อนุสาขาโรคของกระดูกสันหลัง</span></li>
                  </ol>
            </div>
      </div>

      <div class="mx-w-5xl px-[200px]" >
            <preBan />
            <conTac />
      </div>

</template>


<script>
import Nav from "../components/Navbar.vue"
import Docnav from "../components/DocNavbar.vue"
import preBan from "../components/preBanner.vue"
import conTac from "../components/conTact.vue"


export default {
    data: () => ({
        
    }),
    components: {
        Nav, Docnav, preBan, conTac

    }
}
</script>
