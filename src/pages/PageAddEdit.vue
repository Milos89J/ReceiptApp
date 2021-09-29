<template>
  <div class="card m-auto p-4">
    <h2 class="mb-4">New receipt</h2>

    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          v-model="form.title"
          @blur="v.form.title.$touch()"
          type="text"
          class="form-control"
        />
        <div v-if="v.form.title.$error" class="form-error">
          <span>Title is required</span>
        </div>
      </div>

      <div class="mb-3">
        <label for="medicament" class="form-label">Medicament</label>
        <input
          v-model="form.medicament"
          @blur="v.form.medicament.$touch()"
          type="text"
          class="form-control"
        />
        <div v-if="v.form.medicament.$error" class="form-error">
          <span>Medicament is required</span>
        </div>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea v-model="form.description" class="form-control"></textarea>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="doctor" class="form-label">Doctor</label>
          <input
            v-model="form.doctor"
            @blur="v.form.doctor.$touch()"
            type="text"
            class="form-control"
          />
          <div v-if="v.form.doctor.$error" class="form-error">
            <span>Doctor is required</span>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="date" class="form-label">Date</label>
          <input
            v-model="form.date"
            @blur="v.form.date.$touch()"
            type="text"
            class="form-control"
          />
          <div v-if="v.form.date.$error" class="form-error">
            <span>Date is required</span>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button
          @click.prevent="createReceipt()"
          :disabled="isFormValid"
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v: useVuelidate() };
  },
  data() {
    return {
      form: {
        title: null,
        medicament: null,
        description: null,
        doctor: null,
        date: null,
      },
    };
  },
  validations() {
    return {
      form: {
        title: {
          required,
        },
        medicament: {
          required,
        },
        doctor: {
          required,
        },
        date: {
          required,
        },
      },
    };
  },
  computed: {
    isFormValid() {
      return this.v.form.$invalid;
    },
  },
  methods: {
    createReceipt() {
      this.v.form.$touch();
      this.$store.dispatch("createReceipt", this.form).then((res) => {
        this.$router.push({
          name: "PageReceiptDetails",
          params: { id: res.id },
        });
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 80%;
}

.form-error span {
  color: red;
  font-size: 14px;
}
</style>
