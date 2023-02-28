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
    <section>
        <div class="relative ">
            <div class="w-full h-[80px] px-[35px] mb-[77px] place-items-start inline-flex ">
                <img src="../assets/logologin.png" class="w-[85px]" >
                <button class="py-6 text-2xl" @click="this.$router.push('/')" >{{ pname }}</button>
            </div>

            <div class="px-[58px] mb-[45px] space-y-10" >
                <p class="underline1 text-4xl" >Welcome</p>
                <p class="text-sm text-[#70737D]" >Login, W&N Hospital is ready to serve you.</p>
            </div>

            <div class="px-[58px]"  >
                <form action="">
                    <div class="" >
                        <input type="text" name="idcard" v-model="idcard" placeholder="idcard" class="bg-[#F9F9F9] text-[#111727] text-sm w-[36%] p-2.5 pl-16 rounded-[7px]
                        focus:ring-2 focus:outline-none focus:ring-[#111727] ">
                        <hr class="w-[36%]" >
                        <img src="../assets/idcard.png" class="absolute mt-[-37px] pl-6 pointer-events-none" >
                    </div>

                    <div class="mt-[50px] " >
                        <input :type="show === true ? 'text': 'password' " name="password" placeholder="password" class="bg-[#F9F9F9] rounded-[7px] text-[#111727] text-sm p-2.5 pl-16 w-[36%]
                        focus:ring-2 focus:outline-none focus:ring-[#111727] ">
                        <hr class="w-[36%]" >
                        <img src="../assets/key.png" class="absolute mt-[-37px] pl-6 pointer-events-none" >
                        <img src="../assets/Union.png" v-if="show" @click="show = !show" class="absolute mt-[-37px] mr-10  left-[34%] " >
                        <img src="../assets/eye.png"  v-else @click="show =! show"  class="absolute mt-[-37px] left-[34%] w-[27px] h-[24px] pr-1 " >
                    </div>
                </form>
            </div>

            <div class="px-[58px] mt-[65px] space-y-3">
                <button type="text" class="button text-white bg-[#111727] rounded-[7px] text-lg p-3 text-center mr-2 mb-2 w-[36%]" @click="this.$router.push('/')">Login</button>
                    <p class="text-[#858A91] text-sm text-center w-[36%]" >Don’t have an account? <button @click="this.$router.push('register')" class="text-[#43474E]" >Sign up free ✨</button> </p>
            </div>
      
            <div class="w-3/5 absolute right-0 top-0 h-screen" >
                <img class="bg-no-repeat h-full w-full rounded-l-[32px]" src="../assets/loginPic.png" >
             </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            pname: "W&N",
            idcard: '',
            password: '',
            show: false
        };
    },
};
</script>