<script>
export default {
    name: "GeneralInfo",

      data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                address: ""
            }
        };
    },
    methods: {
        handleSubmit() {
            // Store form data in session storage
            sessionStorage.setItem("formData", JSON.stringify(this.formData));

         
           this.$router.push('/educationInfo');
        }
    }
}
</script>

<template>
    <div class="background-radial-gradient overflow-hidden">
          <div class="d-flex justify-content-center align-items-center min-vh-100">
          

              <div class=" position-relative">
                <div
                  id="radius-shape-1"
                  class="position-absolute rounded-circle shadow-5-strong"
                ></div>
                <div
                  id="radius-shape-2"
                  class="position-absolute shadow-5-strong"
                ></div>

                <div class="card bg-glass ">
                  <div class="card-body px-4 py-5 px-md-5">
                    <form  @submit.prevent="handleSubmit">
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                                v-model="formData.firstName"
                                @input="handleInputChange"
                              id="form3Example1"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="form3Example1">
                              First name
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                                v-model="formData.lastName"
                             @input="handleInputChange"
                              id="form3Example2"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="form3Example2">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                            v-model="formData.email"
                          @input="handleInputChange"
                          id="form3Example3"
                          class="form-control"
                          required
                        />
                        <label class="form-label" for="form3Example3">
                          Email address
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                            <input
                              type="text"
                                v-model="formData.address"
                              @input="handleInputChange"
                              id="form3Example3"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="form3Example3">
                             Address
                            </label>
                          </div>

                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4"
                      >
                        Next
                      </button>

                   
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<style scoped>
.background-radial-gradient {
  min-height: 100vh;
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(
      650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    ),
    radial-gradient(
      1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    );
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
.container {
  padding: 0;
  width: auto;
}

.card{
    width:80%
}



@media (max-width: 768px) {
  .container {
    padding: 0; /* Remove horizontal padding on mobile */
  }

  .row {
    flex-direction: column-reverse; /* Stack columns in reverse order on mobile */
  }

  #radius-shape-1,
  #radius-shape-2 {
    display: none; /* Hide the circular shapes on mobile */
  }

  /* Adjust other styles as needed for mobile */
}

</style>
