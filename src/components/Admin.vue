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
      tableData: [{"_id":"5a2f70808669670f3f72c3b5","firstName":"Nolan","lastName":"Thompson","email":"nolanruss12@yahoo.com","telephone":"8585319723","company":"OK","officialVisit":true,"escortRequired":true,"escortName":"Nolan Thompson","createdOn":"2017-12-12T06:00:32.666Z","__v":0},{"_id":"5a2f71c55bb7aa0f714a9bcc","firstName":"Ok","lastName":"This ","email":"nolan@nolan.com","telephone":"A","company":"test","officialVisit":true,"escortRequired":false,"escortName":"","createdOn":"2017-12-12T06:05:57.573Z","__v":0},{"_id":"5a2f74daaec7ec0fa3bf8146","firstName":"Ok","lastName":"This","email":"Ias@las.com","telephone":"12341234","company":"a","officialVisit":true,"escortRequired":true,"escortName":"Somebody","createdOn":"2017-12-12T06:19:06.764Z","__v":0}],
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
