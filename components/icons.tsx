import { Icon, IconProps } from '@sanity/icons'
import type { ComponentPropsWithRef } from 'react'

type SvgProps = Omit<ComponentPropsWithRef<'svg'>, keyof IconProps>

export const PresentationIcon = (props: SvgProps) => (
  <Icon symbol="presentation" {...props} />
)

export const CogIcon = (props: SvgProps) => <Icon symbol="cog" {...props} />

export const UserIcon = (props: SvgProps) => <Icon symbol="user" {...props} />

export const FolderIcon = (props: SvgProps) => (
  <Icon symbol="folder" {...props} />
)
