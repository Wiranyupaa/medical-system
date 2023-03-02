<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

* {
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
    background-image: linear-gradient(90deg, #FFFFFF, #FFFFFF);
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
            <section class="mb-[650px]">
                <div class="relative flex ">
                    <div class="absolute z-[-5] right-0 w-4/5 mt-[-50px]">
                        <img src="../assets/banner.png" class="absolute w-[925px] h-[447px] right-0 top-[100px] mr-0 ">
                    </div>
                    <div class="absolute z-10 mt-[200px] bg-[#E9E9E9] w-[454px] h-[199px] pl-20 rounded-xl ">
                        <div class="place-items-center inline-flex mt-10 mb-8 space-x-10 ">
                            <img src="../assets/book.png" class="ml-2 mr-3">
                            <img src="../assets/doctorIcons.png">
                            <img src="../assets/Contact.png">
                        </div>
                        <div class="place-items-center inline-flex space-x-10 ">
                            <p>Knowledge</p>
                            <p>Doctor</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            </section>

            <preBan  />
            
            <div class="mx-w-5xl mt-[150px]">
            <b class="underline1 text-xl ml-10 font-bold">Doctor</b>
            <div class="flex wrap group">
                <div v-for="(item, index) in doctorCard" :key="index"
                    class="mt-[50px] transition duration-300 group-hover:scale-y-[1] hover:!scale-y-110 cursor-pointer overflow-hidden ">
                    <img :src="item.docPic" class="bg-slate-800 z-[-10] object-cover  ">
                    <div
                        class=" px-3 text-white bg-slate-800 w-[100%] h-100% opacity-0 transition-opacity group-hover:!opacity-100 ">
                        <p class="underline3 absolute mt-[-110px] text-md">{{ item.doc_name }}</p>
                        <div class="details -bottom-10">
                            <img class="absolute mt-[-71px] " :src="item.maskk">
                            <p class="absolute mt-[-70px]  pl-7"> {{ item.hos_name }}</p>
                            <p class="absolute mt-[-40px]  text-sm">ประวัติ >></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-[180px] mb-[50px] ">
                <div class="border-[1px] h-[300px] rounded-xl bg-[#F3F3F3]">
                    <div>
                        <div class="px-[45px] pt-[10px] ">
                            <h1 class="text-[32px] underline-2">Contact</h1>
                        </div>
                    </div>
                    <div>
                        <div class=" mt-[20px] " v-for="(proContact, index) in contactfoot" :key="index">
                            <h3 class="px-[45px]">👉{{ proContact.produce_name }}</h3>
                            <div class=" mt-[20px] flex justify-between w-full px-[60px]  ">
                                <button
                                    class='relative flex items-center justify-center overflow-hidden p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  '>
                                    <h3 class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">{{ proContact.produce_gmail }}</h3>
                                    <span class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Gmail</span>
                                </button>

                                <button
                                    class='relative flex items-center justify-center overflow-hidden p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  '>
                                    <h3 class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">{{ proContact.produce_fb }}</h3>
                                    <span class="absolute flex rounded-xl items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Facebook</span>
                                </button>

                                <button
                                    class='relative flex items-center justify-center overflow-hidden  p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  '>
                                    <h3 class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">{{ proContact.produce_ig  }}</h3>
                                    <span class="absolute flex rounded-xl items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Instragram</span>
                                </button>

                                <button
                                    class="relative flex items-center justify-center overflow-hidden  p-4 px-[50px] py-4 rounded-xl h-[35px] w-[200px] bg-[#d7d7d7] transition 1s ease-out group  ">
                                    <h3 class="absolute rounded-xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease ">{{ proContact.produce_git }}</h3>
                                    <span class="absolute flex rounded-xl items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Github</span>
                                </button>
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
import preBan from "../components/preBanner.vue"


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

            }],
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
    components: {
        Nav, Docnav, preBan

    }
}
</script>
