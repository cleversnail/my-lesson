<template>
  <div class="home">
    <div class="layout">
      <Row type="flex">
        <Col :span="spanLeft" class="layout-menu-left">
          <div class="layout-logo-left">
            <span class="layout-text">Admin 管理系统</span>
          </div>
          <Menu
          theme="dark"
          mode="vertical"
          width="auto"
          :active-name="this.$route.path"
          :open-names="['2']"
          @on-select="menuSelect">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"/>内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"/>用户管理
              </template>
              <MenuItem name="/table">新增用户</MenuItem>
              <MenuItem name="/table/mannage">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats"/>统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </Col>
        <Col :span="spanRight">
          <div class="layout-header">
            <Button type="text" @click="toggleClick">
              <Icon type="md-menu" size="32"/>
            </Button>
            <div class="userinfo">
              <Dropdown>
                <a href="javascript:void(0)">
                  {{userName}}
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <!-- 1111 -->
          <Breadcrumb>
            <BreadcrumbItem to="/table">首页</BreadcrumbItem>
            <BreadcrumbItem to="/table/mannage">Components</BreadcrumbItem>
          </Breadcrumb>
          <!-- 22222222 -->
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      spanLeft: 5,
      spanRight: 19,
      userName: ''
    };
  },
  created () {
    this.userName = JSON.parse(sessionStorage.getItem('user'))
  },
  methods: {
    menuSelect (name) {
      console.log(name)
      this.$router.push({ path: name })
    },
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 1;
        this.spanRight = 23;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    }
  }
};
</script>

<style scoped>
.home,
.layout {
  width: 100%;
  height: 100%;
}
.ivu-row-flex {
  height: 100%;
}
.layout-menu-left {
  background: #515a6e;
}
.userinfo{
  float: right;
  margin: 10px 20px;
}
.ivu-col-span-19{
  background-color: #eee;
}
.layout-header{
  background-color: #fff;
  padding: 10px 0;
}
</style>
