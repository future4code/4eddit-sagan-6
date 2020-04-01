import styled from 'styled-components';


export const ListPost = styled.div`
  width: 45vw;
  margin: auto;
  display: grid;
  gap: 10px;

  @media screen and (max-width: 450px) {
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