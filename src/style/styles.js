import styled from 'styled-components';


export const ListPost = styled.div`
  width: 45vw;
  margin: auto;
  display: grid;
  gap: 10px;

  @media screen and (max-width: 710px) {
    width: 100%;
  }
;
`
export const Form = styled.form`
  width: 45vw;
  display: flex;
  margin: auto;
  flex-direction: column;
  
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`

export const WrapperLoginAndCreateUserPage = styled.div`
  width: 20vw;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`

export const FormLoginAndCreateUserPage = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and(width: 450px) {
    width: 100vw;
  }
`