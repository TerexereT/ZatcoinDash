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
	'&:hover': {
		background: '#005278',
	},
} as const;

export const stylesSuccess = {
	background: '#16A34A',
	'&:hover': {
		background: '#22C55E',
	},
} as const;

export const stylesError = {
	background: '#BE123C',
	'&:hover': {
		background: '#E11D48',
	},
} as const;
