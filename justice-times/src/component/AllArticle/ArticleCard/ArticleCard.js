import {
	ArticleCardStyled,
	ArticleDate,
	ArticleDisc,
	ArticleImg,
	ArticleInfo,
	ArticlePrev,
	ArticleTag,
	ArticleTitle,
	AuthorImg,
	AuthorName,
	ViewsCount,
} from "./ArticleCard.styled";

export const ArticleCard = ({
															views, date, authorName,
															text, authorImg, mainImg,
															tag, title,
														}) => (
	<ArticleCardStyled>
		<ArticleImg src={mainImg}/>
		<ArticleDisc>
			<ArticleTag>{tag}</ArticleTag>
			<ArticleTitle>{title}</ArticleTitle>
			<ArticlePrev>{text}</ArticlePrev>
			<ArticleInfo>
				<AuthorImg src={authorImg}/>
				<AuthorName>{authorName}</AuthorName>
				<ArticleDate>{date}</ArticleDate>
				<ViewsCount>{views}</ViewsCount>
			</ArticleInfo>
		</ArticleDisc>
	</ArticleCardStyled>)