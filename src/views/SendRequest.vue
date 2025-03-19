<template>
    <div class="page-content bg-white">
        <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
            <div class="container-fluid">
                <div class="dz-bnr-inr-entry">
                    <h1>Invia una richiesta</h1>
                    <!-- Breadcrumb Row -->
                    <nav aria-label="breadcrumb" class="breadcrumb-row">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <RouterLink to="/">Home</RouterLink>
                            </li>
                            <li class="breadcrumb-item">Invia una richiesta</li>
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
                        <h6 class="sub-title text-primary">Invia la tua richiesta</h6>
                        <h2 class="title">CERCA LA TUA CASA - Proposta Vendita o Affitto Immobile</h2>
                    </div>
                    <form class="dz-form dzForm contact-bx" method="POST" @submit.prevent="submit()">
                        <div class="row sp10">
                            <div class="col-sm-12 m-b20">
                                <h4>Caratteristiche dell'immobile</h4>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <select class="form-control" v-model="formData.RequestType">
                                        <option value="Vendita">Vendita</option>
                                        <option value="Affitto">Affitto</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <select class="form-control" v-model="formData.PropertyType">
                                        <option value="Appartamenti">Appartamenti</option>
                                        <option value="Attività Commerciale">Attività Commerciale</option>
                                        <option value="Box">Box</option>
                                        <option value="Capannoni, Loc. Artigianali">Capannoni, Loc. Artigianali</option>
                                        <option value="Casali e Ruderi">Casali e Ruderi</option>
                                        <option value="Case Semindipendenti">Case Semindipendenti</option>
                                        <option value="Locali Commerciali">Locali Commerciali</option>
                                        <option value="Nuove Costruzioni">Nuove Costruzioni</option>
                                        <option value="Terreni">Terreni</option>
                                        <option value="Ville e Case Indipendenti">Ville e Case Indipendenti</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Provincia *"
                                        v-model="formData.Province" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Località *"
                                        v-model="formData.Location" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Indirizzo"
                                        v-model="formData.Address" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Numero vani *"
                                        v-model="formData.NumberRooms" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Numero camere *"
                                        v-model="formData.NumberBedRooms" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Numero servizi *"
                                        v-model="formData.NumberServices" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Metri quadri *"
                                        v-model="formData.MQ" />
                                </div>
                            </div>
                            <div class="row m-b20">
                                <div class="col-sm-3 m-b20">
                                    <div class="input-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="formData.Garden">
                                            <label class="form-check-label">
                                                Giardino
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 m-b20">
                                    <div class="input-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="formData.Terrace">
                                            <label class="form-check-label">
                                                Terrazzo
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 m-b20">
                                    <div class="input-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="formData.Lift">
                                            <label class="form-check-label">
                                                Ascensore
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 m-b20">
                                    <div class="input-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"
                                                v-model="formData.Furnished">
                                            <label class="form-check-label">
                                                Arredato
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <select class="form-control" v-model="formData.Heating">
                                        <option value="">Riscaldamento</option>
                                        <option value="Non Presente">Non Presente</option>
                                        <option value="Autonomo">Autonomo</option>
                                        <option value="Centralizzato">Centralizzato</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <select class="form-control" v-model="formData.Box">
                                        <option value="">Posto auto</option>
                                        <option value="NonPresente">Non Presente</option>
                                        <option value="Assegnato">Assegnato</option>
                                        <option value="Box">Box Auto</option>
                                        <option value="Condominiale">Condominiale</option>
                                        <option value="PostoAutoCoperto">Posto Auto Coperto</option>
                                        <option value="PostoAutoScoperto">Posto Auto Scoperto</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required
                                        placeholder="Canone mensile / prezzo" v-model="formData.Price" />
                                </div>
                            </div>
                            <div class="col-sm-12 m-b20">
                                <div class="input-group">
                                    <textarea rows="5" class="form-control" placeholder="Informazioni supplementari"
                                        v-model="formData.Information"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row sp10">
                            <div class="col-sm-12 m-b20">
                                <h4>Informazioni personali</h4>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Nome"
                                        v-model="formData.Name" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Cognome"
                                        v-model="formData.LastName" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Telefono"
                                        v-model="formData.Phone" />
                                </div>
                            </div>
                            <div class="col-sm-6 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Cellulare"
                                        v-model="formData.MobilePhone" />
                                </div>
                            </div>
                            <div class="col-sm-12 m-b20">
                                <div class="input-group">
                                    <input type="text" class="form-control" required placeholder="Email"
                                        v-model="formData.FromEmail" />
                                </div>
                            </div>
                            <div class="col-sm-12 m-b20">
                                <div class="input-group">
                                    <textarea rows="5" class="form-control" placeholder="Messaggio"
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
                            <div v-if="loading" class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
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
    components: { CommonBanner },
    data() {
        return {
            acceptPrivacy: false,
            loading: false,
            formData: {
                RequestType: "Vendita",
                PropertyType: "Appartamenti",
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
                await axios.post('https://thinkhomebe.azurewebsites.net/api/Generic/SendRequest', this.formData);

                // Reset solo se la richiesta ha successo
                this.formData = {
                    RequestType: "Vendita",
                    PropertyType: "Appartamenti",
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
                    Heating: "Non Presente",
                    Box: "Non Presente",
                    Price: "",
                    Information: "",
                    Name: "",
                    LastName: "",
                    FromEmail: "",
                    Subject: "",
                    Body: "",
                    Phone: "",
                    MobilePhone: "",
                };

                Swal.fire({
                    title: "Richiesta inviata con successo",
                    icon: "success"
                });

            } catch (error) {
                Swal.fire({
                    title: "Si è verificato un errore",
                    icon: "error"
                });
                console.error("Errore nell'invio della richiesta:", error);
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