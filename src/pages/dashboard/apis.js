import { domainUrl } from "../../shared";
import { Alert } from "../../components";

const updateUserRequest = async (obj) => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json")
    var requestOptions = {
        method: 'post',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(obj)
    };
    return (
        fetch(domainUrl + `/updateStatus`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('result:', result)
                if (result?.success) {
                    Alert("success", "user request status updated")
                    return 1
                }
                else
                    throw 'error'
            })
            .catch(error => { Alert("error", "error while updating user request status"); return 0 })
    )
}

const removeUser = async (ID) => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json")
    var requestOptions = {
        method: 'delete',
        headers: myHeaders,
        redirect: 'follow',
    };
    return (
        fetch(domainUrl + `/deleteUserDetail/` + ID, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('result:', result)
                if (result?.success) {

                    Alert("success", "user deleted successfully")
                    return 1
                }
                else
                    throw 'error'
            })
            .catch(error => { Alert("error", "error while deleting user"); return 0 })
    )
}
const unreadNotification = async () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userToken}`);
    var requestOptions = {
        method: 'get',
        headers: myHeaders,
        redirect: 'follow'
    };
    return (
        fetch(domainUrl + `/unreadNotification`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result?.success) {
                    return result?.unreadNotificaitonCount
                }
                else
                    throw 'error'
            })
            .catch(error => { Alert("error", "error while updating user request status"); return 0 })
    )
}
export {
    updateUserRequest,
    removeUser,
    unreadNotification
}