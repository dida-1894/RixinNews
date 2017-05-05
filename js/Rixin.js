window.onload=function () {
	var btn=document.querySelectorAll(".point>li");
	var show=document.querySelector(".show");
	var show_li=document.querySelectorAll(".show>li");
	// console.log(show_li);
	// main_change();
	/* body... */

	// var date=document.write(Date());
	// console.log(Date());
	var wea_data=document.querySelector(".wea_data");

	var myDate=new Date();
	myDate.getDate();
	var myMonth;
	if (myDate.getMonth()==0) {myMonth="January"};
	if (myDate.getMonth()==1) {myMonth="February"};
	if (myDate.getMonth()==2) {myMonth="March"};
	if (myDate.getMonth()==3) {myMonth="April"};
	if (myDate.getMonth()==4) {myMonth="May"};
	if (myDate.getMonth()==5) {myMonth="June"};
	if (myDate.getMonth()==6) {myMonth="July"};
	if (myDate.getMonth()==7) {myMonth="August"};
	if (myDate.getMonth()==8) {myMonth="September"};
	if (myDate.getMonth()==9) {myMonth="October"};
	if (myDate.getMonth()==10) {myMonth="November"};
	if (myDate.getMonth()==11) {myMonth="December"};
	// myDay=myDate.getDay();
	myYear=myDate.getFullYear();
	console.log(myDate);
	wea_data.innerHTML=myMonth+' '+myDate.getDate()+' '+myYear;
	// 日期 end


	
	// 孔目湖讲坛
	var for_content=document.querySelectorAll(".for_content");
	var forum=document.querySelectorAll(".for_list>li");
	console.log(forum);
	for (var i = 0; i <= forum.length - 1; i++) {
		forum[i].setAttribute("data-i", i);
		forum[i].addEventListener("mouseover", function () {
          var i=this.dataset.i;
          for_content[i].style.color = '#fff';
		})
		forum[i].addEventListener("mouseout", function () {
          var i=this.dataset.i;
          for_content[i].style.color = '#000';
		})
	}
// function main_change () {
// 	// body... 
// 	for (var i = 0; i < btn.length; i++) {
// 		btn[i].setAttribute("data-i",i);
// 		btn[i].addEventListener("mouseover",function () {
// 			var i=this.dataset.i;
// 			var top=parseInt(show.style.top);
// 			top=i*(-300);
// 			show.style.top=top+"px";
// 			show_li[i].style.boxShadow=" inset 100px 300px rgba(0,0,0,0)";
// 		})
// 		btn[i].addEventListener("mouseout",function () {
// 			/* body... */
// 			var i=this.dataset.i;
// 			show_li[i].style.boxShadow="inset 100px 300px rgba(0,0,0,0.5)";
// 		})
// 	}
// }

														// 轮播图
// var banner=document.querySelector(".banner");
// // console.log(banner);
// var ban_list=document.querySelectorAll(".ban_list>li");
// // console.log(ban_list);
// var b_order_list=document.querySelectorAll(".b_order_list>li");
// b_order_list[0].className="in";
// var num = 0;
// var xh = null;

// for (var i = b_order_list.length - 1; i >= 0; i--) {
// 	b_order_list[i].index=i;
// 	b_order_list[i].onmouseover=function(){
// 		num = this.index;
// 		ban_play(this.index);
// 	}
// }

// function b_autoPlay () {
// 	xh = setInterval(function () {
// 		num++;
// 		if(num >= ban_list.length)num = 0;
// 		ban_play(num);
// 	},1000); 
// }
// b_autoPlay();
// banner.onmouseover=function(){
// 	clearInterval(xh);
// 	xh=null;
// }
// banner.onmouseout=function () {
// 	b_autoPlay();
// }

// function ban_play () {
// 	// body... 
// 	for (var i = ban_list.length - 1; i >= 0; i--) {
// 		ban_list[i].className="";
// 		b_order_list[i].className="";
// 	}
// 	ban_list[num].className="on";
// 	b_order_list[num].className="in";
// }
														// end 轮播图
														// 投稿动态
var web_icon=document.querySelector(".s_met_web_icon");
var web_name=document.querySelector(".s_met_web_name");
var web_address=document.querySelector(".s_met_web_address");
var mail_icon=document.querySelector(".s_met_mail_icon");
var mail_name=document.querySelector(".s_met_mail_name");
var mail_address=document.querySelector(".s_met_mail_address");
var qq_icon=document.querySelector(".s_met_qq_icon");
var qq_name=document.querySelector(".s_met_qq_name");
var qq_address=document.querySelector(".s_met_qq_address");
// console.log(web_address);
// console.log(web_icon);
web_icon.onmouseover=function () {
	web_name.setAttribute("id", "s_m_name_on");
	web_address.setAttribute("id", "s_m_address_on");
}
web_icon.onmouseout=function () {
	web_name.removeAttribute("id");
	web_address.removeAttribute("id");
}
mail_icon.onmouseover=function () {
	mail_name.setAttribute("id", "s_m_name_on");
	mail_address.setAttribute("id", "s_m_address_on");
}
mail_icon.onmouseout=function () {
	mail_name.removeAttribute("id");
	mail_address.removeAttribute("id");
}
qq_icon.onmouseover=function () {
	qq_name.setAttribute("id", "s_m_name_on");
	qq_address.setAttribute("id", "s_m_address_on");
}
qq_icon.onmouseout=function () {
	qq_name.removeAttribute("id");
	qq_address.removeAttribute("id");
}
														// 投稿动态 end
}