<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2 class="receipt">Receipts</h2>
      <router-link
        :to="{ name: 'PageAdd' }"
        class="btn btn-primary d-flex align-items-center"
        ><span>Add Receipt</span></router-link
      >
    </div>
    <ul class="list-group mt-2">
      <li v-for="receipt of receipts" :key="receipt.id" class="list-group-item">
        <router-link
          :to="{ name: 'PageReceiptDetails', params: { id: receipt.id } }"
          class="receipt-title"
        >
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ receipt.title }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3000/receipts";

export default {
  computed: {
    receipts() {
      return this.$store.state.receipts;
    },
  },
  created() {
    this.$store.dispatch("getReceipts");
  },

  methods: {
    async updateReceipt(receipt) {
      await axios.patch(baseURL + "/" + receipt.id, receipt);
    },
    async deleteReceipt(id) {
      await axios.delete(baseURL + "/" + id);
      const index = this.receipts.findIndex((r) => r.id === id);
      this.receipts.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.receipt-title {
  color: #333;
  text-decoration: none;
}
</style>