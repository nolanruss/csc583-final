<template>
  <div ><!-- v-if="this.$store.state.user.displayName">-->
    <!--<h3>Dashboard {{this.$store.state.user.displayName}}</h3>-->
    <h3>Table of Visitors</h3>
    <div id="app">
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
    </div>
    <!--
    <div id="app">
      <v-server-table url="http://localhost:4000/visitors/list/all" :columns="columns" :options="options"></v-server-table>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      count: 3,
      tableData: [],
      columns:['firstName', 'lastName', 'email', 'telephone', 'company', 'officialVisit' / 
                'escortName', 'createdOn'],
      options: {
        headings: {
          createdOn: 'Visit Date/Time',
          company: 'Company',
          lastName: 'Last Name',
          firstName: 'First Name'
        },
        sortable: ['company', 'createdOn', 'lastName', 'firstName'],
        filterable: ['company', 'createdOn', 'lastName', 'firstName'],
      }
    }
  },
  methods: {
    viewVisitors() {
    },
    setVisitors() {
      this.$data.count = this.$store.state.visitors
      this.$data.tableData = this.$store.state.visitors
    }
  },
  mounted() {
    this.$store.dispatch('getVisitors')
  }
}
</script>
