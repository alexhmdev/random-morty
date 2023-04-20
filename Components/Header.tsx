import styled from 'styled-components/native';
type Props = {
  children: string;
};

const StyledHeader = styled.Text`
  font-size: 25px;
`;
const Header = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
