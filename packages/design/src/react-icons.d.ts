import { ReactNode } from 'react'
import { IconBaseProps } from 'react-icons'

declare module 'react-icons/lib/index' {
  // eslint-disable-next-line no-unused-vars
  export type IconType = (props: IconBaseProps) => ReactNode
}