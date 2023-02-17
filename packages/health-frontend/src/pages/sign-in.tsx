import { useRouter } from 'next/router'

const SignIn = () => {
  const router = useRouter()
  return (
    <div>
      SignIn
      <button
        onClick={() => {
          router.push('/')
        }}
      >
        로그인
      </button>
    </div>
  )
}

export default SignIn
