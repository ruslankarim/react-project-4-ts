import React from "react";
import Item from "./Item.js";

export default function Shop() {
  const items = [];

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      <div>
        <p className="ui-title">Добавьте первый товар</p>
      </div>

      <ul className="ui-list">
        <li className="ui-item-list">
          <Item info={items[0]} />
          <button className="item-button">Удалить</button>
        </li>
      </ul>
    </>
  );
}
