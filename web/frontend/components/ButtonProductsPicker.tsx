import React, { useState } from 'react'
import { ResourcePicker } from '@shopify/app-bridge-react'
import { Button } from '@shopify/polaris'
import { PlusIcon } from '@shopify/polaris-icons'
import { useAuthenticatedFetch } from '../hooks'

export function ButtonProductsPicker() {
  const [isOpened, setIsOpened] = useState(false)
  const fetch = useAuthenticatedFetch()
  const handleSelection = (resources: any) => {
    setIsOpened(false)
    const productIds = resources.selection.map((product: any) => product.id)
    const response = fetch('api/product/ai/description', {
      method: 'POST',
      body: JSON.stringify({ productIds }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
  }

  return (
    <>
      <Button
        icon={PlusIcon}
        onClick={() => {
          setIsOpened(true)
        }}
      >
        Let`s add some amazing descriptions!
      </Button>
      <ResourcePicker
        resourceType="Product"
        onSelection={handleSelection}
        open={isOpened}
        onCancel={() => setIsOpened(false)}
      />
    </>
  )
}
