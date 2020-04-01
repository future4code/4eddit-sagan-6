import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';


export const WrapperToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 30vw;
  }
  `