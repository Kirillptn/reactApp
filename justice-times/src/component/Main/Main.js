import { Routes, Route } from "react-router-dom";

import { Wrapper } from "../Wrapper";
import { Login } from "../Login";
import { SignIn } from "../SignIn";
import { AllArticle } from "../AllArticle";
import { AuthorPage } from '../AuthorPage';
import { Profile } from '../Profile';
import { MyArticles } from '../MyArticles';
import { OpenArticle } from '../OpenArticle';

import { MainStyled } from "./Main.styled";

export const Main = () => {
	return (
		<MainStyled>
			<Wrapper>
				<Routes>
					<Route path="/login" element={<Login/>}/>
					<Route path="/sign-in" element={<SignIn/>}/>
					<Route path="/" element={<AllArticle/>}/>
					<Route path="/author" element={<AuthorPage/>}/>
					<Route path="/profile" element={<Profile/>}/>
					<Route path="/my-articles" element={<MyArticles/>}/>
					<Route path="/add-article" element={<OpenArticle/>}/>
					<Route path="/article/:articleId" element={<OpenArticle/>}/>
				</Routes>
			</Wrapper>
		</MainStyled>
	)

}