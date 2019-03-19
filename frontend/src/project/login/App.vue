<style lang="less" scoped>
</style>

<template>
  <div class="ivu-layout">
    <Layout>
      <Content style="margin: 20px">
        <RouterView />
      </Content>
    </Layout>
  </div>
</template>

<script>
  import { Layout, Header, Content, Footer } from 'iview';
  export default {
    components: {
      Layout, Header, Content, Footer,
      // Button, Menu, MenuGroup, MenuItem, Icon,
    }
  }
</script>