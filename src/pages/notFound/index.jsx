import { Link } from "react-router-dom"
import {Result, Button} from "antd"
const ModuleNotFound=()=>{
    return(
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the module you visited does not exist."
            extra={
                <Link to='/clients-result'>
                    <Button type="primary">Back</Button>
                </Link>
            }
        />
    )
}
export default ModuleNotFound