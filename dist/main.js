var a=new XMLHttpRequest();a.open("GET",'data.xlsx',true);a.responseType='arraybuffer';a.setRequestHeader('Cache-Control','no-cache, no-store, max-age=0');a.setRequestHeader('Expires','Tue, 01 Jan 1980 1:00:00 GMT');a.setRequestHeader('Pragma','no-cache');var b=null;var c=null;var d=0;var e=0;var f=null;var g=null;var h="";var i=null;var j=null;var k=null;var l="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";var m=['iPhone','iPad','iPod'].indexOf(navigator.platform)!=-1||(navigator.userAgent.indexOf('Mac')!=-1&&'ontouched' in document);var n=null;var o=null;var p=null;var q=null;var r=null;var s=null;var t=$(document.body);var u=$(window);var v=null;function w(a,b){if(!a.hasClass(b)){j=true;a.addClass(b).one(l,function(){a.removeClass(b);j=false;});}}function x(a){var b=a.toString().split('.');b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.');return b.join(',');}function y(a){return a.replace(/\s+/g,'').toLowerCase();}function z(a){return a.toLowerCase().split(' ').map(function(a){return a[0].toUpperCase()+a.slice(1);}).join(' ');}function A(a){if(a.is(":focus"))a.attr("readonly","readonly").attr("disabled","true").blur().removeAttr("readonly").removeAttr("disabled");}function B(a){return '<span><img src="dist/'+a+'"/></span>';}function C(a,b,c,d,e,f){var g=b.replace(/spm/gi,"Sepeda Motor").replace(/l.truck/gi,"Light Truck")+' | '+c;f=f.replace(/ran/gi,"Kendaraan").replace(/tnp/gi,"Tanpa").replace(/plat/gi,"Plat");var h=$('<div class="hasil flex baris"></div');var i=$('<div class="atas flex kolom"></div>');var j=$('<div class="bawah flex kolom"></div>');i.append('<h3 class="elipsis">'+a+'</h3>');i.append('<h4 class="elipsis">'+g+'</h4>');j.append('<div class="id elipsis">'+B('id.svg')+g+'</div>');j.append('<div>'+B('uang.svg')+x(d)+'</div>');j.append('<div class="elipsis">'+B('palu.svg')+e+'</div>');j.append('<div class="elipsis">'+B('dompet.svg')+f+'</div>');h.append(i).append(j);h.click(function(){var a=$(this).hasClass("pilih");if(v)w($(this).children().eq(1),"fadein");$(".pilih").removeClass("pilih");if(!a)$(this).addClass("pilih");});return h;}function D(){var a=p.val();if(h===a)return null;var b=y(a);w(n,"fadein");$(".hasil").each(function(){var a=$(this).children().eq(0).children();var c=y(a.eq(0).text());var d=a.eq(1).text().split('|');var e=y(typeof d[1]=='undefined'?d[0]:d[1]);if(c.indexOf(b)!=-1||e.indexOf(b)!=-1)$(this).show();else $(this).hide();});h=p.val();}function E(){f=r.offset().top-(p.height()/2.5);g=n.offset().top;if(u.width()<600)v=true;else{v=false;q.removeClass("sembunyi");}F();}function F(){d=u.scrollTop();if(d==e)return null;if(i)A(p);if(d<f){q.removeClass("ambang");r.removeClass("pad");}else if((v&&d>g)||(!v&&d>f)){q.addClass("ambang");r.addClass("pad");}if(v&&!j&&!k)if(d>e)q.addClass("sembunyi");else q.removeClass("sembunyi");e=d;}a.onload=function(){var c=XLSX.read(a.response,{type:'array'});var d=[];c.SheetNames.forEach(function(a){XLSX.utils.sheet_to_json(c.Sheets[a],{header:1}).forEach(function(a){d.push(a);});});s.text("Sidang: "+z(d[2][3].replace("SIDANG PADA TANGGAL ","")));d.forEach(function(a){if(typeof a[0]==='number'&&typeof a[2]==='string')n.append(C(a[2],a[4],a[1],a[7]+a[8],a[5],a[6]));});o.submit(function(a){a.preventDefault();A(p);});o.keyup(function(a){a.preventDefault();clearTimeout(b);b=setTimeout(D,225);});o.removeClass("load");$(".load").remove();if(!v)p.focus();};a.onerror=function G(){location.reload();};$(function(){n=$("#daftar");o=$("#cari");p=$("#kunci");q=$("#navigasi");r=$("#navigasi-pad");s=$("#sidang");u.resize(E);u.scroll(F);u.on("touchmove",function(){i=true;clearTimeout(c);c=setTimeout(function(){i=false;},100);});$("input").focus(function(){k=true;if(m)t.scrollTop(0);}).blur(function(){k=false;});E();a.send();});