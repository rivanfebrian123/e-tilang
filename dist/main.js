var a=new XMLHttpRequest();a.open("GET",'data.xlsx',true);a.responseType='arraybuffer';a.setRequestHeader('Cache-Control','no-cache, no-store, max-age=0');a.setRequestHeader('Expires','Tue, 01 Jan 1980 1:00:00 GMT');a.setRequestHeader('Pragma','no-cache');var b=600;var c=null;var d=null;var e=0;var f=0;var g=null;var h=null;var i="";var j=null;var k=null;var l=null;var m="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";var n=['iPhone','iPad','iPod'].indexOf(navigator.platform)!=-1||(navigator.userAgent.indexOf('Mac')!=-1&&'ontouched' in document);var o=null;var p=null;var q=null;var r=null;var s=null;var t=null;var u=$(document.body);var v=$(window);function w(a,b){if(!a.hasClass(b)){k=true;a.addClass(b).one(m,function(){a.removeClass(b);k=false;});}}function x(a){var b=a.toString().split('.');b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.');return b.join(',');}function y(a){return a.replace(/\s+/g,'').toLowerCase();}function z(a){return a.toLowerCase().split(' ').map(function(a){return a[0].toUpperCase()+a.slice(1);}).join(' ');}function A(a){if(a.is(":focus"))a.attr("readonly","readonly").attr("disabled","true").blur().removeAttr("readonly").removeAttr("disabled");}function B(a){return '<span><img src="dist/'+a+'"/></span>';}function C(a,b,c,d,e,f){var g=b.replace(/spm/gi,"Sepeda Motor").replace(/l.truck/gi,"Light Truck")+' | '+c;f=f.replace(/ran/gi,"Kendaraan").replace(/tnp/gi,"Tanpa").replace(/plat/gi,"Plat");var h=$('<div class="hasil flex baris"></div');var i=$('<div class="atas flex kolom"></div>');var j=$('<div class="bawah flex kolom"></div>');i.append('<h3 class="elipsis">'+a+'</h3>');i.append('<h4 class="elipsis">'+g+'</h4>');j.append('<div class="id elipsis">'+B('id.svg')+g+'</div>');j.append('<div>'+B('uang.svg')+x(d)+'</div>');j.append('<div class="elipsis">'+B('palu.svg')+e+'</div>');j.append('<div class="elipsis">'+B('dompet.svg')+f+'</div>');h.append(i).append(j);h.click(function(){var a=$(this).hasClass("pilih");w($(this).children().eq(1),"fadein");$(".pilih").removeClass("pilih");if(!a)$(this).addClass("pilih");});return h;}function D(){var a=q.val();if(i===a)return null;var b=y(a);w(o,"fadein");$(".hasil").each(function(){var a=$(this).children().eq(0).children();var c=y(a.eq(0).text());var d=a.eq(1).text().split('|');var e=y(typeof d[1]=='undefined'?d[0]:d[1]);if(c.indexOf(b)!=-1||e.indexOf(b)!=-1)$(this).show();else $(this).hide();});i=q.val();}function E(){g=s.offset().top-(q.height()/2.5);h=o.offset().top;}function F(){e=v.scrollTop();if(e==f)return null;if(j)A(q);if(e<g){r.removeClass("ambang");s.removeClass("pad");}else if(e>h){r.addClass("ambang");s.addClass("pad");}if(!k&&!l)if(e>f)r.addClass("sembunyi");else r.removeClass("sembunyi");f=e;}a.onload=function(){var d=XLSX.read(a.response,{type:'array'});var e=[];d.SheetNames.forEach(function(a){XLSX.utils.sheet_to_json(d.Sheets[a],{header:1}).forEach(function(a){e.push(a);});});t.text("Sidang: "+z(e[2][3].replace("SIDANG PADA TANGGAL ","")));e.forEach(function(a){if(typeof a[0]==='number'&&typeof a[2]==='string')o.append(C(a[2],a[4],a[1],a[7]+a[8],a[5],a[6]));});p.submit(function(a){a.preventDefault();A(q);});p.keyup(function(a){a.preventDefault();clearTimeout(c);c=setTimeout(D,225);});p.removeClass("load");$(".load").remove();if(v.width()>b)q.focus();};a.onerror=function G(){location.reload();};$(function(){o=$("#daftar");p=$("#cari");q=$("#kunci");r=$("#navigasi");s=$("#navigasi-pad");t=$("#sidang");v.resize(function(){E();});v.scroll(F);v.on("touchmove",function(){j=true;clearTimeout(d);d=setTimeout(function(){j=false;},100);});$("input").focus(function(){l=true;if(n)u.scrollTop(0);}).blur(function(){l=false;});E();a.send();});