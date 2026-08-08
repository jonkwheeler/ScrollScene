import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

function Placeholder() {
  return (
    <div style={{ padding: 24 }}>
      <h1>ScrollScene Storybook</h1>
      <p>Modern Storybook scaffold is running. Demo stories land in the next unit.</p>
    </div>
  )
}

const meta: Meta<typeof Placeholder> = {
  title: 'Meta/Placeholder',
  component: Placeholder,
  parameters: {
    layout: 'padded',
  },
}

export default meta

type Story = StoryObj<typeof Placeholder>

export const Ready: Story = {}
