import styled from 'styled-components';

const LayoutContent = styled.div`
  height: 100%;
`

interface Props {
  styles?: React.CSSProperties
}

export const Content: React.FC<Props> = ({ children, styles }) => (
    <LayoutContent style={styles}>{children}</LayoutContent>
  );