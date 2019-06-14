import styled from 'styled-components';
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: calc(100% - 326px); 
  margin-left：100px;
  height: 100%;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.fr {
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.enter {
		transition: all .5s ease-out;
	}
	&.enter-active {
		width: 240px;
	}
	&.enter-done {
		width: 240px;
	}
	&.exit {
		transition: all .5s ease-out;
	}
	&.exit-active {
		width: 160px;
	}
`;

export const SearchKeywords = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: red;
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
  height: 56px;
  width: 226px;
`;

export const Button = styled.div`
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;