import React, { useState } from 'react'
import { ResourcePicker } from '@shopify/app-bridge-react'
import { Button } from '@shopify/polaris'
import { PlusIcon } from '@shopify/polaris-icons'

export function ButtonProductsPicker() {
  const [isOpened, setIsOpened] = useState(false)
  const handleSelection = (resources: any) => {
    const productIds = resources.selection.map((product: any) => product.id)
    console.log(productIds)
    setIsOpened(false)
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
