import {Routes, Route} from "react-router-dom";
import {Wrapper} from "../Wrapper";
import {Login} from "../Login";
import {Signin} from "../Signin";
import {AllArticle} from "../AllArticle";

import {MainStyled} from "./Main.styled";


export const Main = () => {
  return(
      <MainStyled>
          <Wrapper>
              <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/' element={<AllArticle/>} />
                  <Route path='/sign-in' element={<Signin/>}/>
              </Routes>





          </Wrapper>
      </MainStyled>
  )

}