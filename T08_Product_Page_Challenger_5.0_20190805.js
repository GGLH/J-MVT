console.log('16618 fired');var config16618={slug:"16618",version:"challenger"},TestRequirementCheck16618=setInterval(function(){if(document.body&&0==document.body.classList.contains(config16618.slug)&&"function"==typeof jQuery){var e={init:function(){document.body.className+=" "+config16618.slug+" "+config16618.slug+"--"+config16618.version;var e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText="":n.appendChild(document.createTextNode("")),e.appendChild(n),console.log("TEST RUNNING | "+config16618.slug.toUpperCase()+" - BN(1555327074247) - "+config16618.version)},challenger:function(){$('p:contains("Delivery: In stock")').css("color","#f08826").css("font-weight","700").css("font-size","1.25rem").text("In Stock for Home Delivery")}};e.init(config16618),e[config16618.version](),clearInterval(TestRequirementCheck16618)}},1);setTimeout(function(){clearInterval(TestRequirementCheck16618)},1e4);