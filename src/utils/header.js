export const getNav = (list , key) => {
    return list.find((item) => item?.heading === key)
}