import React, { FC, useState } from "react";
import Item, { ItemType } from "./Item";
import { v4 as uuidv4 } from "uuid"

const Shop: FC = () => {

  const [items, setItems] = useState<Array<ItemType["info"]>>([])
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (name === '' || desc === '') {
      alert("Заполните все поля!")
    } else {
      setItems([{ name, desc, id: uuidv4() }, ...items])
      setName('')
      setDesc('')
    }

  }

  const handleDeleteItem = (item: ItemType["info"]) => {
    setItems([...items].filter(el => {
      return el.id !== item.id
    }))
  }

  return (
    <>
      <form onSubmit={handleAddItem}>
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>
      
      {items.length < 1 ? (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      ) : null}

      <ul className="ui-list">
        {items.map((el) => {
          return (
            <li className="ui-item-list" key={el.id}>
              <Item info={el} />
              <button className="item-button" onClick={() => handleDeleteItem(el)}>Удалить</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Shop
