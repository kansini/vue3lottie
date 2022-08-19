import $http from "./index"


const getYogaList = () => {
    return $http.post('yoga.json')

}
export {getYogaList}
