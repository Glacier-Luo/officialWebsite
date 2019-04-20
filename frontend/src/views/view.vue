<template>
  <div>
    <Row
      type="flex"
      justify="center"
    >
      <Col :xs="20" :md="16">
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
      <Col :xs="0" :sm="5" :md="4">
      <Card
        title=" 栏目导航"
        icon="md-menu"
        style="margin-bottom:10px"
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
            :disabled="false"
          >
            {{ X }}
          </Button>
        </div>
      </Card>
      </Col>

      <Col :xs="20" :sm="16" :md="12">
      <Card
        dis-hover
        style="height:500px; padding:10px"
      >
        <h1 style="text-align: center"><strong>{{ title }}</strong></h1>
        <Divider/>
        <div v-html="passage"></div>
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
                title: 'Title',
                passage: '<p>passage</p>'
            }
        },
        mounted: function() {
          this.init()
        },
        methods: {
          init() {
            api.get_view().then(res => {
              let r = res.data.body
              this.title = r.title
              this.passage = r.passage
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
