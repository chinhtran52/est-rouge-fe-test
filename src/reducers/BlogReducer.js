let initState = {
    blogs: [],
    searchResult: [],
    page: 1
}

export const initReducer = (state=initState,action) =>{
    switch(action.type){
        case 'ALL_BLOGS':
            return state
        case 'CHANGE_PAGE':
            state.page = action.page
            return {...state}
        case 'SORT':
            state.searchResult = [...state.blogs.sort((a, b) => (a[action.info] > b[action.info]) ? 1 : -1)]
            state.page = 1
            return {...state}
        case 'FETCH_BLOGS':
            state.blogs = action.blogs
            state.searchResult = action.blogs
            return {...state}
        case 'SEARCH':
            const result = state.blogs.filter((item,index)=>{
                return item.title.includes(action.info)||item.content.includes(action.info)
            })
            state.searchResult = result
            state.page = 1
            return {...state}
        default:
            return state
    }
}