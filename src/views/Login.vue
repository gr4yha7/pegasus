<template>
<v-container>
  <div class="tw-flex tw-flex-col tw-rounded-lg tw-shadow-md tw-mx-auto tw-mt-24 tw-p-8 lg:tw-w-1/4 tw-h-auto">
    <h3 class="tw-text-gray-800 tw-font-semibold tw-uppercase tw-text-center tw-text-lg">Login</h3>
    <div class="tw-pt-20 tw-pb-32 tw-flex tw-flex-col tw-justify-center">
      <ValidationObserver ref="observer" v-slot="{ validate, reset }">
        <form class="px-4">
          <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
            <v-text-field
              v-model="email"
              class="tw-py-2"
              :error-messages="errors"
              label="E-mail"
              required
              prepend-inner-icon="mdi-email-outline"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:6">
            <v-text-field
              v-model="password"
              class="tw-py-2"
              :error-messages="errors"
              label="Password"
              required
              append-icon="mdi-eye-outline"
              prepend-inner-icon="mdi-lock-outline"
              type="password"
            />
          </ValidationProvider>
          <div class="tw-mt-12 tw-flex tw-flex-col tw-justify-center">
            <v-btn
              elevation="0"
              color="primary"
              outlined
              height="50"
              rounded
              @click="signin">login</v-btn>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
  </v-container>
</template>

<script>
import { required, email, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import firebase from 'firebase/app'
import { db } from '../main'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

extend('min', {
  ...min,
  message: '{_field_} must be at least {length} characters'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: '',
    password: '',
    defaultEmail: 'admin@pegasus.com',
    defaultPassword: '#s3lah',
    users: []
  }),

  mounted () {
    // this.getUsers()
  },

  methods: {
    // getUser (userEmail) {
    //   let user
    //   let ref = db.collection('users').where('email', '==', userEmail)
    //   ref.get().then((docs) => {
    //     docs.forEach(doc => {
    //       user = doc.data()
    //     })
    //   })
    //   return user
    // },
    submit () {
      this.$refs.observer.validate()
      // Get form values
      // Compare with firestore users document
      // match found, redirect to dashboard
    },
    signin () {
      firebase.auth().signInWithEmailAndPassword(this.defaultEmail, this.defaultPassword).then(async (userCredential) => {
        let ref = await db.collection('users').where('email', '==', userCredential.user.email)
        ref.get().then((docs) => {
          docs.forEach(doc => {
            let user = doc.data()
            switch (user.role) {
              case 'student':
                this.$router.replace('/dashboard/student')
                break
              case 'admin':
                this.$router.replace('/dashboard/admin')
                break
              case 'exam_officer':
                this.$router.replace('/dashboard/enroller')
                break
              default:
                alert('Invalid user')
                break
            }
          })
        })
        // this.$router.replace('/login')
      }).catch((err) => {
        console.log(err.message)
      })
    },
    clear () {
      this.email = ''
      this.password = ''
      this.$refs.observer.reset()
    },
    async getUsers () {
      let snapshot = await db.collection('users').get()
      snapshot.forEach(doc => console.log(doc.data()))
    }
  }
}
</script>
