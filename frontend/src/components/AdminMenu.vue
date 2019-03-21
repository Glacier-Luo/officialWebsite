<template>
  <div id="header">
    <Menu
      mode="horizontal"
      theme="light"
      :active-name="activeMenu"
      class="menu"
      @on-select="handleRoute"
    >
      <div class="logo">
        <img src="../assets/logo.png"><Divider type="vertical" /><span class="name">软件学院软件工程中心后台</span>
      </div>
      <MenuItem name="/">
        <Icon type="ios-paper" />
        回到首页
      </MenuItem>
      <MenuItem name="/admin/editprofile">
        <Icon type="ios-stats" />
        机构概况编辑
      </MenuItem>
      <MenuItem name="/admin/manage">
        <Icon type="ios-globe" />
        文章管理
      </MenuItem>
      <MenuItem name="/admin/edit">
        <Icon type="ios-flask" />
        文章编辑
      </MenuItem>
      <!--<MenuItem name="/services">-->
      <!--<Icon type="ios-flag" />-->
      <!--社会服务-->
      <!--</MenuItem>-->
      <!--<MenuItem name="/train">-->
      <!--<Icon type="ios-chatboxes" />-->
      <!--人才培养-->
      <!--</MenuItem>-->
      <!--<MenuItem name="/files">-->
      <!--<Icon type="ios-cloud-download" />-->
      <!--文件资料-->
      <!--</MenuItem>-->
      <!--<MenuItem name="/recruit">-->
      <!--<Icon type="ios-contacts" />-->
      <!--人才招聘-->
      <!--</MenuItem>-->
      <div style="float: right; margin-right: 20px">
        <Button
          type="primary"
          @click="logout"
        >
          登出
        </Button>
      </div>
      <div
        v-show="isShow"
        style="float: right; margin-right: 20px"
      >
        <Button
          type="primary"
          to="/admin"
        >
          登录
        </Button>
      </div>
    </Menu>
  </div>
</template>

<script>
    import { Menu, MenuItem, Icon, Divider, Button } from 'iview';
    export default {
        name: "AdminMenu",
        // data(){
        //   return{
        //       isShow: true,
        //   }
        // },
        components:{
            Menu, MenuItem, Icon, Divider, Button
        },
        computed: {
            activeMenu () {
                return '/' + this.$route.path.split('/')[1]
            },
            isShow(){
                return !this.$store.getters.token;
            }
        },
        watch:{

        },
        methods: {
            handleRoute(route){
                // console.log(route);
                this.$router.push(route);
            },
            logout(){
                // console.log('logout');
                this.$store.commit('change', '')
                this.$router.push('/admin');
            }
        }
    }
</script>

<style scoped lang="less">
    #header {
        min-width: 1500px;
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        z-index: 1000;
        background-color: #fff;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);

        .oj-menu {
            background: #fdfdfd;
        }

        .logo {
            margin-left: 2%;
            margin-right: 2%;
            font-size: 20px;
            float: left;
            line-height: 60px;
        }

        img {
            float: left;
        }

        /*太菜了， logo和文字对不齐*/
        .name {
            /*display: inline-block;*/
            /*vertical-align: middle;*/
            /*line-height: 60px;*/

            /*position: relative;*/
            /*top: -17px;*/
        }
    }
</style>
