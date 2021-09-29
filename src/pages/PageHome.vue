<template>
  <div id="app">
    <h2>Recepti</h2>
    <router-link :to="{ name: 'PageAdd' }">Add</router-link>
    <input type="text" v-model="receiptName" @keyup.enter="addReceipt" />

    <ul>
      <li v-for="receipt of receipts" :key="receipt.id">
        <div class="recept-box">
          <div v-if="editMode">
            <input type="text" v-model="receipt.name" />
            <button @click="updateReceipt(receipt)">Save</button>
            <button @click="editMode = false">Cancel</button>
          </div>
          <div v-if="!editMode">
            <router-link
              :to="{ name: 'PageReceiptDetails', params: { id: receipt.id } }"
            >
              <span>{{ receipt.name }}</span>
            </router-link>
            <button @click="editMode = true">Edit</button>
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
  name: "App",
  data() {
    return {
      receiptName: "",
      editMode: false,
    };
  },
  computed: {
    receipts() {
      return this.$store.state.receipts;
    },
  },
  created() {
    this.$store.dispatch("getReceipts");
  },

  methods: {
    async addReceipt() {
      const res = await axios.post(baseURL, { name: this.recepitName });

      this.receipts = [...this.receipts, res.data];

      this.receiptName = "";
    },

    selectRecept(receipt) {
      this.receiptName = receipt.name;
    },
    async updateReceipt(receipt) {
      await axios.patch(baseURL + "/" + receipt.id, receipt);
      this.editMode = false;
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