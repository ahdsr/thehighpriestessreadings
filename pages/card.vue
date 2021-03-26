<template>
  <div id="app" class="antialiased text-gray-900">
    <h1 class="text-xl">Choose your recipe</h1>

    <div class="items-center min-h-screen p-4">
      <propertyCard :property="property" />
      <propertyCard :property="property2" />
      <propertyCard :property="property3" />
      <propertyCard :property="property4" />
    </div>

    <div id="accordion">
      <h3>Section 1</h3>
      <div>
        <p>
          Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
          Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
          condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
          Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu
          ante scelerisque vulputate.
        </p>
      </div>
      <h3>Section 2</h3>
      <div>
        <p>
          Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
          purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
          porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non
          quam. In suscipit faucibus urna.
        </p>
      </div>
      <h3>Section 3</h3>
      <div>
        <p>
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque
          lobortis. Phasellus pellentesque purus in massa. Aenean in pede.
          Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed
          commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis
          leo purus venenatis dui.
        </p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </div>
      <h3>Section 4</h3>
      <div>
        <p>
          Cras dictum. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
          mauris vel est.
        </p>
        <p>
          Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import propertyCard from '~/components/propertyCard'

export default {
  name: 'app',
  components: {
    propertyCard,
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
        imageURL:
          'https://images.unsplash.com/photo-1615479865224-b07bb46a5f56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$29.99',
        salePrice: '$19.99',
        heading: 'The trip to the Ocean',
        reviewCount: 34,
        rating: 4,
      },
      property2: {
        imageURL:
          'https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$329.99',
        salePrice: '$219.99',
        heading: 'Suck it bitch',
        reviewCount: 44,
        rating: 4,
      },
      property3: {
        imageURL:
          'https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$129.99',
        salePrice: '$219.00',
        heading: 'Yes, this is something I built',
        reviewCount: 14,
        rating: 3,
      },
      property4: {
        imageURL:
          'https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$9.99',
        salePrice: '$9.00',
        heading: 'I love VUE and TAILWIND',
        reviewCount: 54,
        rating: 1,
      },
    }
  },
  mounted() {},
}
</script>

<style></style>
