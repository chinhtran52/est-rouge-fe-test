import * as blogApi from '../api/BlogApi'

const initState = {
    blogs: blogApi.getAllBlogs().data,
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
        default:
            return state
    }
}