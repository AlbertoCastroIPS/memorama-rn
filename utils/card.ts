export interface Card {
	isFaceDown : boolean
	isPairFound : boolean
	face : string
	faceComponent : (props : any) => any
}

export const CardDefaults : Card = {
	isFaceDown: true,
	isPairFound: false,
	face : '',
	faceComponent: ()=>{}
}