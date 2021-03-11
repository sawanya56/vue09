<template>
  <div class="container">
    <b-card id="dark">
      <h1>Employee</h1>
      <div class="row">
        <b-label class="col-3">EmployeesNumber : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesFn : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EF"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesLn : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EL"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Email : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EM"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Phonenumber : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="PH"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">EmployeesImage : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="EI"></b-input>
      </div>
      <br />
      <b-button variant="success" @click="addData()">Submit</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      Pass: "",
      EmployeesFn: "",
      EmployeesLn: "",
      Email: "",
      Phonenumber: "",
      EmployeesImage: "",
    };
  },
  methods: {
    addData() {
      alert("compelet");
      const data = {
        EmployeesNumber: this.EN,
        EmployeesFn: this.EF,
        EmployeesLn: this.EL,
        Email: this.EM,
        Phonenumber: this.PH,
        EmployeesImage: this.EI,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function () {
          console.log("Ducument successfully written! -> MyFrom");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      const dataText = {
        EmployeesNumber: this.EN,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Ducument successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
