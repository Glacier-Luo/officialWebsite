<style lang="less" scoped>
</style>

<template>
  <div class="ivu-layout">
    <Layout>
      <Header><AdminMenu /></Header>
      <Content style="margin-top: 20px"><RouterView /></Content>
      <Footer><MyFooter /></Footer>
    </Layout>
  </div>
</template>

<script>
  import AdminMenu from '../components/AdminMenu'
  // import MyMenu from '../components/MyMenu';
  import MyFooter from '../components/MyFooter'
  import { Layout, Header, Content, Footer } from 'iview';
  export default {
    components: {
      MyFooter, AdminMenu, Layout, Header, Content, Footer,
      // Button, Menu, MenuGroup, MenuItem, Icon,
    }
  }
</script>
