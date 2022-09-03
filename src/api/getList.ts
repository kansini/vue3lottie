import $http from "./index"


const getList = (url) => {
    return $http.post(url)

}
export {getList}
