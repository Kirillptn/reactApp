import styled from 'styled-components';
import eyeIco from '../../assets/images/eye-icon.svg';

export const OpenArticleStyled = styled.div`
`
export const ArticleWrap = styled.div`
  width: 63%;
  margin: 0 auto;
`
export const Tag = styled.div`
  margin-bottom: 24px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  line-height: 12px;
  color: #8C8C8C;
`
export const Title = styled.h2`
  color: #242424;
  font-family: Playfair Display, sans-serif;
  font-weight: 700;
  font-size: 32px;
  margin: 0 0 32px 0;
`
export const Img = styled.img`
	width: 100%;
	margin: 32px 0;
`
export const Text = styled.p`
	margin: 0;
	color: #8C8C8C;
  font-family: "IBM Plex Sans",sans-serif;
  font-size: 16px;
  line-height: 26px;
`
export const ArticleInfo = styled.div`
  color: #8C8C8C;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 48px;
`
export const AuthorImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
`
export const AuthorName = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-right: 24px;
`

export const ArticleDate = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-right: 24px;
`
export const ViewsCount = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  min-width: 36px;
  min-height: 14px;
  padding-left: 28px;
  background: url(${eyeIco}) no-repeat left;
`