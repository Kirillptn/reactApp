import React, { useContext } from "react";

import { ArticleCard } from "./ArticleCard";

import articleImg from '../../assets/images/articleImg/ArticleImg.png';
import authorImg from '../../assets/images/autorImg/author-img.png';
import mainArticleImg from '../../assets/images/articleImg/mainArticleImg.png';
import { ArticleList, Title } from "./AllArticle.styled";
import { MyContext } from '../../App';

export const AllArticle = () => {
	const { articles } = useContext(MyContext)
	const mostPopularArticle = articles.sort((a, b) => Number(a.views) < Number(b.views) ? 1 : -1)[0]
	let articleList = articles.filter(article => article !== mostPopularArticle)

	return (
		<div>
			<ArticleCard
				main
				mainImg={mainArticleImg}
				tag={'#' + mostPopularArticle.tag}
				title={mostPopularArticle.title}
				text={mostPopularArticle.text}
				authorImg={authorImg}
				authorName={mostPopularArticle.authorName}
				date={mostPopularArticle.date + ' ' + mostPopularArticle.readingTime}
				views={mostPopularArticle.views}
				id={mostPopularArticle.id}
			/>
			<Title>Popular articles</Title>
			<ArticleList>
				{
					articleList.map((article) => (
						<ArticleCard
							key={article.id}
							tag={'#' + article.tag}
							title={article.title}
							text={article.text}
							mainImg={articleImg}
							authorImg={authorImg}
							authorName={article.authorName}
							date={article.date + ' ' + article.readingTime}
							views={article.views}
							id={article.id}
						/>
					))
				}
			</ArticleList>
		</div>
	)
}