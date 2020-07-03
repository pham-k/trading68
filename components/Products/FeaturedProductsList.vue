<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="featuredProduct in featuredProducts"
      :key="featuredProduct.id"
    >
      <featured-products-list-item :featured-product="featuredProduct" />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>

<script>
import {
  Swiper,
  SwiperSlide,
  directive
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import FeaturedProductsListItem from '~/components/Products/FeaturedProductsListItem.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    FeaturedProductsListItem
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
        slidesPerView: 5,
        spaceBetween: 50,
        mousewheel: true,
        keyboard: {
          enabled: true
        },
        centeredSlides: true,
        // loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
            spaceBetween: 10
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
