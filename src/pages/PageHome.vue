<template>
  <div id="app">
    <h2>Recepti</h2>
    <router-link :to="{ name: 'PageAdd' }">Add</router-link>

    <ul>
      <li v-for="receipt of receipts" :key="receipt.id">
        <div class="recept-box">
          <div>
            <router-link
              :to="{ name: 'PageReceiptDetails', params: { id: receipt.id } }"
            >
              <span>{{ receipt.title }}</span>
            </router-link>
            <button @click="deleteReceipt(receipt.id)">Delete</button>
          </div>
        </div>
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
.recept-box {
  display: flex;
}
</style>