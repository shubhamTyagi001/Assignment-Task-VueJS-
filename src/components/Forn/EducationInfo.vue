<script>

export default {
  name: "EducationInfo",
  async created(){
      this.showModal=false
      await  this.localStor()
      this.showModal=true
  },
   
       data() {
        return {
            formData: {
              SchoolName:"",
               X_Board: "",
                XII_Board: "",
              X_Marks: null,
               XII_Marks: null,
                  CollegeName:"",
                  Specialization:"",
                College_Marks: null,
                previousData:{}
            },
            showModal:false
        };
    },
    methods: {
        async handleSubmit() {
            // Store form data in session storage
           let result = await this.formData
            // alert(JSON.stringify(result))
              var modalElement = document.getElementById('myModal');
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
      document.body.classList.add('modal-open');
            
        },
         localStor() {
            let data = sessionStorage.getItem('formData')
            if(data){
             let parseData = JSON.parse(data)
             this.formData.previousData = parseData
            }else{
              this.$router.push('/');
            }
        },

        
    

        closeModal() {
            var modalElement = document.getElementById('myModal');
            modalElement.classList.remove('show');
            modalElement.style.display = 'none';
            document.body.classList.remove('modal-open');
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
                        <form @submit.prevent="handleSubmit">
                        <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  class="form-control"
                                   v-model="formData.SchoolName"
                                    @input="handleInputChange"
                                    required
                                />
                                <label class="form-label" for="form3Example3">
                                 School Name
                                </label>
                              </div>
                              <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1"
                                  class="form-control"
                                   v-model="formData.X_Board"
                                    @input="handleInputChange"
                                    required
                                />
                                <label class="form-label" for="form3Example1">
                                 X Board
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <input
                                  type="number"
                                  id="form3Example2"
                                  class="form-control"
                                   v-model="formData.X_Marks"
                                    @input="handleInputChange"
                                    required
                                     max="100"
                                />
                                <label class="form-label" for="form3Example2">
                                  Marks In %
                                </label>
                              </div>
                            </div>
                          </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="form3Example1"
                                      class="form-control"
                                       v-model="formData.XII_Board"
                                    @input="handleInputChange"
                                    required
                                    />
                                    <label class="form-label" for="form3Example1">
                                     XII Board
                                    </label>
                                  </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                  <div class="form-outline">
                                    <input
                                      type="number"
                                      id="form3Example2"
                                      class="form-control"
                                       v-model="formData.XII_Marks"
                                    @input="handleInputChange"
                                    required
                                     max="100"
                                    />
                                    <label class="form-label" for="form3Example2">
                                      Marks In %
                                    </label>
                                  </div>
                                </div>
                              </div>
                            <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  class="form-control"
                                   v-model="formData.CollegeName"
                                    @input="handleInputChange"
                                    required
                                />
                                <label class="form-label" for="form3Example3">
                                  College Name
                                </label>
                              </div>
                              <div class="row">
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  class="form-control"
                                   v-model="formData.Specialization"
                                    @input="handleInputChange"
                                    required
                                />
                                <label class="form-label" for="form3Example1">
                                  specialization
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                              <div class="form-outline">
                                <input
                                  type="number"
                                  id="form3Example2"
                                  class="form-control"
                                   v-model="formData.College_Marks"
                                    @input="handleInputChange"
                                    required
                                    max="100"
                                />
                                <label class="form-label" for="form3Example2">
                                 Marks In % 
                                </label>
                              </div>
                            </div>
                          </div>

                       

                          <button
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                          >
                          Submit
                          </button>

                   
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
        
                 
   
              </div>


      

      <!-- The Bootstrap Modal -->
      <div class="modal" tabindex="-1" role="dialog" id="myModal" >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Submited Data</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closeModal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
           <div class="modal-body" v-if="showModal && formData.previousData">
       


         <div class="Content" >
             <div class="Dataval">
             <h4>FirstName:  </h4>
               <h4> {{
                 formData.previousData.firstName }}</h4>
                   </div>
                    <div class="Dataval">
                     <h4>LastName:  </h4>
                     <h4>  {{ formData.previousData.lastName }}</h4>
                     </div>
                      <div class="Dataval">
                     <h4>Email:  </h4>
                     <h4>{{ formData.previousData.email }} </h4>
                     </div>
                      <div class="Dataval">
                     <h4>Address:   </h4>
                     <h4>{{ formData.previousData.address }}</h4>
                     </div>
                      <div class="Dataval">
                     <h4>SchoolName:   </h4>
                      <h4>{{ formData.SchoolName }}</h4>
                     </div>
                      <div class="Dataval">
                     <h4>X_Board:   </h4>
                     <h4>{{ formData.X_Board }}</h4>
                     </div>
                      <div class="Dataval">
                     <h4>XII_Board:  </h4>
                    <h4>{{ formData.XII_Board }}</h4>
                     </div>
                      <div class="Dataval">
                     <h4>X_Marks:  </h4>
                     <h4>{{ formData.X_Marks }} %</h4>
                     </div>
                      <div class="Dataval">
                       <h4>XII_Marks:  </h4>
                       <h4>{{ formData.XII_Marks }} %</h4>
                       </div>
                       <div class="Dataval">
                         <h4>CollegeName:  </h4>
                         <h4>{{formData.CollegeName }}</h4>
                         </div>
                         <div class="Dataval">
                         <h4>Specialization:  </h4>
                         <h4>{{ formData.Specialization }}</h4>
                         </div>
                         <div class="Dataval">
                         <h4>College_Marks:  </h4>
                         <h4>{{ formData.College_Marks }} %</h4>
                         </div>
                   
                  </div> 
               

            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="closeModal"
              >
                Close
              </button>
           
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
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.Dataval{
  display: flex;
  
}
h4 {
  padding-right: 10px;
   font-style: italic;
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
