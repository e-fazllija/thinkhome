<template>
  <section class="content-inner-1 bg-light service-area">
    <div class="container">
      <div class="row align-items-center section-head style-1">
        <div class="col-lg-6 aos-item aos-init aos-animate">
          <h5 class="text-primary sub-title">POPULAR SERVICES</h5>
          <h2 class="title">Our Featured Services</h2>
        </div>
        <div class="col-lg-6 aos-item aos-init aos-animate">
          <p class="m-b0">
            Cras in lectus eget lectus aliquet posuere ac fermentum dui. Aliquam nisi ligula,
            posuere a accumsan et, pellentesque nec elit. Donec odio velit, porta a purus id,
            vulputate sodales ellentesque habitant morbi.
          </p>
        </div>
      </div>
      <div class="row align-items-center">
        <div
          class="col-lg-4 col-md-6 m-lg-b30 aos-item aos-init aos-animate"
          v-for="({ img, title, text, icon }, ind) in services"
          :key="ind"
        >
          <div class="icon-bx-wraper style-6" :style="`background-image: url(${img})`">
            <div class="icon-lg">
              <span class="icon-cell">
                <i :class="icon"></i>
              </span>
            </div>
            <div class="icon-content">
              <h4 class="dz-title">
                {{ title }}<br />
                {{ text }}
              </h4>
              <p>
                Phasellus metus metus, luctus vitae convallis quis, condimentum vel enim nullam
                laoreet tincidunt.
              </p>
              <RouterLink :to="{ name: 'services_details', params: { id: 1 }}" class="btn btn-primary"
                ><i class="las la-arrow-right"></i
              ></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="py-5 bg-secondary"
    :style="`background-image: url(${bg2_1}); background-position: center`"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 aos-item">
          <div class="section-head style-1 mb-3 mb-lg-0">
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
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import services_pic1 from '@/assets/images/services/pic1.jpg'
import services_pic2 from '@/assets/images/services/pic2.jpg'
import services_pic3 from '@/assets/images/services/pic3.jpg'
import bg2_1 from '@/assets/images/background/bg2-1.png'
import emailjs from '@emailjs/browser'
import { toast } from 'vue3-toastify'

export default defineComponent({
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
      services: [
        { icon: 'flaticon-blueprint-1', img: services_pic1, title: ' Floor Plan', text: 'Design' },
        { icon: 'flaticon-crane', img: services_pic2, title: 'Construction', text: 'Work' },
        {
          icon: 'flaticon-interior-design-1',
          img: services_pic3,
          title: 'Interior',
          text: 'Designing'
        }
      ],
      bg2_1,
      form,
      notify,
      message
    }
  },

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

<style scoped></style>
