import styled from "styled-components"

export const BoxMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const MainContainer = styled.div`
  width: 100%;
`

export const InputMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextInputContainer = styled.div`
  position: relative;
    
`

export const DownImage = styled.img`
  position: absolute;
  bottom: 25px;
  right: 10px;
  
`

export const TextInput = styled.input`
  padding: 10px 25px 10px 10px;
  margin: 0 auto 10px;
  border-radius: 5px;
  width: 280px;
  outline: none;
  font-size: 1.1rem;
  &:focus {
    box-shadow: 0 0 0 4px rgb(158, 138, 245)
  }
;
`

export const CardContainer = styled.div`
  padding: 10px;
  width: 90%;
  max-width: 300px;
  max-height: 300px;
  overflow: auto;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 0 auto;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  text-transform: capitalize;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;

  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    height: 5px;

  }

  &::-webkit-scrollbar-thumb {
    background: #c2c1c1;
    border-radius: 100px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  &:hover {
    background: #dcddf2;
  }
  
  border-radius: 4px;

`