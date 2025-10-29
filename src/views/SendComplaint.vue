<template>
    <div class="page-content bg-white">
        <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
            <div class="container-fluid">
                <div class="dz-bnr-inr-entry">
                    <h1>Invia un reclamo</h1>
                    <!-- Breadcrumb Row -->
                    <nav aria-label="breadcrumb" class="breadcrumb-row">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <RouterLink to="/">Home</RouterLink>
                            </li>
                            <li class="breadcrumb-item">Invia un reclamo</li>
                        </ul>
                    </nav>
                    <!-- Breadcrumb Row End -->
                </div>
            </div>
        </div>
        <section class="content-inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 m-b30 aos-item"
                        v-for="({ dataName, icon, title, text, text2 }, ind) in contactDtail" :key="ind">
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
                        <h6 class="sub-title text-primary">Invia il tuo reclamo</h6>
                        <h2 class="title">MODULO RECLAMO</h2>
                    </div>
                    <form class="dz-form dzForm contact-bx" method="POST" @submit.prevent="submit()">
                        <div class="row sp10">
                            <div class="col-sm-12 m-b20">
                                <h4>Informazioni personali</h4>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Nome *"
                                        v-model="formData.Name" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Cognome *"
                                        v-model="formData.LastName" />
                                </div>
                            </div>
                            <div class="col-sm-12 m-b20">
                                <div class="input-group">
                                    <input type="email" class="form-control" required placeholder="Email *"
                                        v-model="formData.FromEmail" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Telefono *"
                                        v-model="formData.Phone" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Cellulare *"
                                        v-model="formData.MobilePhone" />
                                </div>
                            </div>
                            <div class="col-sm-12 m-b20">
                                <div class="input-group">
                                    <textarea rows="5" class="form-control" required placeholder="Messaggio *"
                                        v-model="formData.Body"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12 m-b20">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="privacyCheckbox"
                                        v-model="acceptPrivacy" required />
                                    <label class="form-check-label" for="privacyCheckbox">
                                        Accetto il trattamento dei dati personali in conformità alla <RouterLink
                                            to="/privacy-policy">Privacy Policy</RouterLink> *
                                    </label>
                                </div>
                            </div>
                            <Loader v-if="loading" :fullscreen="false" :show-text="false" loading-text="Invio in corso..." />
                            <div v-else class="col-sm-12 text-center">
                                <button name="submit" type="submit" class="btn btn-primary btn-rounded"
                                    :disabled="!acceptPrivacy">
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
import Loader from '@/elements/Loader.vue'
import { defineComponent } from 'vue'
import bannerImg from '@/assets/images/banner/1920x700.jpg'
import axios from 'axios';
import Swal from 'sweetalert2'

export default defineComponent({
    setup() {
        return {
            bannerImg,
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
    components: { CommonBanner, Loader },
    data() {
        return {
            acceptPrivacy: false,
            loading: false,
            formData: {
                Name: "",
                LastName: "",
                FromEmail: "",
                Phone: "",
                MobilePhone: "",
                Body: "",
                // Campi vuoti per compatibilità con il backend
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
                Subject: "",
            }
        }
    },
    methods: {
        async submit() {
            if (!this.acceptPrivacy) {
                Swal.fire({
                    title: "Devi accettare la Privacy Policy",
                    icon: "warning"
                });
                return;
            }

            this.loading = true;

            try {
                await axios.post('https://thinkhomebe.azurewebsites.net/api/Generic/SendComplaint', this.formData);

                // Reset solo se la richiesta ha successo
                this.formData = {
                    Name: "",
                    LastName: "",
                    FromEmail: "",
                    Phone: "",
                    MobilePhone: "",
                    Body: "",
                    // Campi vuoti per compatibilità con il backend
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
                    Subject: "",
                };

                Swal.fire({
                    title: "Reclamo inviato con successo",
                    icon: "success"
                });

            } catch (error) {
                Swal.fire({
                    title: "Si è verificato un errore",
                    icon: "error"
                });
                console.error("Errore nell'invio del reclamo:", error);
            } finally {
                this.loading = false;
            }
        }

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

