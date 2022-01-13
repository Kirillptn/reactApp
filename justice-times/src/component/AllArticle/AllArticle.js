import React from "react";

import { ArticleCard } from "./ArticleCard";

import articleImg from '../../assets/images/articleImg/image 15.png'
import authorImg from '../../assets/images/autorImg/author-img.png'
import {ArticleList, Title} from "./AllArticle.styled";

export const AllArticle = () => {
  return(
      <div>

          <Title>Popular articles</Title>
          <ArticleList>
              <ArticleCard views='11111' date='Jun 13 · 5 min read' authorName='Anthony J.Yeung' authorImg={authorImg} mainImg={articleImg} tag='#Typography' title='Johannes Gutenberg: The Birth of Movable Johannes' text='An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.'/>
              <ArticleCard views='11111' date='Jun 13 · 5 min read' authorName='Anthony J.Yeung' authorImg={authorImg} mainImg={articleImg} tag='#Typography' title='Johannes Gutenberg: The Birth of Movable Johannes' text='An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.'/>
          </ArticleList>
      </div>
  )
}