export const stylesButton = {
	color: 'white !important',
	width: '164px',
	height: '44px',
	fontWeight: '700',
	fontSize: '16px',
	margin: '0 13px',
	textTransform: 'capitalize',
} as const;

export const stylesS = {
	width: '106px',
};

export const stylesDef = {
	background: '#053D57',
	'-webkit-box-shadow': '0px 5px 10px 1px #053D57',
	boxShadow: '0px 5px 10px 1px #053D57',
	'&:hover': {
		background: '#005278',
		'-webkit-box-shadow': '0px 5px 10px 1px #005278',
		boxShadow: '0px 5px 10px 1px #005278',
	},
} as const;

export const stylesSuccess = {
	background: '#16A34A',
	'-webkit-box-shadow': '0px 5px 10px 1px #16A34A',
	boxShadow: '0px 5px 10px 1px #16A34A',
	'&:hover': {
		background: '#22C55E',
		'-webkit-box-shadow': '0px 5px 10px 1px #22C55E',
		boxShadow: '0px 5px 10px 1px #22C55E',
	},
} as const;

export const stylesError = {
	background: '#BE123C',
	'-webkit-box-shadow': '0px 5px 10px 1px #be123c',
	boxShadow: '0px 5px 10px 1px #be123c',
	'&:hover': {
		'-webkit-box-shadow': '0px 5px 10px 1px #E11D48',
		boxShadow: '0px 5px 10px 1px #E11D48',
		background: '#E11D48',
	},
} as const;
