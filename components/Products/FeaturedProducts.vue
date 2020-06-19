<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide v-for="featuredProduct in featuredProducts" :key="featuredProduct.id">
      <featured-product :featured-product="featuredProduct"/>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import {
  Swiper,
  SwiperSlide,
  directive
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import FeaturedProduct from '~/components/Products/FeaturedProduct.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    FeaturedProduct
  },
  directives: {
    swiper: directive
  },
  props: {
    featuredProducts: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        mousewheel: true,
        keyboard: {
          enabled: true
        },
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  @media (max-width: 960) {
    .swiper-button-next {
      right: 20px;
      transform: rotate(90deg);
    }

    .swiper-button-prev {
      left: 20px;
      transform: rotate(90deg);
    }
  }
</style>
