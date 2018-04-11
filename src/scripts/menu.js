layui.use(['layer','element'], function(){
	var layer = layui.layer, //获得layer模块
		element = layui.element;





	
	// 初始化
	initMenu(menu,$(".side-menu"));
	element.render('nav');
	

	element.on('nav(vknav)', function(elem){
  		addIframe($(this));
	});

	function addIframe(that) {
		var $this = that;
		var id = $this.data('id');
		var hr = $this.data('href');
		var isHas = false;
		if(hr == '' || $.trim(hr).length == 0 || $.trim(hr) == 'javascript:;') {
			return false;
		}else {

		}
		$('iframe.body-iframe').each(function(index, el) {
			var $src = $(this).attr('src');
			if($src == hr) {
				$(this).show().siblings(".body-iframe").hide();
				isHas = true;
			}
		});
		if(!isHas) {
			var iframe = "<iframe class='body-iframe' name='iframe"+ id +"' src='"+ hr +"' frameborder='0' data-id='"+ id +"' seamless></iframe>";
			$(".vk-body").find("iframe.body-iframe").hide().end().append(iframe);
		}
		return false;
	};

	$('.nav-cocntrol').toggle(function() {
		$('.vk-side').animate({marginLeft: '-220px',opeacity: 0},200);
		$('.vk-header,.vk-body').animate({paddingLeft: 0,},200);
		$('.nav-cocntrol > i').html('&#xe637;');
	}, function() {
		$('.vk-side').animate({marginLeft: 0,opeacity: 1},200);
		$('.vk-header,.vk-body').animate({paddingLeft: '220px',},200);
		$('.nav-cocntrol > i').html('&#xe6c0;');
	});
	setInterval(function() {
		$('.vk-time').html(getCurrentTime());
	},1000);
	
});

function getCurrentTime() {  
    var date = new Date(); 
    var month = zeroFill(date.getMonth() + 1); 
    var day = zeroFill(date.getDate()); 
    var hour = zeroFill(date.getHours());
    var minute = zeroFill(date.getMinutes()); 
    var second = zeroFill(date.getSeconds());

    var curTime = date.getFullYear() + "-" + month + "-" + day  
            + " " + hour + ":" + minute + ":" + second;  
      
    return curTime;  
}; 
function zeroFill(i){  
    if (i >= 0 && i <= 9) {  
        return "0" + i;  
    } else {  
        return i;  
    }  
}; 



