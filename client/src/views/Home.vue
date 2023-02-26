
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
</style>


<template>
    <div>
        <Nav />
       
        <div class="mt-5 mx-auto xl:px-[200px] lg:px-[150px] md:px-[100px]">
            <div>

            </div>
            <div>

            </div>

            <div>

            </div>


            <div class="mt-[1000px] mb-[50px] ">
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
                                    <h3 class="text-center p-2">Instragram</h3>
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
export default {
    data: () => ({

    }),
    components: {
        Nav,Docnav
    }
}
</script>
