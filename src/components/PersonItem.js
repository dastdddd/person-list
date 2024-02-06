import React from 'react';
//Каждый элемент
import { useNavigate } from 'react-router-dom';
//направить через события onClick похожe на Link to

const PersonItem = (props) => {
  const  {index, lastName, firstName, id, chengePerson} = props
  const navigate = useNavigate();
  //navigate берем из useNavigate
  const toDetail = () => {
    navigate(`/list/${id}`)
    //(`/list/${name}`) можно открыть страницу чз name но тк имена бывают одинаковые  лучше id
    chengePerson(id)
  }
  return (
    <div onClick={toDetail} className='item'>
      <span>{index + 1}.</span>
      <span >{lastName} {firstName}</span>
    </div>
  );
};

export default PersonItem;