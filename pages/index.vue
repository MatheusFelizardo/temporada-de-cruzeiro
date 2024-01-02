<template>
  <div class="h-full bg-[#053980] text-white p-6 md:p-5 xl:p-12 relative overflow-x-hidden">
    <h1 class="uppercase font-bernoru text-xl md:text-2xl xl:text-4xl mb-10 text-center max-w-full md:text-left md:max-w-[56%]">Suas&nbsp;férias estão&nbsp;esperando por&nbsp;você!</h1>

    <div class="flex flex-col items-center justify-center md:max-w-xs text-center">
      <p class="mb-5">
        Curioso sobre pacotes de cruzeiros com preço imperdível e pagamento parcelado em até 
        <span class="font-neue font-bold uppercase text-[#FFC411] text-stroke-gold">12 x sem juros</span> 
        que tal? 
      </p>

      <a 
      class="border-2 border-white bg-[#FF0902] text-white font-bold px-6 py-3"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5521970059010&text=Olá, gostaria de maiores informações sobre os pacotes de viagem.">
        CLIQUE AQUI 
      </a>
    </div>

    <div class="social-media justify-center mt-20 md:mt-0 md:justify-normal md:absolute bottom-5 flex gap-10 items-center md:flex-col lg:flex-row">
      <div class="flex flex-col gap-8">
        <a 
        class="flex items-center justify-center border-2 border-white bg-[#FFC411] text-white font-bold p-3 text-xs md:text-md sm:px-6 sm:py-3 uppercase"
        target="_blank"
        href="https://www.instagram.com/temporadadecruzeiros/">
          Instagram
        </a>

        <a 
        class="flex items-center justify-center border-2 border-white bg-[#FFC411] text-white font-bold p-3 text-xs md:text-md sm:px-6 sm:py-3 uppercase "
        target="_blank"
        href="https://www.facebook.com/temporadadecruzeiro">
          Facebook
        </a>

        <NuxtLink 
        class="flex items-center justify-center border-2 border-white bg-[#FFC411] text-white font-bold p-3 text-xs md:text-md sm:px-6 sm:py-3 uppercase"
        to="/about"
        >
          QUEM SOMOS
        </NuxtLink>
      </div>

      <div class="w-[137px] h-[137px] flex items-center justify-center text-white">
        <img src="~/assets/img/logo-transp.png" alt="Temporada de Cruzeiros logo">
      </div>
    </div>

    <div id="desktop-grid" class="hidden md:block absolute right-0 top-0 w-full sm:w-[70%] h-full">
      <div class="absolute bottom-0 w-full left-[50%] sm:left-[20%] md:-left-[5%] lg:left-[8%] max-w-[250px] md:max-w-[300px] xl:max-w-[480px] xl:-left-3 flex items-center justify-center text-white">
        <img src="~/assets/img/luggage.png" alt="Mala de viagem">
      </div>
      <div class="absolute right-0 hidden md:flex w-[44%] h-full bg-gray-400 items-center justify-center text-white">
        <img class="w-full h-full object-cover" src="~/assets/img/boat.png" alt="Navio de cruzeiro">
        
      </div>
      
      <div class="absolute top-[2%] -right-5 sm:right-12 md:right-[35%] xl:right-[39%] rotate-[15deg] sm:-rotate-[15deg] flex items-center justify-center text-white">
        <img class="object-cover w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] xl:w-[190px] xl:h-[190px] rounded-3xl border-4" src="~/assets/img/photo5.jpg" alt="Crianças brincando na piscina">
      </div>

      <div class="absolute top-[20%] md:top-[32%] -right-5 sm:right-24 md:right-[41%] w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] xl:w-[180px] xl:h-[180px] rotate-[25deg] flex items-center justify-center text-white">
        <img class="object-cover rounded-3xl border-4 " src="~/assets/img/tirolesa.png" alt="Crianças brincando na piscina">
      </div>

      <div class="absolute top-[39%] md:top-[60%] -right-5 sm:right-10 md:right-[40%] -rotate-[11deg] flex items-center justify-center text-white">
        <img class="object-cover w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] xl:w-[180px] xl:h-[180px] rounded-3xl border-4 " src="~/assets/img/criancas.jpeg" alt="Crianças brincando na piscina">
      </div>


    </div>
    
    <div id="mobile-grid" class="md:hidden mt-10">
      <div class="fixed bottom-0 -right-16 w-full max-w-[160px] ">
        <img src="~/assets/img/luggage.png" alt="Mala de viagem">
      </div>
      <div class="flex flex-col max-h-[300px]">
        <div class="rotate-[4deg] w-fit">
          <img class="object-cover w-[120px] h-[120px] rounded-3xl border-4" src="~/assets/img/photo5.jpg" alt="Crianças brincando na piscina">
        </div>

        <div class="rotate-[12deg] w-fit relative left-20 -top-6">
          <img class="object-cover w-[120px] h-[120px] rounded-3xl border-4" src="~/assets/img/tirolesa.png" alt="Crianças brincando na piscina">
        </div>

        <div class="-rotate-[16deg] w-fit relative -top-16">
          <img class="object-cover w-[120px] h-[120px] rounded-3xl border-4 " src="~/assets/img/criancas.jpeg" alt="Crianças brincando na piscina">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
  
</script>