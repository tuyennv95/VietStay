export const isLogin = () =>{
    const hihi = document.cookie;
    if(hihi){
        return true;
    }
    return false;
}
export const checkRole = () =>{
   
    return 1;
}

export const isLogOut=()=>{
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}