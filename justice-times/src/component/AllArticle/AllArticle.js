import React from "react";
import { Navigate } from 'react-router-dom';

import { ArticleCard } from "./ArticleCard";

import articleImg from '../../assets/images/articleImg/image 15.png';
import authorImg from '../../assets/images/autorImg/author-img.png';
import mainArticleImg from '../../assets/images/articleImg/mainArticleImg.png';
import { ArticleList, Title } from "./AllArticle.styled";

export const AllArticle = () => {
	// if(!currentUser){
	// 	return <Navigate to='/login' />
	// }

	return (
		<div>
			<ArticleCard
				main
				mainImg={mainArticleImg}
				tag='#Typography'
				title='Humane Typography in the Digital Age'
				text='Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?'
				authorImg={authorImg}
				authorName='Janay Wright'
				date='Jun 13 · 5 min read'
				views='21212'
			/>
			<Title>Popular articles</Title>
			<ArticleList>
				<ArticleCard
					views="11111"
					date="Jun 13 · 5 min read"
					authorName="Anthony J.Yeung"
					authorImg={authorImg}
					mainImg={articleImg}
					tag="#Typography"
					title="Johannes Gutenberg: The Birth of Movable"
					text="An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts."
				/>
				<ArticleCard
					views="11111"
					date="Jun 13 · 5 min read"
					authorName="Anthony J.Yeung"
					authorImg={authorImg}
					mainImg={articleImg}
					tag="#Typography"
					title="Johannes Gutenberg: The Birth of Movable"
					text="An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts."
				/>
			</ArticleList>
		</div>
	)
}