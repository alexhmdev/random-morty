import { ReactNode } from 'react';
import StyledHeader from './Header.styles';

export type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
