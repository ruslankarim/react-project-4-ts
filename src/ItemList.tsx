import React, { FC, PropsWithChildren } from "react";
import Item, { ItemType } from "./Item";

type ItemList = {
    items: Array<ItemType["info"]>
    handleDeleteItem: (arg: string) => void
}

const ItemList: FC <PropsWithChildren<ItemList>> = (props) => {

    return (
        <>
            <ul className="ui-list">
                {props.items.map((el) => {
                    return (
                        <li className="ui-item-list" key={el.id}>
                            <Item info={el} />
                            <button className="item-button" onClick={() => props.handleDeleteItem(el.id)}>Удалить</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ItemList

