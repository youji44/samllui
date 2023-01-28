export const getUserAsyncData = async () => {
    /**
     * return keys
     * Token
     * userFullName
     * userId
     */
    try {
        const tokenString = await localStorage.getItem('@user');
        return tokenString != null ? JSON.parse(tokenString) : null;

    } catch (e) {
        // error reading value
        console.log(e)
        return ""
    }


}