<template>
  <div style="padding: 150px;">
    <h1>Data</h1>
    <p><strong>ID:</strong> {{row.id}}</p>
    <p><strong>Info:</strong> {{row.info}}</p>
    <input v-model="id" style="margin-top: 50px;">
    <button @click="getData">Get data for ID {{id}}</button>
  </div>
</template>
<script>
export default {
  async asyncData({app, params}) {
    let url = `/api/db/${params.id}`
    let row = await app.$axios.$get(url)
    return { row, id: 1 }
  },
  methods: {
    async getData() {
      let url = `/api/db/${this.id}`
      this.row = await this.$axios.$get(url)
    }
  }
}
</script>
