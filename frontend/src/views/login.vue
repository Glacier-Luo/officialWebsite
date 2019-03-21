<style lang="less" scoped>
  #login {
    width: 100%;
    height: 300px;
    margin: 0 auto;
  }

  #title {
    margin-top: 80px;
    text-align: center;
    margin-bottom: 20px;
    font-size: 33px;
  }

  h2 {
    margin-top: 20px;
  }

  #loginbody {
    background-color: #f8f8f9;
    height: 700px;
  }
</style>

<template>
  <div id="loginbody">
    <Row
      type="flex"
      justify="center"
    >
      <Col
        span="7"
      >
      <div>
        <h1 id="title">
          软件学院软件工程中心
        </h1>
        <Card
          id="login"
        >
          <div style="text-align:center">
            <h2>账号密码登陆</h2>
            <Divider />
            <!-- 表单 -->
            <Form
              ref="loginform"
              :model="login"
              :rules="loginrule"
              inline
            >
              <FormItem
                prop="user"
                style="width: 80%"
              >
                <Input
                  v-model="login.username"
                  type="text"
                  placeholder="用户名"
                  size="large"
                >
                <Icon
                  slot="prepend"
                  type="ios-person-outline"
                ></Icon>
                </Input>
              </FormItem>
              <FormItem
                prop="password"
                style="width: 80%"
              >
                <Input
                  v-model="login.password"
                  type="password"
                  placeholder="密码"
                  size="large"
                >
                <Icon
                  slot="prepend"
                  type="ios-lock-outline"
                ></Icon>
                </Input>
              </FormItem>
              <br />
              <FormItem style="width: 80%">
                <!--<Button type="primary" @click="handleSubmit('loginform')" long size="large">登陆</Button>-->
                <Button
                  type="primary"
                  long
                  size="large"
                  @click="handleSubmit()"
                >
                  登陆
                </Button>
              </FormItem>
            </Form>
          </div>
        </Card>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { Card, Form, FormItem, Input, Icon, Button, Divider, Row, Col } from 'iview';
  import api from '../axios/api'
  export default {
    components: {
      Card, Form, FormItem, Input, Icon, Button, Divider, Row, Col
    },
    data () {
      return {
        login: {
          username: '',
          password: ''
        },
        loginrule: {
          username: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(){
        let data = Object.assign({}, this.login);
        api.login(data).then(res => {
          // this.login.username = res.data.token
          this.$store.commit('change', res.data.token)
        })
      }
      // handleSubmit(name) {
      //   this.$refs[name].validate((valid) => {
      //     if (valid) {
      //       this.$Message.success('Success!');
      //     } else {
      //       this.$Message.error('Fail!');
      //     }
      //   })
      // }
    }
  }
</script>
