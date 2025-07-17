import { MDXComponents } from '@mdx-js/react';
import Image, { type ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
  };
}
