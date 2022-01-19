import styled from "styled-components";
import eyeIco from '../../../assets/images/eye-icon.svg'

export const ArticleCardStyled = styled.section`
  width: 100%;
  display: flex;
  ${props => props.my ? 'flex-direction: column; margin-bottom: 58px;' : 'flex-direction: row; justify-content: space-between;'};

  &:last-child {
    margin-bottom: 0;
  }
`
export const ImgWrap = styled.div`
  width: 34%;
  ${props => props.my ? 'margin-bottom: 32px; width: 100%' : 'margin-right: 24px;'};
  ${props => props.main ? 'width: 54%; height 37%;' : ''};
`
export const ArticleImg = styled.img`
  width: 100%;
  height: 100%;
`
export const ArticleDesc = styled.div`
  width: 63.5%;
  ${props => props.main ? 'width: 43.3%;' : ''}
  ${props => props.my ? 'width: 100%;' : ''}
`
export const ArticleTag = styled.div`
  margin-bottom: 24px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  line-height: 12px;
  color: #8C8C8C;
`
export const ArticleTitle = styled.h2`
  color: #242424;
  font-family: Playfair Display, sans-serif;
  font-weight: 700;
  font-size: 32px;
  margin: 0 0 16px 0;
  ${props => props.main ? 'line-height: 40px;' : 'line-height: 32px;'};
`
export const ArticlePrev = styled.div`
  color: #8C8C8C;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
`
export const ArticleInfo = styled.div`
  color: #8C8C8C;
  display: flex;
  flex-direction: row;
  align-items: center;
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