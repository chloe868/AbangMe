<template>
  <div>
    <Header></Header>
    <MainPage class="mainpage"></MainPage>
    <div class="cars-horizon">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row py-2">
              <div class="col-md-7 car-image-block">
                <h3>Available for Transportation Rentals</h3>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <select class="form-control" id="sel1">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Kms: Low to High</option>
                    <option>Model: Newest to Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row border mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHztAxyUwqbUWrAbX7aAUOndiMV53QNieHtwBd6NHzPviIOQGY&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Subaru WRX</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
                <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFJ-K-W84_VcSFMi1PgFweVS5Aoy97dR8Nv2c7zAvIMTngJHV&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Prueba del Hyundai Kona</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
                <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCyjSRkSJJaHvo9PG6FdcBkkio9gxGgiUj5Bq9x7gqIJ9TTAS&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Kia’s latest Seltos TVC</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
                <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB2uuC_ArGUcXFPYLMNEBU3AoOElxfRIGlz4rMmIOVLT1HMqq&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Indian FTR 1200</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
              <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWyK2AMcNaTRG_BZ4ip2Cdh0sdN4vv2e-NDFNs0D4xvzzLzA95&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>RFRS Malaysia-Monoshock Conversion Bolt</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
               <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25FGcK3-kxbib58zEPWtlfXiDuVhf981OOZnHaI1eSXgeMBC9&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>New Super Power PK 150 Archi 2019</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
              <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAYN7q44EQTpXGCeRGgm8jg3lMt-MXZIsgp0N_TQCOdm1KewU&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>P2P Bus</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
                <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o1gYHkr_RZqc8fSsRRqVkTzI4rnNTnNIPMRGDy6pkCyKycgB&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Whatcom Democrats</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
              <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://www.comparabus.com/bundles/static/uploads/FlixBus/flixbus-bus-pas-cher.png "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>FlixBus USA</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
              <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AtxlrnifSUkpSi1OFs7kC9kSazHj_1tqin5BRPD5qFue0qTN&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>NISSAN URVAN 15 SEATER BUS</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
<mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzusU-PWLfcgx7LzdsDDKSn0ha2h5icS6P63wz40tPWijUKhm&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Toyota Hiace Minibus - Toyota NZ</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
<mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPPeyMFtUY5r0fgPAMUScGSaqpNPt_A8rSyOUdi7pg8-s8jXx&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>C.A.M PLACER-X 3.0L (p54089) - Vehicles->Van</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
           <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LkhXzxAXZj8qR4D6rM7QJYMeKtUPlQhzoriPu10GPv4mWOYg&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Diving in Pandan</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
             <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2ZJL8FOtHn4M6PA47oVHv_unF7nIUHEzWLn2SXluKq0btbv4&s"
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Diving Alona Beach,Panglao</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
               <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <div class="row mt-3 border">
              <div class="col-md-4 car-image-block">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfeR566GQF0vDZJvqq_JZp0ZQAZ-XzCuSkCYVlI717nN-79S&s "
                  >
                </a>
              </div>
              <div class="col-md-8 card-body">
                <a href="#">
                  <h3>Oslob,Sumilon & Apo Island</h3>
                </a>
                <h5>Rs.2.1 Lakh</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">44,114 Km</li>
                  <li class="list-inline-item">Petrol</li>
                  <li class="list-inline-item">Gurugram</li>
                </ul>
               <mdb-btn color="primary" class="mb-3 mr-5" @click="poll = true">Reserved</mdb-btn>
              </div>
            </div>
            <mdb-container>      
              <mdb-modal :show="poll" @close="poll = false" fullHeight info removeBackdrop>
                <mdb-modal-header center :close="false">
                  <p class="heading lead">Login</p>
                </mdb-modal-header>

                <mdb-modal-body>
                  <div class="text-center">
                    <mdb-icon icon="file-text-o" size="4x" class="mb-3 animated rotateIn"/>
                  </div>
                  <br>
                  <br>
                  <br>
                  <mdb-input
                    type="text"
                    id="option1-2"
                    name="option1"
                    placeholder="username"
                  /><br>
                  <mdb-input
                    type="password"
                    id="option1-3"
                    name="option1"
                    placeholder="password"
                  />
                  <p><br><br>
                      <strong>Don't have an account?<u><a @click="register">Register</a></u> first!</strong>
                    </p>
                </mdb-modal-body>
                <mdb-modal-footer center>
                  <mdb-btn
                    color="primary"
                    @click="Send"
                    icon="paper-plane"
                    iconRight
                    iconClass="ml-1 white-text"
                  >Send</mdb-btn>

                  <mdb-btn outline="primary" @click="poll = false">Cancel</mdb-btn>
                </mdb-modal-footer>
              </mdb-modal>
            </mdb-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#mainpage {
  margin-top: 5px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
}
.border {
  border: 2px solid blue;
}
</style>
<script>
import ROUTER from "router";
export default {
  name: "nextpage",

  props: [],

  mounted() {},

  data() {
    return {
      poll: false
    };
  },
  methods: {
    reserved() {
      ROUTER.push("/login");
    },
    Send(){
      ROUTER.push("/reservation");
      },
  }
};
</script>


