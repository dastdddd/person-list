import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CreatePerson from './components/CreatePerson';
import ListPersons from './components/ListPersons';
import PersonDetail from './components/PersonDetail';

function App() {
  let getList = JSON.parse(localStorage.getItem('persons'))
  let getItem = JSON.parse(localStorage.getItem('person'))
  const [list, setList] = useState(getList || [])
  //(getItem || []) Данные из хранилища(localStorage) или пустой массив
  const [person, setPerson] = useState(getItem || {});
  //(getItem || []) Данные из хранилища(localStorage) или пустой обьект (один человек)

  const addPerson = (form) => {

    const newForm = { ...form, id: Date.now() }
    //добавляем id на обьект потому что form тип данных обьект
    const newList = [newForm, ...list]
    //создаем новый массив [newForm-сначала новый список,...list-потом старый ]
    setList(newList)
    //setList меняем состояние
  }

  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(list))
  }, [list])
  //[list] обновление страницы - здесь каждый раз не вызывает функцию чтобы обновить как в js

  useEffect(() => {
    localStorage.setItem('person', JSON.stringify(person))
  }, [person])

  const chengePerson = (id) => {
    const newItem = list.find(item => item.id === id);
    //find - возвращает 1 элемент(item)
    setPerson(newItem)
  }
  const removeAll = () => setList([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<CreatePerson addPerson={addPerson} />} />
        <Route path='/list' element={<ListPersons
          list={list}
          chengePerson={chengePerson}
          removeAll ={removeAll} />} />
        <Route path='/list/:id' element={<PersonDetail {...person} />} />
        {/* path='/list/:name' - так как имена иногда бывают одинаковые лучше id */}
      </Routes>
    </div>
  );
}

export default App;
