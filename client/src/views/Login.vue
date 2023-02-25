<style scoped>
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
    border-top: 2px solid #E3E3E5;
    margin-top: 6px;
}
</style>

<template>
    <div class="grid grid-rows-1">
        <!-- ฝั่งขวา -->
        <div class="grid-flow-col-1 w-3/5 rounded-l-lg absolute right-[-120px] top-0 h-full ">
            <img class="bg-no-repeat bg-cover h-full" src="../assets/loginPic.png" alt="">
        </div>

        <!-- ฝั่งซ้าย -->
        <div class="grid-flow-col-1 w-2/5 ">
            <div class="w-[80px] inline-flex place-items-start mb-[75px] ml-[30px] ">
                <img class="w-[75px] h-[76px]" src="../assets/logologin.png" alt="" />
                <p class="mt-[20px] text-2xl">{{ pname }}</p>
            </div>

            <div class="ml-[54px] mb-[50px] space-y-10 ">
                <a class="underline1 text-[#111727] text-4xl">Welcome </a>
                <p class="text-[#70737D] text-sm ">Login, W&N Hospital is ready to serve you.</p>
            </div>

            <div class="ml-[54px] mr-[54px] mb-[60px] ">
                <div class="mb-[50px]">
                    <input type="text" id="idCard" v-model="idCard" placeholder="ID Card" required
                        class="bg-[#F9F9F9] text-sm rounded-[7px]   w-full p-2.5 dark:bg-[#F9F9F9] pr-3 pl-16">
                    <img src="../assets/idcard.png"
                        class="w-[26px]] h-[19px] absolute mt-[-30px] pl-6 pointer-events-none focus-within:text-gray-600">
                    <hr>
                </div>
                <div>
                    <input :type="show === true ? 'text' : 'password'" id="password" v-model="password"
                        placeholder="password" required
                        class="bg-[#F9F9F9] text-sm rounded-[7px] w-full p-2.5 dark:bg-[#F9F9F9] pr-3 pl-16">
                    <img src="../assets/key.png" class="w-[2ถpx]] h-[19px] absolute mt-[-30px] pl-6 pointer-events-none">
                    <img src="../assets/eye.png" class="w-[20px]] h-[20px] absolute mt-[-30px] ml-[450px] cursor-pointer"
                        v-if="show" @click="show = !show">
                    <img src="../assets/Union.png" class="w-[18px]] h-[18px] absolute mt-[-30px] ml-[451px]" v-else
                        @click="show = !show">
                    <hr>
                </div>
            </div>

            <div class="ml-[54px] mr-[54px] space-y-3 ">
                <button type="button"
                    class="text-white bg-[#111727] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-300 font-medium w-full rounded-lg text-lg px-2.5 py-2.5 text-center mr-2 mb-2">Login</button>
                <p class="text-[#858A91] text-sm text-center">Don’t have an account? <b class="text-[#43474E]">Sign up free
                        ✨</b> </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pname: "W&N",
            idcard: '',
            idCard: '',
            password: '',
            show: false

        };
    },
};
</script>