import React from 'react'
import { Popover } from 'antd'
import AchImg from '../images/badge-acv.png'

export default function Achievements() {
  const popoverContent = "Monica's achievements"
  return(
    <>
      <h2>Achievements</h2>
      <Popover content={popoverContent} title="Popover title">
        <img alt="Arctic Code Vault Contributor" width="64px" src={AchImg} />
      </Popover>
    </>
  )
}