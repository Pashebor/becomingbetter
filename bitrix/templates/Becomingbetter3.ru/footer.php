<section class="footer">
	<footer class="contactus">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 gcontact">
					<div class="map-info animated bounceInLeft">
						<div class="cusinfopos">

							<h2 class="cusinfopos__header">Свяжитесь с нами</h2>
							<a href="tel:8 (800) 775 43 06"><strong>8 (800) 775 43 06</strong></a>
							<br>
							<div>
								<?$APPLICATION->IncludeComponent(
									"bitrix:main.include",
									"",
									Array(
										"AREA_FILE_SHOW" => "file",
										"AREA_FILE_SUFFIX" => "inc",
										"EDIT_TEMPLATE" => "",
										"PATH" => SITE_DIR."inc/callback_footer.php"
									)
								);?>
							</div>
							<div id="footer_info" class="footer-info">
								<address><i class="icon-map-marker"></i>г. Рязань, Куйбышевское шоссе, 25</address>
								<address><i class="icon-envelope"></i>info@salesgenerator.pro</address>
										 <span class="see">Посмотреть на карте
											<i class="icon-long-arrow-right"></i>
										 </span><br>
							</div>
						</div>
						<div class="copyright-block">
							&copy; 2016 год. Все права защищены. Разработка — ООО "Генератор Продаж".
						</div>
					</div>
					<span id="dnone" class="showcont btn btn-green animated"><i class="icon-long-arrow-left"></i> Контакты</span>
				</div>
				<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 socialbottom">
					<h2 class="socialbottom__header">Подписка на новости</h2>
					<div class="footer__form-block">
						<form action="" method="POST" class="form-block__form">
							<input type="text" name="user_name" placeholder="Ваш e-mail" style="color: #fff; border: 2px #44dd61 solid;"><br>
							<input type="submit" name="submit" value="Подписаться" class="btn-callback-2">
						</form>
					</div><br><br><br>
					<div class="social-buttons">
						<a href="http://www.facebook.com/sharer.php?u=http://becomingbetter.ru/&t=Генератор Продаж&src=sp" target="_blank"><i class="icon-facebook"></i></a>
						<a href="http://twitter.com/share?url=http://becomingbetter.ru/&text=Генератор Продаж" target="_blank"><i class="icon-twitter"></i></a>
						<a href="http://vk.com/share.php?url=http://becomingbetter.ru/&title=Генератор Продаж&description=Продвижение сайтов" target="_blank"><i class="icon-vk"></i></a>
						<a href="https://plus.google.com/share?url=http://becomingbetter.ru/&text=Генератор Продаж" target="_blank"><i class="icon-google-plus"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</section><section class="footer"><a href="#" id="scroller"><span class="icon icon-arrow-up3"></span></a></section>

<script type="text/javascript">
	function revslider_showDoubleJqueryError(sliderID) {
		var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
		errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
		errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
		errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
		jQuery(sliderID).show().html(errorMessage);
	}
</script>
<script type="text/javascript">jQuery(document).ready(function() { jQuery(".teammate_box").slick({
		autoplay      : false,arrows        : true,autoplaySpeed : 2500,dots : false,arrows : true,slidesPerRow : 2,slidesToScroll : 1,slidesToShow : 2,responsive : [
			{
				breakpoint : 961,
				settings : {
					slidesPerRow : 1,
					slidesToScroll : 1,
					slidesToShow : 1
				}
			},
			{
				breakpoint : 768,
				settings : {
					slidesPerRow : 1,
					slidesToScroll : 1,
					slidesToShow : 1
				}
			}
		]
	}); });</script><script type="text/javascript">jQuery(document).ready(function() { jQuery(".testimonials_box").slick({
		autoplay      : true,arrows        : true,autoplaySpeed : 2500,dots : true,arrows : false,slidesPerRow : 2,slidesToScroll : 2,slidesToShow : 2,responsive : [
			{
				breakpoint : 961,
				settings : {
					slidesPerRow : 2,
					slidesToScroll : 2,
					slidesToShow : 2
				}
			},
			{
				breakpoint : 768,
				settings : {
					slidesPerRow : 1,
					slidesToScroll : 1,
					slidesToShow : 1
				}
			}
		]
	}); });</script>
