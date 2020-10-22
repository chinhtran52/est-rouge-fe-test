export const show = {type:'ALL_BLOGS'}

export const sort = (sort) => {
    return{
        type: 'SORT',
        sort
    }
}

export const changePage = (page) => {
    return{
        type: 'CHANGE_PAGE',
        page: page
    }
}