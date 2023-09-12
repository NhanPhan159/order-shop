<template>
  <section class="my-32">
    <div class="max-w-screen-xl mx-auto">
      <div class="w-full flex h-full">
        <div class="w-1/2">
          <img src="../../../assets//page1.png" alt="page" class="w-full" />
        </div>
        <div class="bg-gray-200 w-1/2 px-16 py-36">
          <div class="font-semibold text-4xl">
            Thesus footwear is thoughtfully designed from natural and recycled materials
          </div>
          <p class="mt-4 text-gray-500 text-xl leading-9">
            Each pair diverts 1-2 kg of waste from our waterways and landfill, reduces 20kg of CO2
            from the atmosphere, and conserves 10L of water when compared to your traditional
            leather boot.
          </p>
          <button class="mt-6 bg-black rounded-lg text-white py-3 px-8">Learn more</button>
        </div>
      </div>
    </div>
    <div class="max-w-2xl mx-auto mt-20 mb-32">
      <div class="text-center font-bold text-5xl">Try Them Out!</div>
      <p class="text-center text-gray-500 text-lg font-normal my-4">
        Easy returns as many times as you need to find the right size. Just contact our team for
        support!
      </p>
      <Accordion :multiple="true">
        <AccordionTab header="Find your size">
          <p>
            <span class="underline underline-offset-4 hover:cursor-pointer"
              >Check out our size guide</span
            >
            to find your perfect match!
          </p>
        </AccordionTab>
        <AccordionTab header="Free shipping">
          <p>
            Free shipping over $100 in Canada and the US. Check out our
            <span class="underline underline-offset-4 hover:cursor-pointer"
              >Shipping Information page</span
            >
            for more details.
          </p>
        </AccordionTab>
        <AccordionTab header="Easy returns">
          <p>
            Easy returns as many times as you need to find the right size. Just
            <span class="underline underline-offset-4 hover:cursor-pointer">contact our team</span>
            for support!
          </p>
        </AccordionTab>
        <AccordionTab header="Pay in 4">
          <p>Buy now, pay later! Pay in 4 easy instalments.</p>
        </AccordionTab>
      </Accordion>
    </div>
    <div class="max-w-screen-xl mx-auto">
      <div class="w-full flex h-full items-center">
        <div class="w-1/2 px-16">
          <div class="font-semibold text-7xl text-center">*****</div>
          <p class="mt-4 text-gray-500 text-xl leading-8 text-center">
            "They have a very nice padding in the sole which makes it comfortable to wear for long
            periods of time and these shoes definitely fit very true to size."
          </p>
          <p class="mt-4 text-gray-500 text-sm text-center">CLAIRE</p>
        </div>
        <div class="w-1/2">
          <img src="../../../assets/page2.jpg" alt="page" class="w-full" />
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto pt-32">
      <div class="text-center font-bold text-5xl">In the Press</div>
      <div class="flex justify-center items-center gap-2">
        <img src="../../../assets/press1.png" alt="press" class="flex-1" />
        <img src="../../../assets/press2.png" alt="press" class="flex-1" />
        <img src="../../../assets/press3.png" alt="press" class="flex-1" />
        <img src="../../../assets/press4.png" alt="press" class="flex-1" />
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto pt-20">
      <div class="text-center font-bold text-5xl">Join Us on Instagram</div>
      <div class="text-center font-bold text-5xl underline underline-offset-8">
        @Thesus_Outdoors
      </div>
      <div class="flex justify-center mt-10">
        <div class="flex-1 w-1/4 pr-2 h-96">
          <img
            src="../../../assets/insta1.png"
            alt="press"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="flex-1 w-1/4 pr-2 h-96">
          <img
            src="../../../assets/instar2.png"
            alt="press"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="flex-1 w-1/4 pr-2 h-96">
          <img
            src="../../../assets/insta3.png"
            alt="press"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="flex-1 w-1/4 h-96">
          <img
            src="../../../assets/insta4.png"
            alt="press"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
</script>

<style lang="scss" scoped></style>
