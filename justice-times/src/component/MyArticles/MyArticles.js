import React, { useContext } from 'react';

import { AuthorCard } from './AuthorCard';
import { ArticleCard } from '../AllArticle/ArticleCard';

import { ArticleList, MyArticlesStyled } from './MyArticles.styled';
import mainArticleImg from '../../assets/images/articleImg/mainArticleImg.png';
import authorImg from '../../assets/images/autorImg/author-img.png';
import { MyContext } from '../../App';

export const MyArticles = () => {
	const { articles } = useContext(MyContext)
	return (
		<MyArticlesStyled>
			<AuthorCard/>
			<ArticleList>
				{
					articles.map(article => (
						<ArticleCard
							key={article.id}
							my
							tag={'#' + article.tag}
							title={article.title}
							mainImg={mainArticleImg}
							text={article.text}
							authorName={article.authorName}
							authorImg={authorImg}
							date={article.date + ' ' + article.readingTime}
							views={article.views}
							id={article.id}
						/>
					))
				}
			</ArticleList>
		</MyArticlesStyled>
	)
}