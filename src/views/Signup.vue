<template>
  <div class="container">
    <!--    Logo Div-->
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'Home' }">
          <img id="logo" src="../assets/icon.png" />
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signup-div" class="flex-item border">
          <h2 class="text-center pt-4 pl-4">Create Account</h2>
          <form @submit="signup" class="form">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="name"
                    class="form-control"
                    v-model="firstname"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="name"
                    class="form-control"
                    v-model="lastname"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <div class="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                class="form-control"
                v-model="passwordConfirm"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary mt-2 py-0">
              Create Account
            </button>
          </form>
          <small class="form-text text-muted pt-2 pl-4 text-center form"
            >Already Have an Account?</small
          >
          <p class="text-center">
            <router-link
              class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
              :to="{ name: 'Signin' }"
              >Signin Here</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  //props: ["baseURL"],
  data() {
    return {
      email: null,
      firstname: null,
      lastname: null,
      password: null,
      passwordConfirm: null,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      // if the password matches
      if (this.password === this.passwordConfirm) {
        // make the post body
        const user = {
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
        };

        // call the API
        await axios
          .post('http://127.0.0.1:8000/api/register', user)
          .then(() => {
            // redirect to home page
            this.$router.replace("/");
            swal({
              text: "User signup successful. Please Login",
              icon: "success",
              closeOnClickOutside: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // passwords are not matching
        swal({
          text: "Error! passwords are not matching",
          icon: "error",
          closeOnClickOutside: false,
        });
      }
    },
  },
};
</script>

<style scoped>
.btn-dark {
  background-color: #e7e9ec;
  color: #000;
  font-size: smaller;
  border-radius: 1;
  border-color: #adb1b8 #a2a6ac #a2a6ac;
}

.btn-primary {
  background-color: #f0c14b;
  color: black;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 1;
}
.form {
  margin: 20px 20px;
}
#logo {
  width: 150px;
}

@media only screen and (min-width: 992px) {
  #signup-div {
    width: 40%;
  }
}
</style>
