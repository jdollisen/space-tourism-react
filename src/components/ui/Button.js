import styled from 'styled-components'

const MyButton = styled.button`
    background-color: #20BBA5;
    color: #FFFFFF;
    font-weight: 700;
    border: none;
    width: 5rem;
    height: 1.9rem;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
`;

export const Button = (props) => {
    return (
        <MyButton 
            value={props.val}
          onClick={props.onClick}
        >{props.children}</MyButton>
      );
}

