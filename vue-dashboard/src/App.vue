<template>
  <div id="app">

    <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column is-3">
            <LeftPanel/>
          </div>
          <div class="column">
            <RightPanel/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import 'bulma/css/bulma.min.css'
  import LeftPanel from './components/LeftPanel'
  import RightPanel from './components/RightPanel'

  export default {
    name: 'App',
    components: {
      LeftPanel,
      RightPanel
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
