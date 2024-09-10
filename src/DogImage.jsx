// @ts-check

// @ts-ignore
// eslint-disable-next-line react/prop-types
export const DogImage = ({ url }) => {
  return (
    <img
      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      id="dogImage"
      src={url}
      alt="Random Dog"
    />
  )
}

export default DogImage
