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
        <div class="relative">
            <div class="w-full h-[80px] px-[35px] mb-[77px] place-items-start inline-flex">
                <img src="../assets/logologin.png" class="w-[85px]" >
                <button @click="this.$router.push('Home')" class="py-6 text-2xl"  >{{ pname }}</button>
            </div>

            <div class="px-[58px] mb-[45px] space-y-10" >
                <p class="underline1 text-4xl" >Register</p>
                <p class="text-sm text-[#70737D]" >Register, W&N Hospital is ready to serve you.</p>
            </div>

            <div class="px-[58px]" >
                <form class="space-y-[25px] " action="">
                    <div>
                        <input type="text" name="name" v-model="name" placeholder="name" class="bg-[#F9F9F9] text-[#111727] text-sm w-[36%] p-2.5 pl-16 rounded-[7px]
                        focus:ring-2 focus:outline-none focus:ring-[#111727] ">
                        <hr class="w-[36%]" >
                        <img src="../assets/User1.png" class="absolute mt-[-37px] h-[22px] pl-6 pointer-events-none" > 
                    </div>

                    <div class="" >
                        <input type="text" name="idcard" v-model="idcard" placeholder="idcard" class="bg-[#F9F9F9] text-[#111727] text-sm w-[36%] p-2.5 pl-16 rounded-[7px]
                        focus:ring-2 focus:outline-none focus:ring-[#111727] ">
                        <hr class="w-[36%]" >
                        <img src="../assets/idcard.png" class="absolute mt-[-37px] pl-6 pointer-events-none" >
                    </div>

                    <div class=" " >
                        <input :type="show === true ? 'text': 'password' " name="password" placeholder="password" class="bg-[#F9F9F9] rounded-[7px] text-[#111727] text-sm p-2.5 pl-16 w-[36%]
                        focus:ring-2 focus:outline-none focus:ring-[#111727] ">
                        <hr class="w-[36%]" >
                        <img src="../assets/key.png" class="absolute mt-[-37px] pl-6 pointer-events-none" >
                        <img src="../assets/Union.png" v-if="show" @click="show = !show" class="absolute mt-[-37px] mr-10  left-[34%] " >
                        <img src="../assets/eye.png"  v-else @click="show =! show"  class="absolute mt-[-37px] left-[34%] w-[27px] h-[24px] pr-1 " >
                    </div>

                    <div>
                        <input type="text" name="phone" v-model="phone" placeholder="phone" class="bg-[#F9F9F9] text-[#111727] text-sm w-[36%] p-2.5 pl-16 rounded-[7px]
                        focus:ring-2 focus:outline-none focus:ring-[#111727] ">
                        <hr class="w-[36%]" >
                        <img src="../assets/telephone.png" class="absolute mt-[-37px] pl-6 h-[22px] pointer-events-none" > 
                    </div>

                </form>
            </div>

            <div class="px-[58px] mt-[65px] space-y-3">
                <button type="text" class="button text-white bg-[#111727] rounded-[7px] text-lg p-3 text-center mr-2 mb-2 w-[36%]" @click="this.$router.push('login')" >Register</button>
            </div>
      
            <div class="absolute w-3/5  right-0 top-0 h-screen" >
                <img class="bg-no-repeat h-full w-full rounded-l-[32px]" src="../assets/loginPic.png" alt="">
             </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            pname: "W&N",
            name: '',
            idcard: '',
            password: '',
            phone: '',
            show: false
        };
    },
};
</script>