<template>
  <div>
    <Row
      type="flex"
      justify="center"
    >
      <Col span="16">
      <Card dis-hover>
        <!--此处应为一张宣传图-->
        <img src="">
      </Card>
      </Col>
    </Row>

    <br />

    <Row
      type="flex"
      justify="center"
      :gutter="24"
    >
      <Col span="4">
      <Card
        title=" 栏目导航"
        icon="md-menu"
      >
        <div
          v-for="(ICON,X) in guide"
          id="buttonmargin"
        >
          <Button
            long
            :icon="ICON[0]"
            size="large"
            :to="ICON[1]"
            :disabled="X=='机构概况'"
          >
            {{ X }}
          </Button>
        </div>
      </Card>
      </Col>

      <Col span="12">
      <Card
        dis-hover
        style="height:500px"
      >
        <Divider><h2 style="color: #515a6e">机构概况</h2></Divider>
        <div v-html="desc"></div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
    import { Card, Row, Col, Button, Divider } from 'iview';
    import api from '../axios/api'
    export default {
        components:{
            Card, Row, Col, Button, Divider
        },
        data () {
            return {
                guide:{
                  "首页":["ios-paper","/"],
                  "机构概况":["ios-stats","/profile"],
                  "新闻中心":["ios-globe","/news"],
                  "科研合作":["ios-flask","/cooperation"],
                  "社会服务":["ios-flag","/services"],
                  "人才培养":["ios-chatboxes","/train"],
                  "文件资料":["ios-cloud-download","/files"],
                  "人才招聘":["ios-contacts","/recruit"]
                },
                desc: ''
            }
        },
        mounted () {
            this.init()
        },
        methods:{
            init(){
                api.get_desc().then(res => {
                    this.desc = res.data.body
                })
            }
        }
    }
</script>

<style scoped>
  #buttonmargin {
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>
