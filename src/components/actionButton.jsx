import { Tooltip, Button } from "antd"
export const ActionButton=({title, icon, noToolTip, ...props})=>{
    return (
        <>
        {
            noToolTip?
            <Button shape='circle' size='small' {...props}>
                {
                    icon
                }
            </Button>
            :
            <Tooltip title={title} color={'rgb(0, 63, 99)'}>
                <Button shape='circle' size='small' {...props}>
                    {
                        icon
                    }
                </Button>
            </Tooltip>
        }
        </>
    )
}