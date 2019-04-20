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
            :disabled="X=='科研合作'"
          >
            {{ X }}
          </Button>
        </div>
      </Card>
      </Col>

      <Col :xs="20" :sm="16" :md="12">
      <Card
        dis-hover
        style="height:500px"
      >
        <Divider><h2 style="color: #515a6e">科研合作</h2></Divider>
        <Row
          type="flex"
          justify="center"
          style="margin-bottom: 40px"
        >
          <Col span="21">
            <ol>
              <li
                v-for="item in display"
                style="font-size:15px"
              >
              <a href="#" style="color: black">
                {{ item }}
              </a>
              </li>
            </ol>
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
        >
          <div style="position: absolute;bottom: 10px;">
            <Page :total="length" @on-change="onChange" @on-page-size-change="sizeChange" show-total show-sizer />
          </div>
        </Row>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
    import { Card, Row, Col, Button, Page, Divider } from 'iview';
    import api from '../axios/api'
    export default {
        components:{
            Card, Row, Col, Button, Page, Divider
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
                pageList: [],
                currentpage: 1,
                currentlist: 10,
                display: []
            }
        },
        computed: {
          length: function() {
            return this.pageList.length
          }
        },
        mounted: function() {
          this.init()
        },
        methods: {
          init: function() {
            // 初始数据
            api.get_cooperation().then(res => {
              // 还没有写文章标题的url
              this.pageList = res.data.body
            })
            // 页面初始分页
            var _this = this
            if (this.pageList.length >= 10) {
              _this.display = _this.pageList.slice(0, 10)
            }
            else {
              _this.display = _this.pageList.slice(0, _this.pageList.length)
            }
          },
          onChange: function(page) {
            this.currentpage = page
            var str = (this.currentpage-1) * this.currentlist;
            var end
            var _this = this
            if (this.pageList.length - str < this.currentlist) {
              end = str + this.pageList.length - str
            }
            else end = this.currentlist + str
            this.display = this.pageList.slice(str, end)
          },
          sizeChange: function(list) {
            this.currentlist = list
            var str = (this.currentpage-1) * this.currentlist;
            var end
            var _this = this
            if (this.pageList.length - str < this.currentlist) {
              end = str + _this.pageList.length - str
            }
            else end = _this.currentlist + str
            this.display = this.pageList.slice(str, end)
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
