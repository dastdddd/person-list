import React from "react";
import PersonItem from "./PersonItem";
//Список

const ListPersons = ({ list, chengePerson, removeAll }) => {
  //if (list.length === 0) {
  //  return <h1>пусто</h1>
  //}
  //отобразится пусто если некакого массива(item) нету

  const filterMale = list.filter((item) => item.gender === "Мужской");
  const filteFemale = list.filter((item) => item.gender === "Женский");
  //({list})-сразу взяли без пропуса чтобы не писать props\

  return (
    <div>
      <div>
        <button onClick={removeAll}>Очистить все</button>
      </div>
      {list.length === 0 ? (
        <h1>pusto</h1>
      ) : (
        <div className="list-flex">
          <div className="list-flex__column">
            {filterMale &&
              filterMale.map((item, index) => (
                <PersonItem
                  chengePerson={chengePerson}
                  index={index}
                  {...item}
                  key={item.id}
                />
                //{...item} - чтобы не писать много кода чз пропс
              ))}
          </div>
          <div className="list-flex__column">
            {filteFemale &&
              filteFemale.map((item, index) => (
                <PersonItem
                  chengePerson={chengePerson}
                  index={index}
                  {...item}
                  key={item.id}
                />
                //{...item} - чтобы не писать много кода чз пропс
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPersons;
