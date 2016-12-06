<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<?foreach($arResult as $arItem):?>
	<?if($arItem["SELECTED"]):?>
		<div style=" float:left; color :#44dd61 !important" class=" suppa_menu suppa_menu_dropdown" >
			<a class="menu-item menu-item-type-post_type menu-item-object-page suppa_top_level_link suppa_menu_position_left" href="<?=$arItem["LINK"]?>"" >
				<span class="ctf_suppa_fa_box suppa_FA_icon">
					<!--<span aria-hidden="true" class="icon-arrow-right5" ></span>-->
				</span>
				<span class="suppa_item_title"><?=$arItem["TEXT"]?></span>
				<span class="suppa_ar_arrow_right_2_1"></span>
			</a>
		</div>
	<?else:?>
		<div style=" float:left;  " class=" suppa_menu suppa_menu_dropdown" >
			<a class="menu-item menu-item-type-post_type menu-item-object-page suppa_top_level_link suppa_menu_position_left" href="<?=$arItem["LINK"]?>" >
				<span class="ctf_suppa_fa_box suppa_FA_icon">
					<!--<span aria-hidden="true" class="icon-arrow-right5" ></span>-->
				</span>
				<span class="suppa_item_title"><?=$arItem["TEXT"]?></span>
				<span class="suppa_ar_arrow_right_2_1"></span>
			</a>
		</div>
	<?endif?>
<?endforeach?>
<?endif?>