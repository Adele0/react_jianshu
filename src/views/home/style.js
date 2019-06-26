import styled from 'styled-components'

// 首页样式
export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div `
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner {
    width: 100%;
    height: 270px;
  }
`

export const HomeRight = styled.div `
  width: 240px;
`

// 组件--topic样式

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
    display: block;
    float: left;
		width: 40px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
    overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
	}
`;

export const BackToTop = styled.div`
	cursor: pointer;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border: 1px solid #dcdcdc;
	position: fixed;
	bottom: 50px;
	right: 50px;
	font-size: 20px;
	color: #dcdcdc;
	border-radius: 4px;
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

		// 动态背景
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border-radius: 3px;
	font-size: 14px;
	.clearfix {
		color: #969696;
		.iconfont {
			font-size: 13px;
		}
	}
	.download {
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
		background-color: #fff;
		img {
			width: 60px;
			height: 60px;
		}
		div {
			padding-top: 10px;
			margin-left: 10px;
			.app {
				margin-bottom: 10px;
				font-size: 15px;
    		color: #333;
			}
		}
	}
`;

export const WriterList = styled.div`
	margin-top: 10px;
	.avatar {
		margin-right: 10px;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: 1px solid #dcdcdc;
	}
	.left {
		width: calc(100% - 60px);
		.info {
			margin-top: 10px;
			color: #333;
			.fr {
				margin-top: 5px;
				font-size: 13px;
				color: #42c02e;
			}
		}
		.follower {
			margin-top: 2px;
			font-size: 12px;
			color: #969696;
		}
	}
`;