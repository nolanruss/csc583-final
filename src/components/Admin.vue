<template>
  <div ><!-- v-if="this.$store.state.user.displayName">-->
    <!--<h3>Dashboard {{this.$store.state.user.displayName}}</h3>-->
    <h4>Visitors: {{true}}</h4>
    <button class="btn btn-primary" @click="viewVisitors()">View Visitors</button>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data: {
    count: 0,
    data: {}
  },
  methods: {
    viewVisitors() {
      this.$store.dispatch('getVisitors')
      alert(this.$store.state.visitors.count)
    },
    setVisitors() {
      this.$data.count = this.$store.state.visitors.count
    }
  },
  mounted() {
    this.$store.dispatch('getVisitors')
  }
}
</script>
