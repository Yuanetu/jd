var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  });



//左侧点击吸顶效果
//1.获取ul
var ul = document.querySelector('.aside-left ul');

//2.获取到ul中的所有li标签
var list = ul.children;
// console.log(list);

//3.为所有的li标签添加索引
for (var i = 0;i <list.length; i++){
  list[i].index = i;
}

//4.使用冒泡，为所有的li标签注册点击事件
ul.addEventListener('click',function(e){
//5.获取到当前点击的li标签
var li = e.target.parentNode;
// console.log(e);
// console.log(li);
// console.log(li.index);

//6.获取到当前点击的li的索引
var index = li.index;

//7.获取到当前点击的li的高
var liHeight = li.offsetHeight;

//8.计算出需要位移的距离
var distance = -index * liHeight;

//9.判断当前位移的距离是否大于最大的位移距离，如果大于，就使用当前计算出来的位移距离，
// 如果小于,则使用最大的位移距离
//计算出最大的位移距离
var maxDistanceY = document.querySelector('.aside-left').offsetHeight - ul.offsetHeight;

if(distance > maxDistanceY){
  document.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px,' + distance + 'px, 0px)'; 
}
else {
  document.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px,' + maxDistanceY + 'px, 0px)'; 

}

document.querySelector('.swiper-wrapper').style.transition = 'all 0.3s';

// 10. 给所有的li删除active 给当前的li去添加active
for (var i = 0; i < list.length; i++) {

  list[i].classList.remove('active');
  
}
li.classList.add('active');


});

// document.body.addEventListener('touchstart', function () { });
