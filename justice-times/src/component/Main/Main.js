import { Routes, Route } from "react-router-dom";

import { Wrapper } from "../Wrapper";
import { Login } from "../Login";
import { SignIn } from "../SignIn";
import { AllArticle } from "../AllArticle";

import { MainStyled } from "./Main.styled";
import { AuthorPage } from '../AuthorPage';


export const Main = () => {
	return (
		<MainStyled>
			<Wrapper>
				<Routes>
					<Route path="/login" element={<Login/>}/>
					<Route path="/sign-in" element={<SignIn/>}/>
					<Route path="/" element={<AllArticle/>}/>
					<Route path="/author" element={AuthorPage}/>
				</Routes>
			</Wrapper>
		</MainStyled>
	)

}