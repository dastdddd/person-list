import React from 'react';
import { useParams } from 'react-router-dom';
//получаем id item - можно чз name но иногда имена бывают одинаковые


const PersonDetail = (props) => {
  const { lastName, firstName, surName, adress, phone, email, gender } = props;
  const { id } = useParams();//без апишки пока не полезно

  return (
    <div className='person-detail'>
       <span>Фамилия:{lastName} {firstName} {surName}</span>
       <span>{id}</span>
       <span>Адресс: {adress}</span>
       <span>Phone number: {phone}</span>
       <span>Email: {email}</span>
       <span>Gender: {gender}</span>
    </div>
  );
};

export default PersonDetail;