// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBrees] = useState({})

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBrees(data.message)
      })
  })

  return (
    <div>
      <BreedsSelect breeds={breeds} />
    </div>
  )
}

export default DogListContainer
