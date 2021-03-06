$(function () {
    function get_info() {
        var data;
        $.ajax({
            url: 'js/202151.json',
            type: 'GET',
            dataType: "json",
            async: false,
            success: function (res) {
                data = res;
            }
        })
        return data;
    }
    var data = get_info();
    for (var dataKey in data['data']) {
        var sub_data = data['data'][dataKey];
        // console.log(sub_data)
        var questionName = sub_data['questionName'];
        var questionParent = sub_data['questionParent'];
        if(dataKey == 0){
            var active_class='navigation'
        }else{
            var active_class=''
        }
        var MarHtml = '<div class="swiper-slide clearfix"><a class="'+active_class+'" href="javascript:void(0);" data-banner="banner-' + dataKey + '">' + questionName + ' <img  class="emoji" src="'+questionParent+'"></a></div>';
        $('.swiper-wrapper').append(MarHtml);
        var children = data['data'][0]['children'];
        var children_html = '';
        for (var i in children) {
            var icon = children[i]['icon'];
            if(icon != ''){
                var icon = '<em class="icon" data-text="' + children[i]['icon'] + '">' + children[i]['icon'] + '</em>';
            }
            children_html += '<div class="col-xl-3 col-lg-6"><a href="' + children[i]['url'] + '" target="_blank" class="fade-in d-flex align-items-center my-3  rounded  card-body my-box"><div class="my-img rounded-circle"><img class="mr-3" src="' + children[i]['img'] + ' " alt="" ></div><div class="lh-100 modal-open"> <div class="my-flex"> <h6 class="mb-0 lh-100 fw-bolder my-or-h6"> ' + children[i]['title'] + '</h6>'+icon+'</div><small class="demoDown my-1 mb-0">' + children[i]['txt'] + '</small></div></a></div>'   
        }
        $('#container_box').html(children_html); 
        demoDown();
    };
    $('.swiper-slide a').on("click", function () {
        var cityCode = $(this).attr("data-banner");
        var bannerInfo = cityCode.split('-');
        var children = data['data'][bannerInfo[1]];
        // console.log(children)
        $(".swiper-slide a").removeClass("navigation");
        $(this).addClass("navigation");
        var children_html = '';
        var container_html = '';
        for (var i in children['children']) {
            var icon = children['children'][i]['icon'];
            if(icon != ''){
                var icon = '<em class="icon" data-text="' + children['children'][i]['icon'] + '">' + children['children'][i]['icon'] + '</em>';
            }
            children_html += ' <div class="col-xl-3 col-lg-6"><a href="' + children['children'][i]['url'] + '" target="_blank" class="fade-in d-flex align-items-center my-3  rounded  card-body my-box"><div class="my-img rounded-circle"><img class="mr-3" src="' + children['children'][i]['img'] + ' " alt="" ></div><div class="lh-100 modal-open"><div class="my-flex"><h6 class="mb-0 lh-100 fw-bolder my-or-h6"> ' + children['children'][i]['title'] + ' </h6>'+icon+'</div><small class="demoDown my-1 mb-0" >' + children['children'][i]['txt'] + '</small></div></a></div> '
        };
        container_html += '<img  class="d-block mx-auto mb-4 my-logo-img " width="68px" height="68px" src="'+children.questionGif+'"><h3 class="my-cr-l">'+children.questionName+'</h3><p class="lead my-3 my-cr-txt">'+children.questionTxt+'</p>'
        $('#container_box').html(children_html);
        $('#container_header').html(container_html);
        demoDown();
    });
    function demoDown() {
        $(".demoDown").mouseover(function(event){
            var _this = $(this);
            _this.justToolsTip({
                events:event,
                animation:"moveInBottom",
                // width:"150px",
                contents:$(this).text(),
                gravity:'bottom'
            });
        });
    };
    

})



new Valine({
    el: '#vcomments', 
    app_id: 'BDMNhQVBVrPSk0sPtuoES5pR-gzGzoHsz', // ???????????????????????????APP ID
    app_key: 'dTioucSGHIUy0DkUYcXgqloj', // ???????????????????????????APP KEY
    master: 'd65bb3695502d69d2103c6a9dbf63b54',
    tagMeta: ["??????","?????????","??????"],
    friends:'d87c947f01bbcf3e2ba83a3d1ea05d17',
    placeholder: '????????????...', 
    path: '/Leave.html',
    avatar:'wavatar', // ??????
    lang: 'zh-cn',
    recordIP:true, // ?????????????????????IP
    visitor: true, // ?????????????????????
    enableQQ: true, // ????????????QQ?????????QQ??????
    serverURLs: "",
    pageSize:'10', // ?????????????????????????????????
    metaPlaceholder: {"nick":"??????","mail":"??????"},
});

function getScrollbarWidth() {
  var odiv = document.createElement('div'),//????????????div
      styles = {
          width: '100px',
          height: '100px',
          overflowY: 'scroll'//??????????????????
      }, i, scrollbarWidth;
  for (i in styles) odiv.style[i] = styles[i];
  document.body.appendChild(odiv);//???div?????????body???
  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//??????
  odiv.remove();//???????????????div
  return scrollbarWidth;//?????????????????????
}

  $('#two').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').css("padding-right",getScrollbarWidth()+"px");
  $('body').addClass('modal-active');
})

$('.close-overlay').click(function(){
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $("body").removeAttr("style"); 

});