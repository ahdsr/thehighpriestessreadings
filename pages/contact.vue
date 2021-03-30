<template>
  <div>
    <template>
      <div class="p-20 m-6 mx-auto ml-6 mr-6 text-white bg-monica-xoletic">
        <form class="contact-form" @submit.prevent="sendEmail">
          <h1 class="text-2xl">Test Email Form</h1>
          <label>Name</label>
          <input class="text-blue-700" type="text" name="user_name" />
          <label>Email</label>
          <input class="text-blue-700" type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <input class="text-blue-700" type="submit" value="Send" />
        </form>
      </div>
    </template>

    <script>
      import emailjs from 'emailjs-com'

      export default {
        methods: {
          sendEmail: (e) => {
            emailjs
              .sendForm(
                'service_ogjthl8',
                'template_zdibq8v',
                e.target,
                'user_fhrYsUk17udrPh9Amw89u'
              )
              .then(
                (result) => {
                  console.log('SUCCESS!', result.status, result.text)
                },
                (error) => {
                  console.log('FAILED...', error)
                }
              )
          },
        },
      }
    </script>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
