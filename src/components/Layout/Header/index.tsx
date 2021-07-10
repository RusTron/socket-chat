import styled from 'styled-components';

const LayoutHeader = styled.div`
  height: 93px;
  background-color: #009bb7;
`

export const Header: React.FC = ({ children }) => (
    <LayoutHeader>{children}</LayoutHeader>
  );