var menu = 
	[
		{
			"id":"menu_home",
			"name":"首页",
			"parentId":"0",
			"url":"index.html",
			"icon":"&#xe611;",
			"order":"1",
			"isHeader":"1",
			"childMenus":[
				{
					"id":"1",
					"name":"用户系统",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe61e;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"1_1",
							"name":"App用户",
							"parentId":"1",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"1_1_1",
									"name":"用户管理",
									"parentId":"1_1",
									"url":"app_user/user.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"1_1_2",
									"name":"角色管理",
									"parentId":"1_1",
									"url":"app_user/role.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						},
						{
							"id":"1_2",
							"name":"后台用户",
							"parentId":"1",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"1_2_1",
									"name":"管理员列表",
									"parentId":"1_2",
									"url":"javascript:;",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"1_2_2",
									"name":"规则列表",
									"parentId":"1_2",
									"url":"javascript:;",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"1_2_3",
									"name":"角色列表",
									"parentId":"1_2",
									"url":"javascript:;",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						}
					]
				},
				{
					"id":"2",
					"name":"数据管理",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe690;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"2_1",
							"name":"App配置",
							"parentId":"2",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"2_2_1",
									"name":"模块管理",
									"parentId":"2_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_2",
									"name":"广告管理",
									"parentId":"2_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_3",
									"name":"问题管理",
									"parentId":"2_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_3",
									"name":"联系我们",
									"parentId":"2_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						},
						{
							"id":"2_2",
							"name":"后台配置",
							"parentId":"2",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"2_2_1",
									"name":"基地管理",
									"parentId":"2_2",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_2",
									"name":"分类管理",
									"parentId":"2_2",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_3",
									"name":"产品管理",
									"parentId":"2_2",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_3",
									"name":"批次管理",
									"parentId":"2_2",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"2_2_3",
									"name":"机构管理",
									"parentId":"2_2",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						},
						{
							"id":"2_3",
							"name":"全部数据",
							"parentId":"2",
							"url":"produc.html",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":""
						}
					]
				},
				{
					"id":"3",
					"name":"溯源管理",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe678;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"3_1",
							"name":"溯源信息",
							"parentId":"3",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"1_2_1",
									"name":"节点管理",
									"parentId":"3_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"1_2_2",
									"name":"溯源记录管理",
									"parentId":"3_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						}
					]
				},
				{
					"id":"4",
					"name":"二维码管理",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe60a;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"4_1",
							"name":"码管理",
							"parentId":"4",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"4_1_1",
									"name":"追溯码查询",
									"parentId":"4_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"4_1_2",
									"name":"生成追溯码",
									"parentId":"4_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"4_1_3",
									"name":"追溯码下载",
									"parentId":"4_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},
								{
									"id":"4_1_4",
									"name":"码关联",
									"parentId":"4_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						}
					]
				},
				{
					"id":"5",
					"name":"营销管理",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe616;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"5_1",
							"name":"营销活动",
							"parentId":"4",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"5_1_1",
									"name":"扫码抽奖",
									"parentId":"5_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						}
					]
				},
				{
					"id":"6",
					"name":"物流管理",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe615;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"6_1",
							"name":"在线订货",
							"parentId":"6",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"6_1_1",
									"name":"发货列表",
									"parentId":"6_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						}
					]
				},
				{
					"id":"7",
					"name":"系统设置",
					"parentId":"menu_home",
					"url":"javascript:;",
					"icon":"&#xe64c;",
					"order":"1",
					"isHeader":"2",
					"childMenus":[
						{
							"id":"7_1",
							"name":"H5模板",
							"parentId":"7",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"7_1_1",
									"name":"模板管理",
									"parentId":"7_1",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						},{
							"id":"7_2",
							"name":"App管理",
							"parentId":"7",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"7_2_1",
									"name":"基本设置",
									"parentId":"7_2",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						},{
							"id":"7_3",
							"name":"Web管理",
							"parentId":"7",
							"url":"javascript:;",
							"icon":"",
							"order":"1",
							"isHeader":"3",
							"childMenus":[
								{
									"id":"7_3_1",
									"name":"基本设置",
									"parentId":"7_3",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								},{
									"id":"7_3_2",
									"name":"密码修改",
									"parentId":"7_3",
									"url":"product/product-add.html",
									"icon":"",
									"order":"1",
									"isHeader":"4",
									"childMenus":""
								}
							]
						}
					]
				}
			]
		}
	];
function initMenu(menu,parent){
	for(var i=0; i<menu.length; i++){   
		var item = menu[i];
		var str = "";
		try{
			if(item.isHeader == "1"){
				str = "<li class='menu-header'><a href='"+item.url+"'><i class='iconfont'>"+item.icon+"</i><span class='margin-left'>"+item.name+"</span></a></li>";
				$(parent).append(str);
				if(item.childMenus != ""){
					initMenu(item.childMenus,parent);
				}
			}else{
				item.icon == "" ? item.icon = "&#xe610" : item.icon = item.icon;
				if(item.childMenus == ""){
					str = "<dd><a data-href='"+ item.url +"' data-id='"+ item.id +"' href='javascript:;'>"+ item.name +"</a></dd>";
					$(parent).append(str);
				}else{
					if(item.isHeader == "3") {
						str = "<dd><a href='javascript:;'>"+ item.name +"</a>";
						str += "<dl class='layui-nav-child' id='menu_child_"+ item.id +"'></dl></dd>"
					}else if(item.isHeader == "2"){
						str = "<li class='layui-nav-item'><a href='javascript:;'><i class='iconfont'>"+item.icon+"</i><span class='margin-left'>"+item.name+"</span></a>";
						str +="<dl class='layui-nav-child' id='menu_child_"+item.id+"'></dl></li>";
					}else {
						str = "<li class='layui-nav-item'><a href='javascript:;'>"+item.name+"</a>";
						str +="<dl class='layui-nav-child' id='menu_child_"+item.id+"'></dl></li>";
					}
					$(parent).append(str);
					var childParent = $("#menu_child_"+item.id);
					initMenu(item.childMenus,childParent);
				}
			}
		}catch(e){}
	}
}