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
      <Col :xs="20" :md="11">

      <!-- 新闻中心 -->
      <Row>
        <Card
          dis-hover
          :padding="padding"
          style="min-height:300px"
        >
          <p slot="title">
            新闻中心
          </p>
          <a
            slot="extra"
            href="#"
            @click.prevent="changeLimit"
          >
            更多
          </a>
          <Row>
            <Col :xs="24" :md="15">
              <img src="../assets/logo.png">
            </Col>
            <Col :xs="24" :md="9">
            <Divider orientation="left">
              Top 1
            </Divider>
            <p v-text="topnews"></p>
            <br />
            <ul v-for="n in news">
              <li>
                <a href="">
                  {{ n }}
                </a>
              </li>
            </ul>
            </Col>
          </Row>
        </Card>
      </Row>
      
      <br />

      <Row :gutter="16">
        <!-- 教材资源 -->
        <Col :xs="24" :md="12">
        <Card
          dis-hover
          style="min-height: 260px; margin-bottom: 10px;"
          :padding="padding"
        >
          <p slot="title">
            教材资源
          </p>
          <a
            slot="extra"
            href="#"
            @click.prevent="changeLimit"
          >
            更多
          </a>
          <ul v-for="t in teach">
            <li>
              <a href="#">
                {{ t }}
              </a>
            </li>
          </ul>
        </Card>
        </Col>
        <!-- 音像资源 -->
        <Col :xs="24" :md="12">
        <Card
          dis-hover
          style="min-height:260px"
          :padding="padding"
        >
          <p slot="title">
            音像资源
          </p>
          <a
            slot="extra"
            href="#"
            @click.prevent="changeLimit"
          >
            更多
          </a>
          <ul v-for="v in vedio">
            <li>
              <a href="#">
                {{ v }}
              </a>
            </li>
          </ul>
        </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Card
          dis-hover
          style="height:200px; margin-bottom: 10px"
        >
          <p slot="title">
            学员风采
          </p>
          <marquee>
            <img
              v-for="i in (1,5)"
              src=""
              height="100px"
            >
          </marquee>
        </Card>
      </Row>

      </Col>

      <Col :xs="20" :md="5">
      <!-- 通知公告 -->
      <Row>
        <Card
          dis-hover
          style="height:270px"
        >
          <p slot="title">
            通知公告
          </p>
          <a
            slot="extra"
            href="#"
            @click.prevent="changeLimit"
          >
            更多
          </a>
          <marquee
            direction="up"
            scrollamount="3"
            on-mouse-out="this.start()"
            on-mouse-over="this.stop()"
            style="height:175px"
          >
            <ul v-for="n in notice">
              <li>
                <a href="#">
                  {{ n }}
                </a>
              </li>
              <Divider />
            </ul>
          </marquee>
        </Card>
      </Row>

      <br />

      <Row>
        <Card
          title=" 应用平台"
          icon="md-menu"
        >
          <div
            v-for="(ICON,X) in platform"
            id="buttonmargin"
          >
            <Button
              long
              :icon="ICON"
              size="large"
            >
              {{ X }}
            </Button>
          </div>
        </Card>
      </Row>

      <br />

      <Row>
        <Card
          dis-hover
          style="min-height:260px"
        >
          <p slot="title">
            相关链接
          </p>
        </Card>
      </Row>

      </Col>
    </Row>
  </div>
  <!--<div>-->
  <!--<Card style="width: 320px">-->
  <!--<div style="text-align:center">-->
  <!--<img src="../assets/logo.png">-->
  <!--<h3>首页</h3>-->
  <!--</div>-->
  <!--</Card>-->
  <!--</div>-->
</template>

<script>
    import { Card, Row, Col, Divider, Button } from 'iview';
    import api from '../axios/api'
    export default {
        components:{
            Card, Row, Col, Divider, Button
        },
        data () {
            return {
                news:["全国县级职教中心新时代振兴发展研讨会在石家庄市召","职业教育新发展 校企合作结硕果"],
                topnews: '',
                teach: ["《计算机应用基础（Access2010数据库应用系统）》","《计算机应用基础（PowerPoint2010电子演示文稿系统）》"],
                vedio: ["《学前儿童卫生与保健》","《学前儿童健康教育》"],
                notice: [
                  "关于中央广播电视中等专业学校2017-2018学年度 第二学期期末考试的通知",
                  "2017年度中央广播电视中等专业学校奖学金评审结果公示",
                  "教育部职业教育与成人教育司对《关于中央广播电视中等专业学校学历证书在线验证办法的请示》的答复",
                  "关于印发《开放远程中职在线会计等13个专业教学实施方案》的通知"
                ],
                platform:{
                  "教务管理系统":"md-settings",
                  "学籍查询系统":"md-search",
                  "毕业证书查询系统":"md-search",
                  "学历证书在线验证系统":"md-search",
                },
                padding: 30,
            }
        },
        mounted: function() {
          this.init()
        },
        methods: {
          init: function() {
            api.get_index().then(res => {
              // 没有各文章标题的url
              let r = res.data.body;
              this.news = r.news;
              this.topnews = this.news[0];
              this.video = r.video;
              this.notice = r.notice;
            })
          }
        }
    }
</script>

<style scoped lang="less">

    #buttonmargin {
      margin-bottom: 3px;
      margin-bottom: 3px;
    }

    a {
      color: black;
    }

</style>
