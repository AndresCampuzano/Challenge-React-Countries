import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



${
  '' /* @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'); */
}

body {
  font-family: 'Nunito Sans', sans-serif;
  margin: 0;
  padding: 0;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.textColor};
}

#app {
	margin: auto;
	color: ${({ theme }) => theme.textColor};

}

.wrapper {
  max-width: 1200px;
  margin: 0 5%;
}

strong {
	font-weight: 600;
}

.header {
	height: 50px;
	border-bottom: 1px solid #c7c7c7;
	.wrapper {
		height: 100%;
	}
	.content {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: ${({ theme }) => theme.textColor};
			text-decoration: none;
			h1 {
				font-size: 25px;
				font-weight: bold;
				cursor: pointer;
			}
		}
		p {
			cursor: pointer;
		}
	}
}

.home {
	.search {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.search--container {
			display: flex;
			border-radius: 4px;
			-webkit-box-shadow: ${({ theme }) => theme.webkitShadow};
			-moz-box-shadow: ${({ theme }) => theme.mozBoxShadow};
			box-shadow: ${({ theme }) => theme.boxShadow};
			padding: 15px 80px 15px 20px;
			.loupe {
				align-self: center;
			}
			input {
				margin-left: 10px;
				outline: none;
				border: none;
				color: ${({ theme }) => theme.textColor};
				background-color: ${({ theme }) => theme.backgroundColor};
			}
		}
		.dropdown {
			padding: 15px 30px 15px 15px;
			border-radius: 4px;
			-webkit-box-shadow: ${({ theme }) => theme.webkitShadow};
			-moz-box-shadow: ${({ theme }) => theme.mozBoxShadow};
			box-shadow: ${({ theme }) => theme.boxShadow};
			border: none;
			color: ${({ theme }) => theme.textColor};
			background-color: ${({ theme }) => theme.backgroundColor};
		}
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 80px
	}
}

.cards--item {
	height: 300px;
	border-radius: 8px;
	-webkit-box-shadow: ${({ theme }) => theme.webkitShadow};
	-moz-box-shadow: ${({ theme }) => theme.mozBoxShadow};
	box-shadow: ${({ theme }) => theme.boxShadow};
	a {
		color: ${({ theme }) => theme.textColor};
		text-decoration: none;
	}
	img {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		width: 100%;
		height: 160px;
		object-fit: cover;
	}
	.cards--item--container{
		padding: 18px 15px;
		h2 {
			font-size: 22px;
			font-weight: bold;
			margin-bottom: 18px;
		}
	}
}

.cardDetail {
	.cardDetail--button {
		height: 120px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.btn {
			padding: 10px 35px;
			background: none;
			border: none;
			-webkit-box-shadow: ${({ theme }) => theme.webkitShadow};
			-moz-box-shadow: ${({ theme }) => theme.mozBoxShadow};
			box-shadow: ${({ theme }) => theme.boxShadow};
			border-radius: 4px;
			cursor: pointer;
			color: ${({ theme }) => theme.textColor};
		}
	}
	.cardDetail--grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 35px;
		.cardDetail--image {
			img {
				width: 90%;
			}
		}
		.cardDetail--text {
			padding: 6%;
			.cardDetail--text--title {
				h1 {
					font-size: 25px;
					font-weight: bold;
					margin: 15px 0;
				}
			}
			.cardDetail--text--secondGrid {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 10px;
				p {
					margin: 10px 0;
				}
				.currencies {
					display: flex;
					margin: 10px 0;
					strong {
						margin-right: 5px;
					}
				}
				.languages {
					display: flex;
					margin: 10px 0;
					strong {
						margin-right: 5px;
					}
				}
			}
			.borderCountries {
				display: flex;
				margin: 50px 0 0 0;
				width: 400px;
				flex-wrap: wrap;
				strong {
					margin-right: 5px;
					white-space: nowrap;
					margin-bottom: -10px;
				}
				.btn {
					border: none;
					background: none;
					-webkit-box-shadow: ${({ theme }) => theme.webkitShadow};
					-moz-box-shadow: ${({ theme }) => theme.mozBoxShadow};
					box-shadow: ${({ theme }) => theme.boxShadow};
					border-radius: 4px;
					padding: 2px 15px;
					margin: 2px 5px;
					color: ${({ theme }) => theme.textColor};
				}
			}
		}
	}
}



@media (max-width: 1024px) {
	.home {
		.cards {
			grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;
		}
	}
}

@media (max-width: 768px) {
	.header {
	height: 80px;
	}
	.home {
		.cards {
			grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
		}
	}
	.cardDetail {
		.cardDetail--grid {
			display: flex;
			flex-direction: column;
			.cardDetail--image {
				text-align: center;
				img {
					width: 90%;
				}
			}
		}
	}
}

@media (max-width: 500px) {
	.header .content a h1 {
		font-size: 20px;
	}
	.home {
		.search {
			height: 140px;
			flex-direction: column;
			justify-content: space-evenly;
			.search--container {
				width: 76%;
			}
		}
		.cards {
			grid-template-columns: repeat(1, 1fr);
    	grid-gap: 10px;
		}
	}
	.cardDetail {
		margin: auto;
		.cardDetail--button {
			height: 100px;
		}
	}
	.cardDetail .cardDetail--grid .cardDetail--text .cardDetail--text--secondGrid {
		display: flex;
		flex-direction: column;
	}
	.cardDetail .cardDetail--grid .cardDetail--text .borderCountries {
		width: 300px;
	}
}
`;
