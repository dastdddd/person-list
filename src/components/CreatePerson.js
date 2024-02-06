import React from 'react';
import { useForm } from 'react-hook-form';
//Создать профиль

const CreatePerson = ({addPerson}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (form) => {
    addPerson(form)
    //Добавляем функцию сюда чз пропс
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className="form-control">
        <label htmlFor="">Фамилия</label>
        <input {...register('lastName', { required: true })} type="text" placeholder='Фамилия' />
      </div>
      <div className="form-control">
        <label htmlFor="">Имя</label>
        <input {...register('firstName', { required: true })} type="text" placeholder='Имя' />
      </div>
      <div className="form-control">
        <label htmlFor="">Отчество</label>
        <input {...register('surName')} type="text" placeholder='Отчество' />
        {/* required: true - нету  из за того что отчетсво не обьязательно  */}
      </div>
      <div className="form-control">
        <label htmlFor="">Адресс</label>
        <input {...register('adress', { required: true })} type="text" placeholder='Адресс' />
      </div>
      <div className="form-control">
        <label htmlFor="">Телефон</label>
        <input {...register('phone', { required: true })} type="text" placeholder='Телефон' />
      </div>
      <div className="form-control">
        <label htmlFor="">Почта</label>
        <input {...register('email', { required: true })} type="text" placeholder='Почта' />
      </div>
      <div className="form-control">
        <div className="gender">
          <label htmlFor="">Мужской</label>
          <input {...register('gender')} value='Мужской' name='gender' checked type="radio" />
        </div>
        <div className="gender">
          <label htmlFor="">Женский</label>
          <input {...register('gender')} value='Женский' name='gender' type="radio" />
          {/* register('gender') в мужском и женском должен быть одинаковый */}
        </div>
      </div>
      <button type='submit'>Регистрация</button>
    </form>
  );
};

export default CreatePerson;