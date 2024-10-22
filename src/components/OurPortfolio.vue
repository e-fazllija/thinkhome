<template>
  <div class="container-fluid mb-5">
    <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">
      <Swiper
        class="swiper-container swiper-portfolio lightgallery aos-item"
        :slides-per-view="4"
        :space-between="30"
        :loop="true"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 }
        }"
        :modules="module"
        :autoplay="{ delay: 1500 }"
        :speed="1500"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="({ img, setStyle }, ind) in ourBlog"
          :key="ind"
        >
          <div :class="`dz-box overlay style-1 ${setStyle}`">
            <div class="dz-media">
              <img :src="img" alt="" />
            </div>
            <div class="dz-info">
              <span :data-src="img" class="view-btn lightimg" >
                <img :src="img" alt="" style="display: none" />
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Lightgallery>
  </div>
  <!-- <div class="content-inner bg-secondary subscribe-area">
    <div class="container">
      <div class="row subscribe-content">
        <div class="col-lg-6 aos-item">
          <div class="section-head style-1 mb-0">
            <h6 class="sub-title text-primary">NEWSLETTER</h6>
            <h2 class="title text-white">Stay Updated With Us !</h2>
          </div>
        </div>
        <div class="col-lg-6 aos-item">
          <form
            class="dzSubscribe dz-subscription mt-3"
            method="post"
            ref="form"
            @submit.prevent="sendEmail"
          >
            <div class="dzSubscribeMsg Msg dz-subscription-msg"></div>
            <div class="input-group">
              <input
                name="dzEmail"
                required
                class="form-control"
                placeholder="Enter Your Email Address..."
                type="email"
                v-model="message"
              />
              <button
                name="submit"
                value="Submit"
                type="submit"
                @click="notify"
                class="btn btn-primary btn-rounded"
              >
                <span>Subscribe Now</span>
                <i class="m-l10 fas fa-plus scale08"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import work_pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-3.jpg'
import work_pic4 from '@/assets/images/work/work-1/pic-4.jpg'
import work_pic5 from '@/assets/images/work/work-1/pic-5.jpg'
import work_pic6 from '@/assets/images/work/work-1/pic-6.jpg'
import work_pic7 from '@/assets/images/work/work-1/pic-7.jpg'
import work_pic8 from '@/assets/images/work/work-1/pic-8.jpg'
import work_pic9 from '@/assets/images/work/work-1/pic-9.jpg'
import work_pic10 from '@/assets/images/work/work-1/pic-10.jpg'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
// @ts-nocheck
import emailjs from '@emailjs/browser'
import { toast } from 'vue3-toastify'

export default defineComponent({
  components: { Swiper, SwiperSlide, Lightgallery },
  setup() {
    const message = ref('')
    const form = ref<HTMLFormElement | null>(null)

    const notify = () => {
      if (message.value) {
        toast('Successfull Send', {
          autoClose: 1000
        })
      } else {
        toast('Enter Email', {
          autoClose: 1000
        })
      }
    }

    return {
      notify,
      message,
      form,
      ourBlog: [
        {
          img: work_pic1,
          // subtitle: 'INTERIOR DESIGN',
          // title: 'Modern House Interior',
          // text: 'New York',
          setStyle: 'mt-5'
        },
        {
          img: work_pic2,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          //text: 'Paris'
          setStyle: 'mt-5'

        },
        {
          img: work_pic3,
          // subtitle: 'INTERIOR DESIGN',
          // title: 'Modern Family House,',
          // text: 'Italy',
          setStyle: 'mt-5'
        },
        {
          img: work_pic4,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project, ',
          // text: 'Paris'
          setStyle: 'mt-5'

        },
        {
          img: work_pic5,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          // text: 'Paris',
          setStyle: 'mt-5'
        },
        {
          img: work_pic6,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          // text: 'Paris',
          setStyle: 'mt-5'
        },
        {
          img: work_pic7,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          // text: 'Paris',
          setStyle: 'mt-5'
        },
        {
          img: work_pic8,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          // text: 'Paris',
          setStyle: 'mt-5'
        },
        {
          img: work_pic9,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          // text: 'Paris',
          setStyle: 'mt-5'
        },
        {
          img: work_pic10,
          // subtitle: 'ARCHITECTURAL',
          // title: 'Residential Project,',
          // text: 'Paris',
          setStyle: 'mt-5'
        }
      ],
      module: [Autoplay]
    }
  },
  data: () => ({
    plugins: [lgThumbnail, lgZoom]
  }),

  methods: {
    async sendEmail() {
      const form = this.$refs.form as HTMLFormElement
      await emailjs.sendForm('emailId', 'template_0byuv32', form, 'qUDIPykc776NYHv4m').then(
        () => {
          console.log('SUCCESS! OK')
          this.notify
        },
        () => {
          console.log('FAILED...')
        }
      )
      this.message = ''
    }
  }
})
</script>

<style scoped>
.content-inner {
  background-image: url(../assets/images/background/bg2-1.png);
  background-position: center;
}
</style>
