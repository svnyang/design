
var _PageHeight = document.documentElement.clientHeight,
_PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框小部件的宽度为90px，高度为90px）  
var _LoadingTop = _PageHeight > 230 ? (_PageHeight - 230) / 2 : 0,
_LoadingLeft = _PageWidth > 230 ? (_PageWidth - 230) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容  
$('body').addClass('modal-active');
  // var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight +  'px;top:0;background:#FFFFFF;opacity:1.0;filter:alpha(opacity=80);z-index:10000;"><div class="spinner" style="position: top: 60px; margin:' + _LoadingTop + 'px auto ;   width: 230px;height: 230px;background-color: #67CF22;background: url(images/tsp-pro.gif) no-repeat;background-size: 100% 100%;"></div></div>';
  var _LoadingHtml = '<div id="loadingDiv" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background:#FFFFFF;opacity:1.0;filter:alpha(opacity=80);z-index:10000;"><div class="spinner" style="position: top: 60px; margin:' + _LoadingTop + 'px auto ;   width: 230px;height: 230px;background-color: #67CF22;background: url(images/tsp-pro.gif) no-repeat;background-size: 100% 100%;"></div></div>';
//呈现loading效果  
document.write(_LoadingHtml);
//监听加载状态改变  
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果  
function completeLoading() {
if (document.readyState == "complete") {
    //此引用了Jquery，页面没有导jq包的，需要自行加入
    $('body').removeClass('modal-active');
    $("#loadingDiv").fadeOut(1500);
    // var loadingMask = document.getElementById('loadingDiv');
    //     loadingMask.parentNode.removeChild(loadingMask);
}
}

