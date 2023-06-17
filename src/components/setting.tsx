import { Button, Pane, Dialog,TextInput,Radio } from 'evergreen-ui'
import { useState } from 'react'

export default function Setting() {
    const [isShown, setIsShown] = useState(false)
    const [value, setValue] = useState('')
    return (
        <div>
            <Pane>
                <Dialog
                isShown={isShown}
                title="設定"
                intent="setting"
                onCloseComplete={() => setIsShown(false)}
                confirmLabel="確定"
                >
                    <div>

                        <div
                            style = {{
                                top: "110px",
                                left: "382px",
                                position:"fixed",
                                fontSize:"12px",
                            }}>
                                1<>　 　　</>3<>　 　　</>5
                        </div>

                        <div
                            style = {{
                                top: "180px",
                                left: "382px",
                                position:"fixed",
                                fontSize:"12px",
                            }}>
                                1<>　 　　</>3<>　 　　</>5
                        </div>

                        <div
                            style = {{
                                top: "270px",
                                left: "382px",
                                position:"fixed",
                                fontSize:"12px",
                            }}>
                                1<>　 　　</>3<>　 　　</>5
                        </div>

                        <div
                            style = {{
                                top: "160px",
                                left: "360px",
                                position:"fixed",
                                fontSize:"9px",
                                color:"red"
                            }}>
                            progressチェンネルから取ってきます
                        </div>

                        <div style={{lineHeight: 5}}>
                            <div>traQ ID : Apple

                            <Pane aria-label="progress_group" role="progress_group"position="fixed" top="120px" right="70px" display="flex">
                                <Radio checked size={16} name="progress_group" label="" /><>　　</>
                                <Radio size={16} name="progress_group" checked label=""/><>　　</>
                                <Radio size={16} name="progress_group" checked label=""/>
                            </Pane>

                            </div>

                            <div>Github ID :  <>　　</>
                                <TextInput width="30%" height={20} onChange={e => setValue(e.target.value)} value={value} />

                                <Pane aria-label="github_group" role="github_group"position="fixed" top="200px" right="70px" display="flex">
                                    <Radio checked size={16} name="github_group" label=""/><>　　</>
                                    <Radio size={16} name="github_group" checked label=""/><>　　</>
                                    <Radio size={16} name="github_group" checked label=""/>
                                </Pane>

                            </div>
                    
                            <div>AtCorder ID :  <>　</>
                                <TextInput width="30%" height={20} onChange={e => setValue(e.target.value)} value={value} />

                                <Pane aria-label="atcorder_group" role="atcorder_group"position="fixed" top="280px" right="70px" display="flex">
                                    <Radio checked size={16} name="atcorder_group" label=""/><>　　</>
                                    <Radio size={16} name="atcorder_group" checked label=""/><>　　</>
                                    <Radio size={16} name="atcorder_group" checked label=""/>
                                </Pane>

                            </div>
                        </div>
                    </div>
                </Dialog>
            </Pane>
            <Pane position="fixed" top="10px" right="200px">
            <Button onClick={() => setIsShown(true)} 
                >設定を開く</Button>
            </Pane>  
        </div>
        
    )
}

