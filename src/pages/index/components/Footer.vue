<template>
  <footer>
    <div
      class="flex align-center justify-between"
      style="width:1200px;margin:0 auto;"
    >
      <div>
        <h2>
          <el-link :underline="false">服务中心</el-link>
          <el-link
            class="margin-left-sm"
            :underline="false"
          >关于我们</el-link>
        </h2>
        <p style="font-size:12px;color:#81878d;margin-top:10px">
          主办单位：湖南人才市场有限公司
        </p>
        <p
          class="flex align-center"
          style="font-size:12px;color:#81878d;margin-top:10px"
        >
          版权所有：湖南人才市场有限公司
          <el-link
            href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action;jsessionid=39DirQsS_gonUE93RfzWwwX1I1RY5qBzajJ6ZRwXgs9mtk9M3cnG!1870117190"
            :underline="false"
            class="margin-left"
          >湘ICP备17003122号-1</el-link>
          <el-link
            class="margin-left"
            href="http://www.hnrcsc.com/images/yyzz.jpg"
          >湖南人才市场有限公司营业执照公示</el-link>
          <el-link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43011102000758">
            <em class="margin-left">湘公网安备 43011102000758号</em>
          </el-link>
        </p>
      </div>
      <div class="margin-top-sm">
        <img
          style="width:80px;height:80px;"
          src="../assets/images/QRCODE.jpg"
        >
        <p
          class="text-center"
          style="margin-top:5px;"
        >
          官方公众号
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" >
  footer {
  height: 160px;
  width: 100%;
  background: #eaebed;
  position: absolute;
  bottom: 0;
  left: 0%;
  img {
    width: 100%;
    height: 160px;
  }
}
</style>
