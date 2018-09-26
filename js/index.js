//头部js代码区域
window.addEventListener('load',function(){
    //1.获取header顶部元素
    var header = document.querySelector('#header');

    //2.获取到轮播图区域的真实高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
    // console.log(slideHeight);

    //防止突然刷新页面没有触发事件 无法生效背景色
    scroll();

    //3.为页面注册滚动事件
    window.addEventListener('scroll',scroll);

    function scroll(){
        //4.获取页面向上滚出去的距离
        var top = document.documentElement.scrollTop;
        // console.log(top);

		// 5. 计算当前滚动里面的透明度值 距离/轮播图高度
        var opacity = top / slideHeight ;

        // 6. 判断当前透明度是否大于1
        if(opacity > 1){
            // 7. 如果透明度大于1就设置为1
            header.style.backgroundColor = 'rgba(222, 24, 27,1)';
        }
        else {
            // 8. 如果透明度小于 就设置为当前计算的透明度
            header.style.backgroundColor = 'rgba(222, 24, 27,'+ opacity+ ')';
        }
    }
    
});



//轮播图js代码区域
//初始化swiper     
  var mySwiper = new Swiper ('#slide .swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项

    autoplay: {
        delay: 1000, //轮播图的延迟
        stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
        disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

  });

