import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
function Profile() {
  const id = useParams()
  const [productData, setProductData] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    if (id?.profileId) {
      getProductData(id?.profileId)
    }
  }, [id])
  const getProductData = async (id) => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`)
    if (response?.status == 200) {
      setProductData(response?.data)
    }
  }
  const handleCatClick = async (category) => {
    let response = await axios.get(`https://dummyjson.com/products/category/${category}`)
    setProductData(response.data)
  }
  return (
    <div>
      {cat?.map(value => (
        <button
        onClick={() => {
          handleCatClick(value)
        }}
      >
        Click me
      </button>
      ))}
      <input
        type='text'
        name='searchProduct'
        onChange={}
      />
      <div>{productData?.title}</div>
      <form onSubmit={handleSubmit}></form>
      {.map((value) => {
        <tr>
          fdfd
          dfgd
          dfgddfg
          <button onClick={() => handleEdit(value?.id)}>Edit</button>
        </tr>
      })}
    </div>
  )
}
export default Profile
