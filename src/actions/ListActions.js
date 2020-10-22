export const show = {type:'ALL_BLOGS'}

export const sort = (sort) => {
    return{
        type: 'SORT',
        sort
    }
}