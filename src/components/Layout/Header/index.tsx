import styled from 'styled-components';

const LayoutHeader = styled.div`
  height: 93px;
  background-color: #009bb7;
`

interface Props {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export const Header = ({ children, styles }: Props) => (
    <LayoutHeader style={styles}>{children}</LayoutHeader>
  );