$(function () {

    function get_info() {
        var data;
        $.ajax({
            url: 'js/202151.json',
            type: 'GET',
            dataType: "json",
            async: false,
            success: function (res) {
                console.log(res)
                data = res;
            }
        })
        return data;
    }

    var data = get_info();
    for (var dataKey in data['data']) {
        var sub_data = data['data'][dataKey];
        var questionName = sub_data['questionName'];
        var questionParent = sub_data['questionParent'];

        if(dataKey == 0){
            var active_class='navigation'
        }else{
            var active_class=''
        }
        var MarHtml = '<div class="swiper-slide clearfix"><a class="'+active_class+'" href="javascript:void(0);" data-banner="banner-' + dataKey + '">' + questionName + ' <span class="emoji"> ' + questionParent + '</span></a></div>';
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
        console.log(children);
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
        container_html += '<div class="fs-0 emoji">'+children.questionParent+'</div><h2 class="my-cr-l">'+children.questionName+'</h2><p class="lead my-3 my-cr-txt">'+children.questionTxt+'</p>'
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


