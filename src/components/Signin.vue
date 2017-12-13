<template>
  <div class="container">
    <h2>{{this.$data.greeting}}</h2>
    <h4>{{this.$data.instruction}}</h4>
    <form id="register" @submit.prevent="validateBeforeSubmit" method="post" action='true'> <!--='/users'>-->
    <!-- First name field -->
    <div class="form-group" >
      <input type="text" class="form-control" v-validate="'required'" placeholder="First Name" v-model="firstName" name="firstName">
        <p class="text-danger" align="left" v-if="errors.has('firstName')">{{ errors.first('firstName') }}</p>
    </div>
    <!-- Last name field -->
    <div class="form-group" >
      <input type="text" class="form-control" v-validate="'required'" placeholder="Last Name" v-model="lastName" name="lastName">
        <p class="text-danger" align="left" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
    </div>
    <!-- Email field -->
    <div class="form-group" >
          <input v-model="email" name="email" v-validate="'required|email'" data-vv-delay="500" type="text" data-vv-as="email address" placeholder="Email" class="form-control">
          <p class="text-danger" align="left" v-if="errors.has('email')">{{ errors.first('email') }}</p>
    </div>
    <!-- Telephone number field -->
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Telephone #" v-model="telephone" name="telephone">
        <p class="text-danger" align="left" v-if="errors.has('telephone')">{{ errors.first('telephone') }}</p>
    </div>
    <!-- Company field -->
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Company" v-model="company" name="company">
        <p class="text-danger" align="left" v-if="errors.has('company')">{{ errors.first('company') }}</p>
    </div>
    <div class="form-group" >
      <input type="checkbox" id="officialVisit" v-model="officialVisit" >
      <label for="officialVisit">Official Visit?</label>
    </div>
    <div class="form-group" >
      <input type="checkbox" id="escortRequired" v-model="escortRequired" >
      <label for="escortRequired">Escort Required?</label>
    </div>
    <div class="form-group" v-if="escortRequired === true">
      <div class="form-group">
        <input type="text" class="form-control" v-validate="'required'" placeholder="Escort Name" v-model="escortName" name="escortName">
          <p class="text-danger" align="left" v-if="errors.has('escortName')">{{ errors.first('escortName') }}</p>
      </div>
    </div>
    <button class="btn btn-success" type="submit">Submit</button>
  </div>
</template>

<style scoped>
.btn-primary {
  border: 0;
  background: lightblue;
  color: white;
}
.btn-primary:hover {
  background: darkblue;
  color: white;
}
</style>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      company: '',
      officialVisit: false,
      escortRequired: false,
      escortName: '',
      greeting: 'Welcome!',
      instruction: 'Please sign in and take a seat.'
    }
  },
  methods: {
    resetFields() {
      this.$data.firstName = '',
      this.$data.lastName = '',
      this.$data.email = '',
      this.$data.telephone = '',
      this.$data.company = '',
      this.$data.officialVisit = false,
      this.$data.escortRequired = false,
      this.$data.escortName = ''
    },
    validateBeforeSubmit(e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          const newVisitor = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            telephone: this.telephone,
            company: this.company,
            officialVisit: this.officialVisit,
            escortRequired:  this.escortRequired,
            escortName: this.escortName,
            createdOn: new Date
          }
          this.$store.dispatch('signinVisitor', newVisitor).then(res => {
            console.log('line 82')
            if (res.status == 409) {
              console.log('Issue, 409 Error')
              if (res.statusText == 'email') {
                //this.errors.add('email', 'Name is already taken.', 'auth')
                //this.errors.first('username:auth')
              }
            }
            else if (res.status == 200) {
              alert('Registration successful!')
              this.resetFields()
              //this.$router.push('/')
            }
          }, err => {
            alert('Registration failed!')
          })
          return
        }
      })
    }
  },
}
</script>
