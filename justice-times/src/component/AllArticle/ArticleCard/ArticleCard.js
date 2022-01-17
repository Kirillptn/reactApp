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

export const ArticleCard = (
	{
		main,
		views,
		date,
		authorName,
		text,
		authorImg,
		mainImg,
		tag,
		title,
	}) => (
	<ArticleCardStyled main={main}>
		<ArticleImg main={main} src={mainImg}/>
		<ArticleDisc>
			<ArticleTag>{tag}</ArticleTag>
			<ArticleTitle main={main}>{title}</ArticleTitle>
			<ArticlePrev>{text}</ArticlePrev>
			<ArticleInfo>
				<AuthorImg src={authorImg}/>
				<AuthorName>{authorName}</AuthorName>
				<ArticleDate>{date}</ArticleDate>
				<ViewsCount>{views}</ViewsCount>
			</ArticleInfo>
		</ArticleDisc>
	</ArticleCardStyled>)