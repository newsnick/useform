import { useForm } from 'react-hook-form'
import FormError from '../../component/FormError/FormError.jsx'

const FormSubmit = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  })

  console.log(errors)

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Please enter a valid email',
            },
          })}
          type="email"
          required
          className="input"
        />
        {errors.email?.message && (
          <FormError errorMessage={errors.email?.message} />
        )}

        <label>Password</label>
        <input
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            maxLength: {
              value: 20,
              message: 'Password must be at most 20 characters long',
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/,
              message:
                'Password must contain at least one lowercase letter, one uppercase letter, and one number',
            },
          })}
          type="password"
          required
          className="input"
        />
        {errors.password?.message && (
          <FormError errorMessage={errors.password?.message} />
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormSubmit

/* import { useForm } from 'react-hook-form'
import FormError from '../../component/FormError/FormError.jsx'

const FormSubmit = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  })

  console.log(errors)

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Please enter a valid email',
            },
          })}
          type="email"
          required
          className="input"
        />
        {errors.email?.message && (
          <FormError errorMessage={errors.email?.message} />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormSubmit
 */
