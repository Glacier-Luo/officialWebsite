<template>
  <div id="loginbody">
    <Row
      type="flex"
      justify="center"
    >
      <Col
        :xs="22" :md="12"
      >
      <div style="margin-top: 60px; margin-bottom: 60px">
        <Card
          id="login"
          style="height: 500px"
        >
            <h2 style="text-align:center"><Icon type="md-lock" />密码修改</h2>
            <Divider />
            <div style="margin-top: 40px">
                <Row style="margin: 20px">
                    <Col :xs="6" :md="3" class="text">
                        <span>原密码：</span>
                    </Col>
                    <Col :xs="18" :md="20">
                        <Input type="password" v-model="nowpwd" placeholder="请输入原密码" clearable size="large" />
                    </Col>
                </Row>
                <Row style="margin: 20px">
                    <Col :xs="6" :md="3" class="text">
                        <span>新密码：</span>
                    </Col>
                    <Col :xs="18" :md="20">
                        <Input type="password" v-model="newpwd" placeholder="请输入新密码" clearable size="large" />
                    </Col>
                </Row>
                <Row style="margin: 20px">
                    <Col :xs="6" :md="3" class="text">
                        <span>确认密码：</span>
                    </Col>
                    <Col :xs="18" :md="20">
                        <Input type="password" v-model="newpwda" placeholder="请再次输入新密码" @on-blur="samecheck()" @on-focus="same=true" clearable size="large" />
                        <p class="warning" v-show="!same">两次输入的密码不一致</p>
                    </Col>
                </Row>
                <Row style="margin: 20px">
                    <Col :xs="{offset: 6}" :md="{offset: 3}">
                        <Button type="primary" size="large" @click="handleSubmit()">保存</Button>
                    </Col>
                </Row>
            </div>
        </Card>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { Card, Input, Icon, Button, Divider, Row, Col } from 'iview';
  import api from '../axios/api'
  export default {
    components: {
      Card, Input, Icon, Button, Divider, Row, Col
    },
    data () {
      return {
          nowpwd: '',
          newpwd: '',
          newpwda: '',
          same: true
      }
    },
    methods: {
        samecheck() {
            if (this.newpwd != this.newpwda) this.same = false;
            else this.same = true;
        },
        handleSubmit() {
          if(this.same) {
            let data = {
              nowpwd: this.nowpwd,
              newpwd: this.newpwd
            }
            api.check_password(data).then(res => {
              this.$store.commit('change', res.data.token)
              // 密码错误
              if(res.data.body) {
                alert("原密码输入错误")
                this.nowpwd = ''
              }
              else {
                alert("修改成功")
              }
            })
          }
        }
    }
  }
</script>

<style scoped>
    #login {
        padding: 10px;
    }

    .warning {
        color: red;
        padding-top: 4px;
        padding-left: 2px;
    }

    .text{
        text-align: right;
        padding-right: 5px;
        padding-top: 6px;
    }
</style>