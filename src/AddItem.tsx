import React, { Dispatch, FC, PropsWithChildren, SetStateAction, FormEventHandler } from "react"
import Item, { ItemType } from "./Item"

type AddItemType = {
    name: ItemType["info"]["name"]
    desc: ItemType["info"]["desc"]
    handleAddItem: FormEventHandler<HTMLFormElement>
    setName: Dispatch<SetStateAction<string>>
    setDesc: Dispatch<SetStateAction<string>>
}

const AddItem: FC<PropsWithChildren<AddItemType>> = (props) => {

    return (
        <>
            <form onSubmit={props.handleAddItem}>
                <div>
                    <input
                        type="text"
                        placeholder="Название товара"
                        className="ui-textfield"
                        value={props.name}
                        onChange={e => props.setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Описание товара"
                        className="ui-textfield"
                        value={props.desc}
                        onChange={e => props.setDesc(e.target.value)}
                    />
                </div>
                <div className="form-footer">
                    <div className="validation"></div>
                    <input type="submit" className="ui-button" value="Добавить" />
                </div>
            </form>
        </>
    )
}

export default AddItem