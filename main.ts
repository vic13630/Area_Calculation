/** * 計算長方形面積 */

//% weight=0 color=#47FF33 icon="\uf1fe" block="Area_Calculation"

namespace Area_Calculation
{

/** * 回傳 */
//% blockId="ReturnArea" block="Return Area length %length | width %width"
//% blockGap=2 weight=0 blockExternalInputs=true
export function ReturnArea(length:number, width:number) : number
	{
		return length*width
	}

/** * 不回傳 */
//% blockId="ShowArea" block="Show Area length %length | width %width"
//% blockGap=2 weight=1
export function ShowArea(length:number, width:number) : void
	{
		basic.showNumber(length*width)
	}

}
