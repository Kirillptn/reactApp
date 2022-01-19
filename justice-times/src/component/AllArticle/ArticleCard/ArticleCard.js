import { useNavigate } from 'react-router-dom';

import {
	ArticleCardStyled,
	ArticleDate,
	ArticleDesc,
	ArticleImg,
	ArticleInfo,
	ArticlePrev,
	ArticleTag,
	ArticleTitle,
	AuthorImg,
	AuthorName,
	ImgWrap,
	ViewsCount,
} from "./ArticleCard.styled";
import { MyContext } from '../../../App';
import { useContext } from 'react';

export const ArticleCard = (
	{
		my,
		main,
		views,
		date,
		authorName,
		text,
		authorImg,
		mainImg,
		tag,
		title,
		id,
	}) => {
	const navigate = useNavigate()
	const { articles, setArticles } = useContext(MyContext)

	const openArticle = (id) => {
		const allArticles = articles.map(article => {
			if (article.id === id) {
				return {
					...article,
					views: (Number(article.views) + 1).toString(),
				}
			}
			return article
		})

		setArticles(allArticles)
		localStorage.setItem('articles', JSON.stringify(allArticles))
		navigate(`/article/${id}`)
	}

	return (<ArticleCardStyled my={my} main={main}>
		<ImgWrap my={my} main={main}>
			<a onClick={() => openArticle(id)}>
				<ArticleImg src={mainImg}/>
			</a>
		</ImgWrap>
		<ArticleDesc my={my} main={main}>
			<ArticleTag>{tag}</ArticleTag>
			<a onClick={() => openArticle(id)}>
				<ArticleTitle main={main}>{title}</ArticleTitle>
			</a>
			<ArticlePrev>{text}</ArticlePrev>
			<ArticleInfo>
				<AuthorImg src={authorImg}/>
				<AuthorName>{authorName}</AuthorName>
				<ArticleDate>{date}</ArticleDate>
				<ViewsCount>{views}</ViewsCount>
			</ArticleInfo>
		</ArticleDesc>
	</ArticleCardStyled>)
}
