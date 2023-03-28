import { useForm } from 'react-hook-form'
import './assets/styles/App.css'
import FormSubmit from './component/FormSubmit/FormSubmit.jsx'

function App() {
  return (
    <div className="App">
      <FormSubmit />
    </div>
  )
}

export default App

/*  import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  })
  console.log(errors)

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register('firstName', {
              required: 'first name is required',
              minLength: { value: 3, message: 'min 3 symbols' },
            })}
          />
        </label>
        <div style={{ height: 40, color: 'red' }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
        </div>
        <br />
        <label>
          Last Name:
          <input
            {...register('lastName', { required: 'last name is required' })}
          />
        </label>
        <div style={{ height: 40, color: 'red' }}>
          {errors?.lastName && <p>{errors?.lastName?.message || 'Error'}</p>}
        </div>
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default App

 */
