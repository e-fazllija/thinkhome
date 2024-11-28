<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr2" title="Valuta il tuo immobile" text="Valuta il tuo immobile" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 m-b30 aos-item"
            v-for="({ dataName, icon, title, text, text2 }, ind) in contactDtail"
            :key="ind"
          >
            <div class="icon-bx-wraper style-8 bg-white" :data-name="dataName">
              <div class="icon-md m-r20">
                <span class="icon-cell text-primary"><i :class="icon"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="tilte m-b10">{{ title }}</h4>
                <p class="m-b0">
                  {{ text }}<br />
                  {{ text2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner-1 pt-0">
      <div class="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.9715352011317!2d12.836399376219518!3d41.82891107124728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13257f9392c2da5d%3A0x1bced43d5b6f2683!2sThinkHome%20-Progettazioni%20-Edilizia-%20Investimenti!5e0!3m2!1sit!2sit!4v1731944561395!5m2!1sit!2sit"
          class="align-self-stretch radius-sm"
          style="border: 0; width: 100%; min-height: 100%"
          allowfullscreen
        ></iframe>
      </div>
      <div class="container">
        <div class="contact-area aos-item">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">Contattaci</h6>
            <h2 class="title">Inserisci i dati</h2>
          </div>
          <form class="dz-form dzForm contact-bx" method="POST">
            <input type="hidden" class="form-control" name="dzToDo" value="Contact" />
            <div class="dzFormMsg"></div>
            <div class="row sp10">
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzFirstName"
                    placeholder="Nome"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzLastName"
                    placeholder="Cognome"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzEmail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzPhoneNumber"
                    placeholder="Cell."
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzOther"
                    placeholder="Oggetto"
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <textarea
                    name="dzMessage"
                    rows="5"
                    class="form-control"
                    placeholder="Messaggio"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-recaptcha">
                  <div class="g-recaptcha"></div>
                  <input
                    class="form-control d-none"
                    style="display: none"
                    data-recaptcha="true"
                    required
                    data-error="Please complete the Captcha"
                  />
                </div>
              </div>
              <div class="col-sm-12 text-center">
                <button
                  name="submit"
                  type="reset"
                  value="submit"
                  class="btn btn-primary btn-rounded"
                >
                  Invia <i class="m-l10 fas fa-caret-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import { defineComponent } from 'vue'
import bnr2 from '@/assets/images/banner/bnr2.jpg'
import axios from 'axios';

export default defineComponent({
  setup() {
    return {
      bnr2,
      contactDtail: [
        {
          dataName: '01',
          icon: 'flaticon-telephone',
          title: 'Chiamaci',
          text: '+39 333/9123388,',
          text2: '+39 06/95595263'
        },
        {
          dataName: '02',
          icon: 'flaticon-email',
          title: 'Inviaci una E-mail',
          text: 'info@thinkhome.it',
          text2: '   '
        },
        {
          dataName: '03',
          icon: 'flaticon-placeholder',
          title: 'Indirizzo',
          text: 'Viale Ungheria, 91,',
          text2: 'Zagarolo, Roma, Italia'
        }
      ]
    }
  },
  components: { CommonBanner },
  methods: {
      async getAnswer() {
        const { data } = await axios.post("https://yesno.wtf/api");
      },
    },
})
</script>

<style scoped></style>
