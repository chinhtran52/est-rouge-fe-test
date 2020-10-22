export const show = {type:'ALL_BLOGS'}

export const sort = (info) => {
    return{
        type: 'SORT',
        info: info.type==='Title'?'title':'createdAt'
    }
}

export const changePage = (page) => {
    return{
        type: 'CHANGE_PAGE',
        page: page
    }
}

export const fetchBlogs = (data) => {
    return{
        type: 'FETCH_BLOGS',
        blogs: data
    }
}

export const search = (info) => {
    return{
        type: 'SEARCH',
        info: info
    }
}