jQuery(function(a){if("undefined"==typeof wc_checkout_params)return!1;a.blockUI.defaults.overlayCSS.cursor="default";var b={updateTimer:!1,dirtyInput:!1,xhr:!1,$order_review:a("#order_review"),$checkout_form:a("form.checkout"),init:function(){a(document.body).bind("update_checkout",this.update_checkout),a(document.body).bind("init_checkout",this.init_checkout),this.$checkout_form.on("click",'input[name="payment_method"]',this.payment_method_selected),a(document.body).hasClass("woocommerce-order-pay")&&this.$order_review.on("click",'input[name="payment_method"]',this.payment_method_selected),this.$checkout_form.on("submit",this.submit),this.$checkout_form.on("blur change",".input-text, select, input:checkbox",this.validate_field),this.$checkout_form.on("update",this.trigger_update_checkout),this.$checkout_form.on("change",'select.shipping_method, input[name^="shipping_method"], #ship-to-different-address input, .update_totals_on_change select, .update_totals_on_change input[type="radio"]',this.trigger_update_checkout),this.$checkout_form.on("change",".address-field select",this.input_changed),this.$checkout_form.on("change",".address-field input.input-text, .update_totals_on_change input.input-text",this.maybe_input_changed),this.$checkout_form.on("change keydown",".address-field input.input-text, .update_totals_on_change input.input-text",this.queue_update_checkout),this.$checkout_form.on("change","#ship-to-different-address input",this.ship_to_different_address),this.$checkout_form.find("#ship-to-different-address input").change(),this.init_payment_methods(),"1"===wc_checkout_params.is_checkout&&a(document.body).trigger("init_checkout"),"yes"===wc_checkout_params.option_guest_checkout&&a("input#createaccount").change(this.toggle_create_account).change()},init_payment_methods:function(){var b=a(".woocommerce-checkout").find('input[name="payment_method"]');1===b.length&&b.eq(0).hide(),0===b.filter(":checked").length&&b.eq(0).prop("checked",!0),b.filter(":checked").eq(0).trigger("click")},get_payment_method:function(){return b.$order_review.find('input[name="payment_method"]:checked').val()},payment_method_selected:function(){if(a(".payment_methods input.input-radio").length>1){var b=a("div.payment_box."+a(this).attr("ID"));a(this).is(":checked")&&!b.is(":visible")&&(a("div.payment_box").filter(":visible").slideUp(250),a(this).is(":checked")&&a("div.payment_box."+a(this).attr("ID")).slideDown(250))}else a("div.payment_box").show();a(this).data("order_button_text")?a("#place_order").val(a(this).data("order_button_text")):a("#place_order").val(a("#place_order").data("value"))},toggle_create_account:function(){a("div.create-account").hide(),a(this).is(":checked")&&a("div.create-account").slideDown()},init_checkout:function(){a("#billing_country, #shipping_country, .country_to_state").change(),a(document.body).trigger("update_checkout")},maybe_input_changed:function(a){b.dirtyInput&&b.input_changed(a)},input_changed:function(a){b.dirtyInput=a.target,b.maybe_update_checkout()},queue_update_checkout:function(a){var c=a.keyCode||a.which||0;return 9===c||(b.dirtyInput=this,b.reset_update_checkout_timer(),void(b.updateTimer=setTimeout(b.maybe_update_checkout,"1000")))},trigger_update_checkout:function(){b.reset_update_checkout_timer(),b.dirtyInput=!1,a(document.body).trigger("update_checkout")},maybe_update_checkout:function(){var c=!0;if(a(b.dirtyInput).length){var d=a(b.dirtyInput).closest("div").find(".address-field.validate-required");d.length&&d.each(function(){""===a(this).find("input.input-text").val()&&(c=!1)})}c&&b.trigger_update_checkout()},ship_to_different_address:function(){a("div.shipping_address").hide(),a(this).is(":checked")&&a("div.shipping_address").slideDown()},reset_update_checkout_timer:function(){clearTimeout(b.updateTimer)},validate_field:function(){var b=a(this),c=b.closest(".form-row"),d=!0;if(c.is(".validate-required")&&("checkbox"!==b.attr("type")||b.is(":checked")?""===b.val()&&(c.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field"),d=!1):(c.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field"),d=!1)),c.is(".validate-email")&&b.val()){var e=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);e.test(b.val())||(c.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-email"),d=!1)}d&&c.removeClass("woocommerce-invalid woocommerce-invalid-required-field").addClass("woocommerce-validated")},update_checkout:function(a,c){b.reset_update_checkout_timer(),b.updateTimer=setTimeout(b.update_checkout_action,"5",c)},update_checkout_action:function(c){if(b.xhr&&b.xhr.abort(),0!==a("form.checkout").length){c="undefined"!=typeof c?c:{update_shipping_method:!0};var d=a("#billing_country").val(),e=a("#billing_state").val(),f=a("input#billing_postcode").val(),g=a("#billing_city").val(),h=a("input#billing_address_1").val(),i=a("input#billing_address_2").val(),j=d,k=e,l=f,m=g,n=h,o=i;a("#ship-to-different-address").find("input").is(":checked")&&(j=a("#shipping_country").val(),k=a("#shipping_state").val(),l=a("input#shipping_postcode").val(),m=a("#shipping_city").val(),n=a("input#shipping_address_1").val(),o=a("input#shipping_address_2").val());var p={security:wc_checkout_params.update_order_review_nonce,payment_method:b.get_payment_method(),country:d,state:e,postcode:f,city:g,address:h,address_2:i,s_country:j,s_state:k,s_postcode:l,s_city:m,s_address:n,s_address_2:o,post_data:a("form.checkout").serialize()};if(!1!==c.update_shipping_method){var q={};a('select.shipping_method, input[name^="shipping_method"][type="radio"]:checked, input[name^="shipping_method"][type="hidden"]').each(function(){q[a(this).data("index")]=a(this).val()}),p.shipping_method=q}a(".woocommerce-checkout-payment, .woocommerce-checkout-review-order-table").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),b.xhr=a.ajax({type:"POST",url:wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%","update_order_review"),data:p,success:function(c){if("true"===c.reload)return void window.location.reload();a(".woocommerce-NoticeGroup-updateOrderReview").remove();var d=a("#terms").prop("checked");if(c&&c.fragments&&a.each(c.fragments,function(b,c){a(b).replaceWith(c),a(b).unblock()}),d&&a("#terms").prop("checked",!0),"failure"===c.result){var e=a("form.checkout");a(".woocommerce-error, .woocommerce-message").remove(),c.messages?e.prepend('<div class="woocommerce-NoticeGroup-updateOrderReview">'+c.messages+"</div>"):e.prepend(c),e.find(".input-text, select, input:checkbox").blur(),a("html, body").animate({scrollTop:a("form.checkout").offset().top-100},1e3)}b.init_payment_methods(),a(document.body).trigger("updated_checkout")}})}},submit:function(){b.reset_update_checkout_timer();var c=a(this);if(c.is(".processing"))return!1;if(c.triggerHandler("checkout_place_order")!==!1&&c.triggerHandler("checkout_place_order_"+b.get_payment_method())!==!1){c.addClass("processing");var d=c.data();1!==d["blockUI.isBlocked"]&&c.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),a.ajaxSetup({dataFilter:function(b,c){if("json"!==c)return b;try{var d=a.parseJSON(b);if(d&&"object"==typeof d)return b}catch(e){var f=b.match(/{"result.*"}/);null===f?console.log("Unable to fix malformed JSON"):(console.log("Fixed malformed JSON. Original:"),console.log(b),b=f[0])}return b}}),a.ajax({type:"POST",url:wc_checkout_params.checkout_url,data:c.serialize(),dataType:"json",success:function(c){try{if("success"!==c.result)throw"failure"===c.result?"Result failure":"Invalid response";-1===c.redirect.indexOf("https:///")||-1===c.redirect.indexOf("http://")?window.location=c.redirect:window.location=decodeURI(c.redirect)}catch(d){if("true"===c.reload)return void window.location.reload();"true"===c.refresh&&a(document.body).trigger("update_checkout"),c.messages?b.submit_error(c.messages):b.submit_error('<div class="woocommerce-error">'+wc_checkout_params.i18n_checkout_error+"</div>")}},error:function(a,c,d){b.submit_error('<div class="woocommerce-error">'+d+"</div>")}})}return!1},submit_error:function(c){a(".woocommerce-error, .woocommerce-message").remove(),b.$checkout_form.prepend(c),b.$checkout_form.removeClass("processing").unblock(),b.$checkout_form.find(".input-text, select, input:checkbox").blur(),a("html, body").animate({scrollTop:a("form.checkout").offset().top-100},1e3),a(document.body).trigger("checkout_error")}},c={init:function(){a(document.body).on("click","a.showcoupon",this.show_coupon_form),a(document.body).on("click",".woocommerce-remove-coupon",this.remove_coupon),a("form.checkout_coupon").hide().submit(this.submit)},show_coupon_form:function(){return a(".checkout_coupon").slideToggle(400,function(){a(".checkout_coupon").find(":input:eq(0)").focus()}),!1},submit:function(){var b=a(this);if(b.is(".processing"))return!1;b.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var c={security:wc_checkout_params.apply_coupon_nonce,coupon_code:b.find('input[name="coupon_code"]').val()};return a.ajax({type:"POST",url:wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%","apply_coupon"),data:c,success:function(c){a(".woocommerce-error, .woocommerce-message").remove(),b.removeClass("processing").unblock(),c&&(b.before(c),b.slideUp(),a(document.body).trigger("update_checkout",{update_shipping_method:!1}))},dataType:"html"}),!1},remove_coupon:function(b){b.preventDefault();var c=a(this).parents(".woocommerce-checkout-review-order"),d=a(this).data("coupon");c.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var e={security:wc_checkout_params.remove_coupon_nonce,coupon:d};a.ajax({type:"POST",url:wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_coupon"),data:e,success:function(b){a(".woocommerce-error, .woocommerce-message").remove(),c.removeClass("processing").unblock(),b&&(a("form.woocommerce-checkout").before(b),a(document.body).trigger("update_checkout",{update_shipping_method:!1}),a("form.checkout_coupon").find('input[name="coupon_code"]').val(""))},error:function(a){wc_checkout_params.debug_mode&&console.log(a.responseText)},dataType:"html"})}},d={init:function(){a(document.body).on("click","a.showlogin",this.show_login_form)},show_login_form:function(){return a("form.login").slideToggle(),!1}};b.init(),c.init(),d.init()});