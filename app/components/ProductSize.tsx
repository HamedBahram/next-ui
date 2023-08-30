'use client'

import { useState } from 'react'
import { cn } from '@nextui-org/react'

function ProductSize() {
  const [selectedSize, setSelectedSize] = useState(2)

  return (
    <ul className='flex gap-3'>
      {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
        <li key={size}>
          <button
            onClick={() => setSelectedSize(index)}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full p-2 text-sm font-semibold transition-colors',
              selectedSize === index
                ? 'bg-primary text-white'
                : 'bg-transparent'
            )}
          >
            {size}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ProductSize
