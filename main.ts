//% weight=0 color=#47FF33 icon="\uf1fe"
namespace Area_Calculation
{

/** 
 * 計算長方形面積 & 回傳 
 */
//% blockId="ReturnAreaOfRectangle" block="Return Area of Rectangle = length %length | width %width"
//% blockGap=5 weight=0
export function ReturnAreaOfRectangle(length: number, width: number) : number {
	return length*width
}

/** 
 * 計算三角形面積 & 回傳 
 */
//% blockId="ReturnAreaOfTriangle" block="Return Area of Triangle = bottom %bottom | high %high | /2"
//% blockGap=5 weight=1
export function ReturnAreaOfTriangle(bottom: number, high: number) : number {
	return bottom*high/2
}

}
