<style  scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
*{
    font-family: 'Kanit';
}
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
.underline-2 {
    background-image: linear-gradient(90deg, #111727, #FF5757);
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    text-decoration: none;
    width: 130px;
    padding-bottom: 5px;

}
.underline3 {
    background-image: linear-gradient(90deg, #FFFFFF,#FFFFFF);
    background-size: 100% 2px;
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
    <div>
        <Nav />
       
        <div class="mt-5 mx-auto xl:px-[200px] lg:px-[150px] md:px-[100px]">
            <section >
                <div class="relative flex ">
                    <div class="absolute z-[-5] right-0 w-4/5 mt-[-50px]">
                        <img src="../assets/banner.png" class="absolute w-[925px] h-[447px] right-0 top-[100px] mr-0 ">
                    </div>
                    <div class="absolute z-10 mt-[200px] bg-[#E9E9E9] w-[454px] h-[199px] pl-20 rounded-xl " >
                        <div class="place-items-center inline-flex mt-10 mb-8 space-x-10 ">
                            <img src="../assets/book.png" class="ml-2 mr-3" >
                            <img src="../assets/doctorIcons.png" >
                            <img src="../assets/Contact.png" >
                        </div>         
                        <div class="place-items-center inline-flex space-x-10 " >
                            <p>Knowledge</p>
                            <p>Doctor</p>
                            <p>Contact</p>
                        </div>  
                    </div>
                </div>
            </section>


            <div class="mt-[700px]">
                <div class="bg-dark-800 border-[1px] rounded-xl bg-[#F3F3F3] h-[480px] flex justify-between ">
                    <div class="mt-[30px]">
                        <b class="underline1 text-xl ml-10 " >Prescript</b>
                    </div>
                    <div class="absolute z-[0] right-0 w-4/5 mt-[120px]">
                        <img src="../assets/banner2.png" class="w-[500px] h-[309px] " >
                    </div>
                    <div class="absolute z-[10] right-[22%] w-[28%] mt-[185px] border-2 rounded-xl bg-zinc-100 opacity-80 p-10" >
                        <p class="text-2xl mb-3">Check  your prescript order</p>
                        <hr>
                        <p class="mt-6" >see your personal prescription  <br> in <b>prescript</b> now</p>
                    </div>
                    
                </div>
            </div>

            
            <div class="mx-w-5xl mt-[200px]" >
                <b class="underline1 text-xl ml-10 font-bold" >Doctor</b>
                <div class="flex wrap group">
                    <div v-for="(item,index) in doctorCard" :key="index" class="mt-[50px] transition duration-300 group-hover:scale-y-[1] hover:!scale-y-110 cursor-pointer overflow-hidden " >
                        <img :src="item.docPic" class="bg-slate-800 z-[-10] object-cover  ">
                    <div class=" px-3 text-white bg-slate-800 w-[100%] h-100% opacity-0 transition-opacity group-hover:!opacity-100 " >
                        <p class="underline3 absolute mt-[-110px] text-md" >{{ item.doc_name }}</p>
                        <div class="details -bottom-10" >
                            <img class="absolute mt-[-71px]" :src="item.maskk" >
                            <p class="absolute mt-[-70px]  pl-7" > {{ item.hos_name }}</p>
                            <p class="absolute mt-[-40px]  text-sm" >ประวัติ >></p>
                        </div>
                            <!-- opacity-0 group-hover:opacity-100 hover:!scale-100 -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- group-hover:saturate-100 hover:!saturate-60 group-hover:brightness-100 hover:!brightness-10 mix-blend-luminosity-->
            
            <div class="mt-[200px] mb-[50px] ">
                <div class="border-[1px]  rounded-xl bg-[#F3F3F3]">
                    <div>
                        <div class="px-[45px] pt-[40px] ">
                            <h1 class="text-[32px] underline-2">Contact</h1>
                        </div>
                    </div>
                    <div>
                        <div class="mt-[20px]">
                            <h3 class="px-[45px]">👉 นางสาววิรัลยุพา เพ็ชรอินทร์</h3>
                            <div class="mt-[20px] flex justify-between w-full px-[60px]">
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">Gmail</h3>
                                </div>

                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">facebook</h3>
                                </div>
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2 ">Instragram</h3>
                                </div>
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">Github</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pb-[32px] mt-[20px]">
                            <h3 class="px-[45px]">👉 นายวิวรรธน์ เหลียงกอบกิจ</h3>
                            <div class="mt-[20px] flex justify-between w-full px-[60px]">
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">Gmail</h3>
                                </div>
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">facebook</h3>
                                </div>
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">Instragram</h3>
                                </div>
                                <div class='rounded-xl  w-[165px] bg-[#d7d7d7]'>
                                    <h3 class="text-center p-2">Github</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import Nav from "../components/Navbar.vue"
import Docnav from "../components/DocNavbar.vue"
import docPicc from "../assets/doctor1.png"
import mask from "../assets/Mask.png"

export default {
    data: () => ({
        doctorCard: [
            {
                doc_name: 'นายวิวรรธน์ เหลียง',
                hos_name: 'โรงพยาบาล N',
                docPic: docPicc,
                maskk: mask
            },
            {
                doc_name: 'น.ส.วิรัลยุพา เพ็ชร',
                hos_name: 'โรงพยาบาล N',
                docPic: docPicc,
                maskk: mask

            },
            {
                doc_name: 'น.ส.วิรัลยุพา เพ็ชร',
                hos_name: 'โรงพยาบาล N',
                docPic: docPicc,
                maskk: mask

            },
            {
                doc_name: 'นายวิวรรธน์ เหลียง',
                hos_name: 'โรงพยาบาล N',
                docPic: docPicc,
                maskk: mask
            },
            {
                doc_name: 'น.ส.วิรัลยุพา เพ็ชร',
                hos_name: 'โรงพยาบาล N',
                docPic: docPicc,
                maskk: mask

            },
        
    ]}),
    components: {
        Nav,Docnav

    }
}
</script>
