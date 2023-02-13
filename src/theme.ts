import { createTheme } from '@mui/material/styles'

const escapeTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			md: 940,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		fontFamily: 'Oxygen',
		fontSize: 13,
		caption: {
			fontSize: '0.9231rem',
			lineHeight: 2.92,
		},
		body2: {
			fontFamily: 'Lora',
			fontSize: '1.0769rem',
			lineHeight: 1.42,
		},
		overline: {
			fontSize: '0.9231rem',
			lineHeight: 1.08,
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.46,
		},
		subtitle2: {
			fontFamily: 'Lora',
			fontSize: '1.2308rem',
			fontWeight: 400,
			lineHeight: 1.31,
		},
		button: {
			fontSize: '0.9231rem',
			fontWeight: 400,
			lineHeight: 1.66,
		},
		h2: {
			fontSize: '1.5385rem',
			fontWeight: 400,
			lineHeight: 1.35,
		},
		h4: {
			fontFamily: 'Lora',
		},
	},
	components: {
		MuiDivider: {
			styleOverrides: {
				root: {
					width: '188px',
					height: '1px',
					backgroundColor: '#DEDEDE',
				},
			},
		},
	},
})

export default escapeTheme