<template>
  <div v-if="receipt" class="card details m-auto">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <h3>{{ receipt.title }}</h3>
        <div class="control-btns d-flex">
          <router-link :to="{ name: 'PageEdit', params: { id: receipt.id } }" class="btn"
            >Edit</router-link
          >
          <button @click="deleteReceipt(receipt.id)" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>

    <div class="card-body">
      <h4>{{ receipt.medicament }}</h4>
      <p>{{ receipt.description }}</p>
    </div>

    <div class="card-footer d-flex justify-content-end">
      <span class="mr-2">{{ receipt.doctor }}</span>
      <span>at {{ receipt.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    receipt() {
      return this.$store.state.receipt;
    },
  },
  created() {
    const receiptId = this.$route.params.id;
    this.$store.dispatch("getReceiptById", receiptId);
  },
  methods: {
    deleteReceipt(id) {
      this.$store.dispatch("deleteReceipt", id).then(() => {
        this.$router.push({
          name: "PageHome",
        });
      });
    },
  },
};
</script>

<style scoped>
.details {
  width: 80%;
}

.mr-2 {
  margin-right: 10px;
}
</style>
