import { Combobox,Pane } from 'evergreen-ui'

export default function UserID() {
    return (
        <Pane position="fixed" top="60px" right="10px">
            <Combobox
            openOnFocus
            items={['Banana', 'Orange', 'Apple', 'Mango']}
            onChange={selected => console.log(selected)}
            placeholder="userID"
            />
        </Pane>
    )
  }
