import { useState, useEffect } from 'react'
import DogImage from './DogImage'
import Description from './Description'
import DogListContainer from './DogListContainer'

export const Header = () => {
  const [dogUrl, setDogUrl] = useState('')

  const fetchDogImage = () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchDogImage()
  }, []) // 空の依存配列で、コンポーネントが初回にマウントされたときだけ実行されます

  return (
    <header className="header">
      <Description />
      <DogImage
        // @ts-ignore
        url={dogUrl}
      />
      <button onClick={fetchDogImage}>更新</button>
      <DogListContainer />
    </header>
  )
}

export default Header
