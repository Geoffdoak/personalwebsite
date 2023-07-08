'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Test from '@/components/test'
import { useState, useRef, useLayoutEffect, useReducer } from 'react'
import ExampleComponent from '@/components/exampleComponent'
import Accordion from '@/components/accordion'
import testContent from '@/content/content'
import { title } from 'process'


export default function Home() {
  const accordions = testContent.sections.map((section) => {
    return {
      title: section.title,
      content: section.content
    }
  })
  // console.log(accordions)
  return (
    <div>
      <Accordion items={accordions}>
        <ExampleComponent />
      </Accordion>
    </div>
  )
}
