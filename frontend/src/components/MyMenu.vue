<template>
  <div id="header">
    <Menu
      mode="horizontal"
      theme="light"
      :active-name="activeMenu"
      class="menu"
      @on-select="handleRoute"
    >
      <Col :xs="0" :md="24">
        <div class="logo">
          <img src="../assets/logo.png"><Divider type="vertical" /><span class="name">软件学院软件工程中心</span>
        </div>
        <div>
          <MenuItem name="/">
            <Icon type="ios-paper" />
            首页
          </MenuItem>
          <MenuItem name="/profile">
            <Icon type="ios-stats" />
            机构概况
          </MenuItem>
          <MenuItem name="/news">
            <Icon type="ios-globe" />
            新闻中心
          </MenuItem>
          <MenuItem name="/cooperation">
            <Icon type="ios-flask" />
            科研合作
          </MenuItem>
          <MenuItem name="/services">
            <Icon type="ios-flag" />
            社会服务
          </MenuItem>
          <MenuItem name="/train">
            <Icon type="ios-chatboxes" />
            人才培养
          </MenuItem>
          <MenuItem name="/files">
            <Icon type="ios-cloud-download" />
            文件资料
          </MenuItem>
          <MenuItem name="/recruit">
            <Icon type="ios-contacts" />
            人才招聘
          </MenuItem>
        </div>
        <div style="float: right; margin-right: 20px">
          <Button type="primary">登出</Button>
        </div>
      </Col>

      <Col :xs="24" :md="0">
        <div>
          <Dropdown style="margin-left: 10px" trigger="click" @on-click="handleRoute">
            <Button>
                <Icon type="md-menu" style="font-size: 22px"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem class="drop" name="/">
                  <Icon type="ios-paper" />
                  首页
                </DropdownItem>
                <DropdownItem class="drop" name="/profile">
                  <Icon type="ios-stats" />
                  机构概况
                </DropdownItem>
                <DropdownItem class="drop" name="/news">
                  <Icon type="ios-globe" />
                  新闻中心
                </DropdownItem>
                <DropdownItem class="drop" name="/cooperation">
                  <Icon type="ios-flask" />
                  科研合作
                </DropdownItem>
                <DropdownItem class="drop" name="/services">
                  <Icon type="ios-flag" />
                  社会服务
                </DropdownItem>
                <DropdownItem class="drop" name="/train">
                  <Icon type="ios-chatboxes" />
                  人才培养
                </DropdownItem>
                <DropdownItem class="drop" name="/files">
                  <Icon type="ios-cloud-download" />
                  文件资料
                </DropdownItem>
                <DropdownItem class="drop" name="/recruit">
                  <Icon type="ios-contacts" />
                  人才招聘
                </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button type="primary" style="margin-left: 20px">登出</Button>
        </div>
      </Col>
    </Menu>
  </div>
</template>

<script>
    import { Menu, MenuItem, Icon, Divider, Button, Col, Dropdown, DropdownMenu, DropdownItem } from 'iview';
    export default {
        name: "MyMenu",
        components:{
            Menu, MenuItem, Icon, Divider, Button, Col, Dropdown, DropdownMenu, DropdownItem
        },
        computed: {
            activeMenu () {
              return '/' + this.$route.path.split('/')[1]
            }
        },
        methods: {
            handleRoute(route){
                // console.log(route);
                this.$router.push(route);
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

        .drop {
          width: 120px;
          text-align: center;
        }
    }
</style>
