/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from 'react'

// @ts-ignore
export const BreedsSelect = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState('')

  const handleChange = event => {
    setSelectedBreed(event.target.value)
    console.log(selectedBreed)
  }

  const handleClick = () => {
    fetchDogImage()
  }

  const fetchDogImage = () => {
    const url = `https://dog.ceo/api/breed/${String(
      selectedBreed,
    )}/images/random/12`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const dogImages = data.message
        document.querySelector('ul').innerHTML = ''
        Object.keys(dogImages).map(dogImage => {
          const img = document.createElement('img')
          img.src = dogImages[dogImage]
          img.style.width = '300px'
          img.style.height = '300px'
          img.style.objectFit = 'cover'
          document.querySelector('ul').appendChild(img)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div>
      <select onChange={handleChange} value={selectedBreed}>
        {Object.keys(breeds).map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>表示</button>
      <ul></ul>
    </div>
  )
}

export default BreedsSelect
