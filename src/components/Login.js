import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div>
      Login
      <button
        onClick={() => {
          navigate(`/product-detail/${btoa(10)}`)
        }}
      >
        Go to profile
      </button>
    </div>
  )
}
export default Login
