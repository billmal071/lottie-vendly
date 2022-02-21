import React from 'react';

export type TextProps = {
  text: string;
  cssProps: string;
}

export default function Text({text, cssProps}: TextProps) {
  return (
    <p className={`${cssProps}`}>{text}</p>
  )
}
