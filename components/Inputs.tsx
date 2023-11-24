import styled from "styled-components";
const PrimaryInput = styled.input`
  border-radius: 5px;
  height: 42px;
  background-color: #1f212f;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 15px;
  border: 1px solid gray;
  border-radius: 11px;
  &:focus {
    border: 1px solid white !important;
    background: #1f212f;
  }
`;
export { PrimaryInput };
