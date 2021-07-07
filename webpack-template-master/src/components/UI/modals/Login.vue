<template>
    <modal
        title="Modal with form + Validate"
        @close="$emit('close')">
        <!-- body-->
        <div slot="body">
            <form @submit.prevent="onSubmit">
                <!--name-->
                <div class="form-item" :class="{ errorInput: $v.name.$error }">
                    <label>Name:</label>
                    <p class="errorText" v-if="!$v.name.required">Field is required!</p>
                    <p class="errorText" v-if="!$v.name.minLength">Field must have at least {{ $v.name.$params.minLength.min }} symbols !</p>
                    <input
                        v-model="name"
                        :class="{ error: $v.name.error }"
                        @change="$v.name.$touch()"
                    >
                </div>

                <!--email-->
                <div class="form-item" :class="{ errorInput: $v.name.$error }">
                    <label>Email:</label>
                    <p class="errorText" v-if="!$v.email.required">Field is required!</p>
                    <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
                    <input
                            v-model="email"
                            :class="{ error: $v.email.error }"
                            @change="$v.email.$touch()"
                    >
                </div>

                <!--password-->
                <div class="form-item" :class="{ errorInput: $v.password.$error }">
                    <label>Password:</label>
                    <p class="errorText" v-if="!$v.password.required">Password is required!</p>
                    <p class="errorText" v-if="!$v.passwordConfirm.required">Password must have at least {{ $v.password.$params.minLength.min }} symbols</p>
                    <input
                            v-model="password"
                            :class="{ error: $v.password.error }"
                            @change="$v.password.$touch()"
                    >
                </div>

                <!--password-confirm-->
                <div class="form-item" :class="{ errorInput: $v.passwordConfirm.$error }">
                    <label>Password Confirmation:</label>
                    <p class="errorText" v-if="!$v.passwordConfirm.required">Password is required!</p>
                    <p class="errorText" v-if="!$v.passwordConfirm.minLength">Password must have at least {{ $v.password.$params.minLength.min }} symbols</p>
                    <p class="errorText" v-if="!$v.passwordConfirm.sameAsPassword">Passwords must be identical!</p>
                    <input
                            v-model="passwordConfirm"
                            :class="{ error: $v.passwordConfirm.error }"
                            @change="$v.passwordConfirm.$touch()"
                    >
                </div>

                <!--button-->
                <button class="btn btnPrimary">Submit!</button>
            </form>
        </div>
    </modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal from '~/components/Modal.vue'

export default {
  name: "ModalValidate",
  components: {
    modal
  },
  data() {
  	return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()

      if (! this.$v.$invalid) {
      	const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        }
        console.log(user);

      	// DONE
      	this.name = ''
      	this.email = ''
      	this.password = ''
      	this.passwordConfirm = ''
        this.$v.$reset()
        this.$emit('close')
      }
    }
  },
  created () {
    let view = this.$store.getters.getModalView
    console.log(view)
  },
  validations: {
    name: {
        required,
        minLength: minLength(4)
    },
    email: {
    	required,
        email
    },
    password: {
    	required,
        minLength: minLength(6)
    },
    passwordConfirm: {
    	required,
        sameAsPassword: sameAs('password')
    }
  }
}
</script>

<style lang="scss" >
.form-item .errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: #de4040;
}
.form-item {
    &.errorInput .errorText {
        display: block;
    }
}
input.error {
    border-color: #de4040;
}
</style>
