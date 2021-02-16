<template>
  <div>
    <h1>Cart</h1>
    <v-row>
      <v-col cols="12" xs="12" sm="8">
        <div v-if="!cartTotalAmount">Your cart is Empty</div>
        <Products v-else v-bind:products="allCart" />
      </v-col>
      <v-col cols="12" xs="12" sm="4">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">
            Total: ${{ cartTotalAmount }}
          </v-card-title>

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Products from "../components/Products";

export default {
  name: "AllCart",
  components: {
    Products,
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
  computed: mapGetters(["allCart", "cartTotalAmount"]),
};
</script>
