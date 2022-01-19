import React, { useContext } from 'react';

import { TrueButton } from '../TrueButton';
import { useNavigate, useParams } from 'react-router-dom';

import {
	ArticleDate,
	ArticleInfo,
	ArticleWrap,
	AuthorImg,
	AuthorName,
	Img,
	OpenArticleStyled,
	Tag,
	Text,
	Title,
	ViewsCount,
} from './OpenArticle.styled';
import mainArticleImg from '../../assets/images/articleImg/mainArticleImg.png';
import authorImg from '../../assets/images/autorImg/author-img.png';
import { MyContext } from '../../App';

export const OpenArticle = () => {

	const navigate = useNavigate()
	const { articleId } = useParams()
	const { articles } = useContext(MyContext)
	const currentArticle = articles.find(article => article.id === articleId)

	const goBack = () => {
		navigate('/');
	}

	return (
		<OpenArticleStyled>
			<TrueButton onClick={goBack} style={{ position: 'fixed' }}>All articles</TrueButton>
			<ArticleWrap>
				<Tag>{'#' + currentArticle.tag}</Tag>
				<Title>{currentArticle.title}</Title>
				<Img src={mainArticleImg}/>
				<Text>{currentArticle.text}</Text>
				<ArticleInfo>
					<AuthorImg src={authorImg}/>
					<AuthorName>{currentArticle.authorName}</AuthorName>
					<ArticleDate>{currentArticle.date + currentArticle.readingTime}</ArticleDate>
					<ViewsCount>{currentArticle.views}</ViewsCount>
				</ArticleInfo>
			</ArticleWrap>
		</OpenArticleStyled>
	)
}