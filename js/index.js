$(function () {
  //一、监听设置轮播图功能

  $(window).on("resize", function () {
    //1.获取窗口宽度
    let clientW = $(window).width();

    //2.设置临界值
    let isShowBigImage = clientW >= 800;

    //3.获取所有的item
    let $allItems = $("#lk_carousel .item");

    //4.遍历
    $allItems.each(function (index, item) {
      //4.1取出图片路径
      let src = isShowBigImage
        ? $(item).data("lg-img")
        : $(item).data("sm-img");
      let imgUrl = 'url("' + src + '")';
      //4.2设置背景
      $(item).css({
        backgroundImage: imgUrl,
      });
      //4.3设置img标签
      if (!isShowBigImage) {
        let $img = "<img src='" + src + "'></img>";
        $(item).empty().append($img);
      } else {
        $(item).empty();
      }
    });
  });
  $(window).trigger("resize");
  //二、工具提示初始化
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //三、头部导航样式
  $("#lk_header ul li").mouseover(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  //导航跳转事件
  let allList = $("#lk_nav li");
  $(allList[0]).on("click", function () {
    $("html, body").animate({ scrollTop: $("#lk_about").offset().top }, 1000);
  });
  $(allList[1]).on("click", function () {
    $("html, body").animate({ scrollTop: $("#lk_product").offset().top }, 1000);
  });
  $(allList[2]).on("click", function () {
    $("html, body").animate({ scrollTop: $("#lk_hot").offset().top }, 1000);
  });
});
