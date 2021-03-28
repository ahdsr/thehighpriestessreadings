<template>
  <div id="app" class="mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0 z-10">
      <stickyNav />
    </div>

    <nav class="sticky top-0 bg-white"></nav>

    <div class="z-20"><sideNav /></div>

    <div class="z-30">
      <sidePanel />
    </div>

    <h1 class="relative text-xl font-medium tracking-tight top-8 left-40">
      On Order-Queue
    </h1>

    <div class="relative top-10 left-40">
      <crumb />
    </div>

    <main
      id="generalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-20"
    >
      <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
        <div class="bg-white">
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

<style></style>
