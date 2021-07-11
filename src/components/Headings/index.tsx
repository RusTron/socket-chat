import { FC, createElement } from 'react';
import { HeadingType } from '../../utils/enums';

interface Props {
  tag: Partial<HeadingType>
}

export const Headings:FC<Props> = ({ tag, children }) => createElement(tag, null, children);
