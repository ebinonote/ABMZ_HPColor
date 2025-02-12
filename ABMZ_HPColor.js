// =============================================================================
// AB_HPColor.js
// Version: 0.01
// -----------------------------------------------------------------------------
// Copyright (c) 2025 ヱビ
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// -----------------------------------------------------------------------------
// [Homepage]: ヱビのノート
//             http://www.zf.em-net.ne.jp/~ebi-games/
// =============================================================================


/*:
 * @plugindesc v0.01 HPの色を変えるプラグイン
 * @target MZ
 * @author ヱビ
 *
 * 
 * @help
 * 
 * ============================================================================
 * 機能
 * ============================================================================
 * 
 * 
 * HPの色を大きいとき黄緑、半分以下のときオレンジ、4分の1以下のとき赤にする
 * 
 * ============================================================================
 * 更新履歴
 * ============================================================================
 * 
 * Version 1.00
 *   公開
 * 
 * ============================================================================
 * 利用規約
 * ============================================================================
 * 
 * ・MITライセンスです。
 * ・クレジット表記は不要
 * ・営利目的で使用可
 * ・ソースコードのライセンス表示以外は改変可
 * ・素材だけの再配布も可
 * ・アダルトゲーム、残酷なゲームでの使用も可
 * 
 * 
 */

(function() {
	var parameters = PluginManager.parameters('ABMZ_HPColor');



//=============================================================================
// HPゲージの色
//=============================================================================
let Sprite_Gauge_prototype_gaugeColor1 = Sprite_Gauge.prototype.gaugeColor1;
Sprite_Gauge.prototype.gaugeColor1 = function() {
    switch (this._statusType) {
        case "hp":
        	if (this.gaugeRate() > 0.5) {
        		return ColorManager.hpGreenColor1();
        	}
        	if (this.gaugeRate() > 0.25) {
	            return ColorManager.hpYellowColor1();
	        }
        	if (this.gaugeRate() > 0.125) {
	            return ColorManager.hpGaugeColor1();
	        }
        	return ColorManager.hpRedColor1();
	        
        default:
            return Sprite_Gauge_prototype_gaugeColor1.call(this);
    }
};
let Sprite_Gauge_prototype_gaugeColor2 = Sprite_Gauge.prototype.gaugeColor2;
Sprite_Gauge.prototype.gaugeColor2 = function() {
    switch (this._statusType) {
        case "hp":
        	if (this.gaugeRate() > 0.5) {
        		return ColorManager.hpGreenColor2();
        	}
        	if (this.gaugeRate() > 0.25) {
	            return ColorManager.hpYellowColor2();
	        }
        	if (this.gaugeRate() > 0.125) {
	            return ColorManager.hpGaugeColor2();
	        }
        	return ColorManager.hpRedColor2();
	        
        default:
            return Sprite_Gauge_prototype_gaugeColor2.call(this);
    }
};
ColorManager.hpGreenColor1 = function() {
	return this.textColor(3);
	return this.textColor(24);
};
ColorManager.hpGreenColor2 = function() {
	return this.textColor(29);
};
ColorManager.hpYellowColor1 = function() {
	return this.textColor(6);
};
ColorManager.hpYellowColor2 = function() {
	return this.textColor(14);
};
ColorManager.hpRedColor1 = function() {
	return this.textColor(2);
};
ColorManager.hpRedColor2 = function() {
	return this.textColor(10);
};
ColorManager.ctGaugeColor1 = function() {
    return this.textColor(13);
};

ColorManager.ctGaugeColor2 = function() {
    return this.textColor(5);
};


ColorManager.mpGaugeColor1 = function() {
    return this.textColor(21);
};

ColorManager.mpGaugeColor2 = function() {
    return this.textColor(14);
};

})();
