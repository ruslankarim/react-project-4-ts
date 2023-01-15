import React, { FC, useState, FormEventHandler } from "react";
import { ItemType } from "./Item";
import { v4 as uuidv4 } from "uuid"
import AddItem from "./AddItem";
import ItemList from "./ItemList";

const Shop: FC = () => {

  const [items, setItems] = useState<Array<ItemType["info"]>>([])
  const [name, setName] = useState<ItemType["info"]["name"]>('')
  const [desc, setDesc] = useState<ItemType["info"]["desc"]>('')

  const handleAddItem: FormEventHandler<HTMLFormElement> = (e: React.FormEvent) => {
    e.preventDefault()
    if (name === '' || desc === '') {
      alert("Заполните все поля!")
    } else {
      setItems([{ name, desc, id: uuidv4() }, ...items])
      setName('')
      setDesc('')
    }
  }

  const handleDeleteItem = (id: string) => {
    setItems([...items].filter(el => {
      return el.id !== id
    }))
  }

  return (
    <>
      <AddItem name={name} desc={desc} handleAddItem={handleAddItem} setName={setName} setDesc={setDesc}/>

      {items.length < 1 ? (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      ) : null}
      
      <ItemList items={items} handleDeleteItem={handleDeleteItem}/>
    </>
  );
}

export default Shop
