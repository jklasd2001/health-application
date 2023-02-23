import { useForm } from 'react-hook-form'

import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

type SignInInput = {
  username: string
  password: string
}

const SignIn = () => {
  const { handleSubmit, register } = useForm<SignInInput>()
  const router = useRouter()

  const onSubmit = async (data: SignInInput) => {
    const result = await signIn('provider', {
      callbackUrl: '/',
      ...data,
      redirect: false,
    })

    if (result?.ok) {
      router.push('/')
    }

    if (result?.error) {
      alert('에러났다임마')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} />
        <input {...register('password')} />

        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default SignIn
