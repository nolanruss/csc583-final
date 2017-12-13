<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">{{this.$data.title}}</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: 'Visitor Sign In'
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #363636;
    margin-top: 0px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #363636;
  }
  .btn {
    border: 0;
    background: lightblue;
    color: white;
    outline: 0;
  }
  .btn:active {
    background: lightblue;
    outline: 0;
  }
  .btn:focus {
    background: lightblue;
    outline: 0;
  }
  .btn:active:focus {
    background: lightblue;
    outline: 0;
  }
  .btn-default {
    border: 0;
    background: lightblue;
    color: white;
  }
  .btn-primary {
    border: 0;
    background:lightblue;
    color: white;
  }
  .btn-primary:hover {
    background: #EFBA08;
    color: white;
  }
</style>