<link rel='stylesheet' id='prettyphoto-css'  href='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/prettyphoto/css/prettyPhoto.min0147.css?ver=4.12' type='text/css' media='all' />
<link rel='stylesheet' id='vc_pageable_owl-carousel-css-css'  href='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/owl-carousel2-dist/assets/owl.min0147.css?ver=4.12' type='text/css' media='' />
<link rel='stylesheet' id='animate-css-css'  href='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/bower/animate-css/animate.min0147.css?ver=4.12' type='text/css' media='' />
<link rel='stylesheet' id='vc_carousel_css-css'  href='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/vc_carousel/css/vc_carousel.min0147.css?ver=4.12' type='text/css' media='all' />

<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/themes/the-seo/the-seo/js/cat_shortcode.js'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/contact-form-7/includes/js/jquery.form.mind03d.js?ver=3.51.0-2014.06.20'></script>
<script type='text/javascript'>
	/* <![CDATA[ */
	var _wpcf7 = {"loaderUrl":"http:\/\/becomingbetter.ru\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif","recaptcha":{"messages":{"empty":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0412\u044b - \u043d\u0435 \u0440\u043e\u0431\u043e\u0442."}},"sending":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...","cached":"1"};
	/* ]]> */
</script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/contact-form-7/includes/js/scripts11b8.js?ver=4.5'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min44fd.js?ver=2.70'></script>
<script type='text/javascript'>
	/* <![CDATA[ */
	var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"};
	/* ]]> */
</script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min72e6.js?ver=2.6.4'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min330a.js?ver=1.4.1'></script>
<script type='text/javascript'>
	/* <![CDATA[ */
	var wc_cart_fragments_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","fragment_name":"wc_fragments"};
	/* ]]> */
</script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min72e6.js?ver=2.6.4'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-includes/js/wp-embed.min67d0.js?ver=4.5.4'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/prettyphoto/js/jquery.prettyPhoto.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/owl-carousel2-dist/owl.carousel.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/bower/imagesloaded/imagesloaded.pkgd.min67d0.js?ver=4.5.4'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-includes/js/underscore.min4511.js?ver=1.8.3'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/waypoints/waypoints.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/js/dist/vc_grid.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/vc_carousel/js/transition.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/js_composer/assets/lib/vc_carousel/js/vc_carousel.min0147.js?ver=4.12'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/wysija-newsletters/js/validate/languages/jquery.validationEngine-ruae29.js?ver=2.7.4'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/wysija-newsletters/js/validate/jquery.validationEngineae29.js?ver=2.7.4'></script>
<script type='text/javascript'>
	/* <![CDATA[ */
	var wysijaAJAX = {"action":"wysija_ajax","controller":"subscribers","ajaxurl":"http:\/\/becomingbetter.ru\/wp-admin\/admin-ajax.php","loadingTrans":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","is_rtl":""};
	/* ]]> */
</script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/wysija-newsletters/js/front-subscribersae29.js?ver=2.7.4'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-includes/js/jquery/ui/effect.mine899.js?ver=1.11.4'></script>

<!-- Скрипт для меню-->
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/becomingbetter.ru/wp-content/plugins/suppamenu/standard/js/suppa_frontend.min5369.js?ver=250'></script>
<script type='text/javascript' src='<?=SITE_TEMPLATE_PATH?>/js/headerland.js'></script>


</body>

<!-- Mirrored from becomingbetter.ru/ by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 19 Sep 2016 09:33:31 GMT -->
</html>

<!-- Dynamic page generated in 3.439 seconds. -->
<!-- Cached page generated by WP-Super-Cache on 2016-09-19 12:01:44 -->

<!-- Compression = gzip -->
<!-- super cache -->