import { FC, CSSProperties, createElement } from 'react';
import { HeadingType } from 'src/utils/enums';

interface Props {
  tag: Partial<HeadingType>;
  styles?: CSSProperties;
}

export const Headings:FC<Props> = ({ tag, styles = {}, children }) => createElement(tag, { style: styles }, children);
