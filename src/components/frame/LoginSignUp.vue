<template>
  <mdb-container>
    <mdb-btn rounded color="default" @click.native="cascading = true">Login</mdb-btn>
    <mdb-modal :show="cascading" @close="cascading = false" cascade tabs>
      <mdb-tab tabs justify class="light-blue">
        <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs = 1"><mdb-icon icon="user" class="mr-1"/>Customer</mdb-tab-item>
        <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs = 2"><mdb-icon icon="user" class="mr-1"/>Company</mdb-tab-item>
      </mdb-tab>
      <mdb-modal-body class="mx-3" v-if="tabs==1">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
        <div class="mt-2 text-center">
          <mdb-btn color="info">Log in <mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center v-if="tabs==1">
        <div class="options text-center text-md-right mt-1">
          <p>Not a member? <a href="#" @click="tabs=2">Sign Up</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
      </mdb-modal-footer>
      <mdb-modal-body class="mx-3"  v-if="tabs==2">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="CompanyId" icon="address-card" type="number"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
        <div class="mt-2 text-center">
          <mdb-btn color="info">Sign Up<mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center v-if="tabs==2">
        <div class="options text-center text-md-right mt-1">
          <p>Not a member? <a href="#" @click="tabs=1">Log in</a></p>
        </div>
        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbBtn, mdbModal, mdbTab, mdbTabItem, mdbModalBody, mdbInput, mdbModalFooter, mdbModalTitle, mdbIcon } from 'mdbvue';
  export default {
    name: 'ModalExamplesPage',
    components: {
      mdbContainer,
      mdbBtn,
      mdbModal,
      mdbTab,
      mdbTabItem,
      mdbModalBody,
      mdbInput,
      mdbModalFooter,
      mdbIcon,
      mdbModalTitle
    },
    data() {
      return {
        cascading: false,
        tabs: 1
      }
    }
  }
</script>