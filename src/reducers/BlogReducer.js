// import * as blogApi from '../api/BlogApi'

import {data} from '../components/data'

// const getBlogs = async () =>{
//     return await blogApi.getAllBlogs()
// }

let initState = {
    blogs: data,
    sort : {
        type: 'time',
        by: 'ascending'
    },
    search: '',
    page: 1
}

export const initReducer = (state=initState,action) =>{
    switch(action.type){
        case 'ALL_BLOGS':
            return state
        case 'CHANGE_PAGE':
            state.page = action.page
            console.log(state)
            return state
        default:
            return state
    }
}