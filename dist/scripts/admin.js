"use strict";(window.zkdStarterWebpackJsonpCallback=window.zkdStarterWebpackJsonpCallback||[]).push([[10],{9:function(t,e,a){t.exports=a("Xpiy")},Xpiy:function(t,e,a){a.r(e);var n,r,i,s=(n=jQuery,r=n(".order__sortable-js"),i=function(){var t=[];r.find("li").each(function(e,a){t.push(n(a).data("value"))}),n.ajax({url:zkd.ajax,type:"POST",data:{action:"save_admin_menu_settings",nonce:n("#save_admin_menu_settings").val(),clear:n("#order__settings-menu-clear").prop("checked"),enable:n("#order__settings-menu-custom").prop("checked"),order:t}}).done(function(t){t.success&&location.reload()}).fail(function(t){console.log(t)})},{init:function(){0!==r.length&&(n(".order__sortable-js").sortable(),n(".order__settings-menu-save-js").click(function(t){t.preventDefault(),i()}))}}),d=function(t){var e=new MutationObserver(function(e){for(var a=0;a<e.length;a++)for(var n=0;n<e[a].addedNodes.length;n++){var r=t(e[a].addedNodes[n]);if(r.attr("class")&&(r.attr("class"),-1!=r.attr("class").indexOf("attachment"))){var i=r.children(".attachment-preview");0!=i.length&&-1!=i.attr("class").indexOf("subtype-svg+xml")&&function(t){jQuery.ajax({url:zkd.ajax,type:"POST",dataType:"html",data:{action:"svg_get_attachment_url",attachmentID:t.attr("data-id")},success:function(e){e&&(t.find("img").attr("src",e),t.find(".filename").text("SVG Image"))}})}(r)}}}),a=new MutationObserver(function(e){for(var a=0;a<e.length;a++)for(var n=0;n<e[a].addedNodes.length;n++){var r=t(e[a].addedNodes[n]),i=!1;if((r.hasClass("attachment-details")||0!=r.find(".attachment-details").length)&&(i=!0),1==i){var s=r.find('label[data-setting="url"]');if(0!=s.length){var d=s.find("input").val();r.find(".details-image").attr("src",d)}}}});return{init:function(){e.observe(document.body,{childList:!0,subtree:!0}),a.observe(document.body,{childList:!0,subtree:!0})}}}(jQuery);jQuery(document).ready(function(){s.init(),d.init()})}},[[9,0]]]);
