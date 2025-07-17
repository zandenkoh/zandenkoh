import { useMDXComponents as originalUseMDXComponents } from '@mdx-js/react';
import Image, { type ImageProps } from 'next/image';

// Define a type for the components object
type MDXComponents = Record<string, React.ComponentType<any>>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
  };
}
