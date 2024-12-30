<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr2" title="Lavora con noi" text="Lavora con noi" />
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
          class="align-self-stretch radius-sm" style="border: 0; width: 100%; min-height: 100%"
          allowfullscreen></iframe>
      </div>
      <div class="container">
        <div class="contact-area aos-item">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">Lavora con noi</h6>
            <h2 class="title">Unisciti al nostro gruppo</h2>
          </div>
          <form class="dz-form dzForm contact-bx" method="POST" @submit.prevent="submit()">
            <input type="hidden" class="form-control" name="dzToDo" value="Contact" />
            <div class="dzFormMsg"></div>
            <div class="row sp10">
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Nome *"
                    v-model="formData.Name"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Cognome *"
                     v-model="formData.LastName"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Telefono"
                     v-model="formData.Phone"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Cellulare"
                     v-model="formData.MobilePhone"
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Email *"
                     v-model="formData.FromEmail"
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <textarea
                    rows="5"
                    class="form-control"
                    required
                    placeholder="Messaggio *"
                     v-model="formData.Body"
                  ></textarea>
                </div>
              </div>
              <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div v-else class="col-sm-12 text-center">
                <button
                  name="submit"
                  type="submit"
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
import bnr2 from '@/assets/images/work/workwithus.jpg'
import axios from 'axios';
import Swal from 'sweetalert2'

export default defineComponent({
  setup() {
    return {
      bnr2,
      contactDtail: [
        {
          dataName: '01',
          icon: 'flaticon-telephone',
          title: 'Chiamaci',
          text: '+39 333/9123388',
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
  data() {
    return {
      loading: false,
      formData: {
        RequestType: "",
        PropertyType: "",
        Province: "",
        Location: "",
        Address: "",
        NumberRooms: "",
        NumberBedRooms: "",
        NumberServices: "",
        MQ: "",
        Garden: false,
        Terrace: false,
        Lift: false,
        Furnished: false,
        Heating: "",
        Box: "",
        Price: "",
        Information: "",
        Name: "",
        LastName: "",
        FromEmail: "",
        Subject: "",
        Body: "",
        Phone: "",
        MobilePhone: "",
      }
    }
  },
  methods: {
      async submit(){
        this.loading = true;
        axios.post('https://thinkhomebe.azurewebsites.net/api/Generic/WorkWithUs', this.formData)
        .then(() => {
          this.loading = false;
          this.formData.Name = "";
          this.formData.LastName = "";
          this.formData.FromEmail = "";
          this.formData.Subject = "";
          this.formData.Body = "";
          this.formData.Phone = "";
          this.formData.MobilePhone = "";
          Swal.fire({
            title: "Richiesta inviata con successo",
            icon: "success"
          });
        })
        .catch((error) => {
          this.loading = false;
          Swal.fire({
            title: "Si è verificato un errore",
            icon: "success"
          });
          console.log(error)
        })
        
      },
    },
})
</script>

<style scoped>
@media screen and (max-width: 991px) {

.col-sm-12 {
  flex: 0 0 auto;
  width: 100%;
}
}

@media screen and (max-width: 575px) {

.col-sm-12 {
  flex: 0 0 auto;
  width: 100%;
}
}

@media screen and (max-width: 400px) {

.col-sm-12 {
  flex: 0 0 auto;
  width: 100%;
}
}
</style>
