<template>
  <div class="container">
    <h1>I am receipt details</h1>
    <p>{{ receipt.name }}</p>
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
};
</script>

<style scoped>
</style>
