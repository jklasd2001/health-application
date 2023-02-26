import { useForm } from 'react-hook-form'

import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

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
    <div className="h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div>운동 기록을 간편하게!</div>

        <input {...register('username')} className="h-[40px]" />
        <input {...register('password')} className="h-[40px]" />

        <button type="submit">로그인</button>

        <div>
          <FcGoogle />
        </div>
      </form>
    </div>
  )
}

export default SignIn
