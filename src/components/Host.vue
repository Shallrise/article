<template>
  <div>
    <div class="logout">
      <el-dropdown class="userIn" @command="headle">
        <span class="el-dropdown-link">
          {{user.data.profile.nickname}}
          <i><img :src="user.data.profile.avatarUrl"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
          <el-dropdown-item command="set">设置</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="articl">
        <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-document-copy"></i>内容管理</template>
        <el-menu-item index="/article/index">文章列表</el-menu-item>
        <el-menu-item index="/article/create">新建文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Host",
  data() {
    return {
      user: JSON.parse(window.sessionStorage.getItem("user")),
    };
  },
  methods: {
      headle(command){
          if(command=='logout'){
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         this.postRequest('/logout');
         window.sessionStorage.removeItem('tokenStr');
         window.sessionStorage.removeItem('user');
         this.$router.replace('/loginblog');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
          }
      }
  },
};
</script>

<style scoped>
body,html{
    padding:0;
    margin:0;
}


/* background: rgba(255, 255, 255, 0); */

.logout {
  display: flex;
  background: url("../assets/images/qQLY07vrXW.jpg");
    background-size:100%;   
    background-repeat:no-repeat;
  /* align-items: center; */
  justify-content: flex-end;
  padding: 0 12px;
  box-sizing: border-box;
}

.userIn{
    cursor:pointer;
}

.el-dropdown-link
{
  text-align: center;
  font-size:20px;
}
.el-dropdown-link img{
    width: 110px;
    height: 110px;
    border-radius:70px;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

</style>
