import styled from "styled-components";
import eyeIco from '../../../assets/images/eye-icon.svg'

export const ArticleCardStyled = styled.section`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: row;
`
export const ArticleImg = styled.img`
  width: 367px;
  height: 260px;
  margin-right: 24px;
`
export const ArticleDisc = styled.div``
export const ArticleTag = styled.div`
  margin-bottom: 24px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  line-height: 12px;
  color: #8C8C8C;
`
export const ArticleTitle = styled.h2`
  font-family: Playfair Display, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 16px 0;
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