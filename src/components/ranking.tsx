import { Button,Pane } from 'evergreen-ui'


export default function Ranking() {
    return (
      <>
      <Pane position="fixed" top="10px" right="10px">
         <Button intent="ranking">
          ランキングへ
        </Button>
      </Pane>
       
      </>
    )
  }