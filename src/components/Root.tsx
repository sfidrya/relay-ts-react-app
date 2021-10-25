import React, { ComponentProps, ReactComponentElement } from 'react'

interface RootComponentProps {
  children: ReactComponentElement<ComponentProps<any>>
}

export default function Root(props: RootComponentProps) {
  return (
    <div>
      <p>Root component</p>
      {props.children}
    </div>
  )
}
