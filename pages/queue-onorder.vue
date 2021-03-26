<template>
  <div id="app" class="mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <stickyNav />

    <nav class="sticky top-0 z-30 bg-white"></nav>
    <h1 class="relative text-3xl font-thin top-8 left-40">On Order-Queue</h1>
    <div class="relative z-50 top-10 left-40">
      <crumb />
    </div>

    <sideNav />

    <sidePanel />

    <!--Floating Info Div-->

    <!--Breadcrumb-->

    <!--General Order-->
    <main
      id="generalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-28"
    >
      <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-12 bg-white sm:p-6 lg:p-2">
          <queOnOrder :property="property" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import queOnOrder from '~/components/queOnOrder'

export default {
  name: 'app',
  components: {
    queOnOrder,
  },
  head() {
    return {
      //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
      //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
      //
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Tangerine">',
        },
      ],
    }
  },
  data() {
    return {
      property: {
        log: 'Log',
        corpcode: 'Corp Code',
        clientNumber: 'Client Number',
        unitNumber: 'Unit Number',
        orderType: 'Order Type',
        currentStatus: 'Current Status',
        year: 'Year',
        manufacturer: 'Manufacturer',
        make: 'Make',
        model: 'Model',
        factoryOrderNumber: 'Factory Order Number',
        vin: 'VIN',
        fleetSpecID: 'Fleet Spec ID',
        dioInd: 'DIO Indicator',
        upfitInd: 'Upfit Indicator',
        creditInd: 'Credit',
        insuranceInd: 'Insurance',
        billingInd: 'Billing',
        dealerInd: 'Dealer',
        registrationInd: 'Registration',
        upfitSoftError: 'Upfit Soft Error',
        capping: 'Capping',
        lastUpdateDate: 'Date',
        lastUpdateTime: 'Time',
        lastUpdateUserID: 'User ID',
      },
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
