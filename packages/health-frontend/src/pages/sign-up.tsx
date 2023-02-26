import { useForm } from 'react-hook-form'

type SignUpInput = {
  username: string
  password: string
}

const SignUp = () => {
  const { handleSubmit, register } = useForm<SignUpInput>()

  const onSubmit = async (_data: SignUpInput) => {
    //
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} />
        <input {...register('password')} />

        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default SignUp
