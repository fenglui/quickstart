<template>
  <div id="app">
    <SideBar />
    <div class="main">
      <div class="top-row px-4">
          <a href="Identity/Account/Register">Register</a>
          <a href="Identity/Account/Login">Log in</a>
          <a href="https://docs.microsoft.com/en-us/aspnet/" target="_blank">About</a>
      </div>
      <div class="content px-4">
          <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
export default {
  components: {
    SideBar
  }
}
</script>

<style>

</style>
