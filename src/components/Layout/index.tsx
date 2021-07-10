import styled from "styled-components";
import { Header } from "./Header";
import { Content } from "./Content";

const LayoutBase = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  border: 1px solid #009bb7;
  margin: 0 auto;
`

interface Props {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

const Layout = ({ children, styles }: Props) => (
  <LayoutBase style={styles}>{children}</LayoutBase>
);

Layout.Header = Header;
Layout.Content = Content;

export { Layout }
