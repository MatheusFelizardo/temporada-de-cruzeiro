<template>
  <div class="min-h-full bg-[#053980] text-white p-12 relative">

    <div class="flex items-center gap-4 mb-12">
      <div class="w-[137px] h-[137px] flex items-center justify-center text-white">
        <img src="~/assets/img/logo-transp.png" alt="Temporada de Cruzeiros logo">
      </div>

      <h1 class="uppercase font-bernoru text-2xl lg:text-3xl lg:mb-10 ">QUEM SOMOS ?</h1>
      
    </div>
      <p class="text-lg max-w-[300px] mb-6 relative z-10">
        Me chamo Silvia, sou agente de viagens, especialista em cruziros e já viajei 
        <span class="font-neue text-2xl font-bold uppercase text-[#F2EDDB] text-stroke-gray">+ de 15 países</span> 
      </p>

      <p class="text-lg max-w-[350px] mb-6 relative z-10">
        Sou apaixonada por cruzeiros e o uso da minha experiência para ajudar a realizar os <span class="font-neue font-bold uppercase text-2xl text-[#F2EDDB] text-stroke-gray">sonhos</span> dos meus clientes
      </p>

      <div class="text-lg relative z-10">
        <p>Sou empresária, mãe e avó, formada em administração.</p>

        <p class="mb-6 lg:max-w-[44%] relative z-10">
          Fundei o <span class="text-[#FFC411] underline">Temporada de Cruzeiros</span> e, me dedico ao máximo junto aos meus parceiros, para a realização da sua <span class="font-neue font-bold uppercase text-[#F2EDDB] text-stroke-gray text-2xl">VIAGEM PERSONALIZADA</span>
        </p>
      </div>

      <div class="absolute top-0 right-0 w-[30px] md:w-[80px] xl:w-[260px] h-full bg-[#FF1616] flex items-center justify-center text-white">
        <div class="absolute top-20 right-14 xl:w-[390px] ">
          <img class="w-full h-full object-cover" src="~/assets/img/photo1.jpeg" alt="Navio de cruzeiro">
        </div>
      </div>

      <div class="absolute -bottom-0 md:bottom-auto md:top-6 right-[30px] md:right-[50px] xl:right-[500px] w-[100px] md:w-[157px] z-20">
        <img class="object-cover" src="~/assets/img/photo2.jpeg" alt="Crianças brincando na piscina">
      </div>

      <div class="absolute hidden md:block  top-[255px] md:right-[50px] xl:right-[500px] md:w-[220px] xl:w-[290px]">
        <img class="object-cover" src="~/assets/img/photo3.jpeg" alt="Crianças brincando na piscina">
      </div>

      <div class="absolute hidden md:block md:top-[550px] lg:top-[440px] xl:top-[490px] xl:right-[500px] md:right-[50px] w-[185px]">
        <img class="object-cover" src="~/assets/img/photo4.jpeg" alt="Crianças brincando na piscina">
      </div>


      <div class="social-media absolute bottom-5 flex gap-10 items-center ">
        <div class="flex gap-8">
          <NuxtLink 
          class="flex items-center justify-center border-2 border-white bg-[#FFC411] text-white font-bold px-6 py-3 uppercase mt-5 mt:mt-0"
          to="/"
          >
            INÍCIO
          </NuxtLink>
          
  
          
        </div>
      </div>
    
    
  </div>
</template>

<script setup>
  
</script>