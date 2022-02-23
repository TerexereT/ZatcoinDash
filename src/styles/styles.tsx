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
	background: '#005278',
	'-webkit-box-shadow': '0px 10px 20px 0px #005278',
	boxShadow: '0px 10px 20px 0px #005278',
	'&:hover': {
		background: '#053D57',
		'-webkit-box-shadow': '0px 10px 20px 0px #053D57',
		boxShadow: '0px 10px 20px 0px #053D57',
	},
} as const;

export const stylesSuccess = {
	background: '#22C55E',
	'-webkit-box-shadow': '0px 10px 20px 0px #22C55E',
	boxShadow: '0px 10px 20px 0px #22C55E',
	'&:hover': {
		background: '#16A34A',
		'-webkit-box-shadow': '0px 10px 20px 0px #16A34A',
		boxShadow: '0px 10px 20px 0px #16A34A',
	},
} as const;

export const stylesError = {
	background: '#E11D48',
	'-webkit-box-shadow': '0px 10px 20px 0px #E11D48',
	boxShadow: '0px 10px 20px 0px #E11D48',
	'&:hover': {
		background: '#BE123C',
		'-webkit-box-shadow': '0px 10px 20px 0px #BE123C',
		boxShadow: '0px 10px 20px 0px #BE123C',
	},
} as const;
