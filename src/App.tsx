import React, {useRef, useState} from 'react';
import {
    BoxMainContainer,
    CardContainer, DownImage,
    InputMainContainer,
    ItemContainer,
    MainContainer,
    TextInput, TextInputContainer
} from "./styles/app.styles";
import {v4 as uuidv4} from 'uuid';
import "./app.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

type itemType = {
    id: string,
    title: string,
}

function App() {
    const [textInput, setTextInput] = useState("")
    const textInputRef = useRef<HTMLInputElement>(null)
    const initialItems = [
        {
            id: uuidv4(),
            title: "education",
        },
        {
            id: uuidv4(),
            title: "science",
        },
        {
            id: uuidv4(),
            title: "art",
        },
        {
            id: uuidv4(),
            title: "education",
        },
        {
            id: uuidv4(),
            title: "science",
        },
        {
            id: uuidv4(),
            title: "art",
        },
        {
            id: uuidv4(),
            title: "education",
        },
        {
            id: uuidv4(),
            title: "science",
        },
        {
            id: uuidv4(),
            title: "art",
        },

    ]
    const [items, setItems] = useState<itemType[]>(initialItems)
    const notify = () => toast("Added Successfully");

    const clickOnItems = (item: itemType) => {
        if (selectedItemIds.find(i => i === item.id)) {
            setSelectedItemIds(s => s.filter(i => i !== item.id))
        } else {
            setSelectedItemIds(s => ([...s, item.id]))
        }
    }

    const clickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setItems(s => [...s, {id: uuidv4(), title: `Yeeeeeeh, ${textInput}`}])
            if (textInputRef.current){
                textInputRef.current.value = ""
            }
            notify()
        }

    }

    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([])

    return (
        <>
            <BoxMainContainer>
                <MainContainer>
                    <InputMainContainer>
                        <TextInputContainer>
                            <TextInput ref={textInputRef} onChange={(e) => setTextInput(e.target.value)} onKeyDown={(e) => clickEnter(e)}
                                       type="text"/>
                            <DownImage width={12} src="/icons/down.png" alt=""/>
                        </TextInputContainer>
                    </InputMainContainer>
                    <CardContainer>
                        {
                            items.map(({id, title}) => (
                                <ItemContainer data-testid={"item-container"} onClick={() => clickOnItems({id, title})} key={id}>
                                    <p>
                                        {title}
                                    </p>
                                    {selectedItemIds.find(item => item === id) && (
                                        <img src="/icons/check.png" width={15} alt=""/>
                                    )}
                                </ItemContainer>
                            ))
                        }
                    </CardContainer>
                </MainContainer>

            </BoxMainContainer>
            <ToastContainer position={"bottom-center"} hideProgressBar />

        </>
    );
}

export default App;
