function filterPrice(product, filter){
    if(filter === null)  return product
    if(filter === "low_to_high"){
        return product.slice().sort((a,b) => a.price> b.price ? 1: -1)
    }
    return product.slice().sort((a,b) => a.price > b.price ? -1 : 1)
}

function getBrandList(products){
    let setProduct = new Set()
    for(let product of products)
        setProduct.add(product.brand)
    return Array.from(setProduct)
}

function filterByBrand(products,brandFilterList){
    if(brandFilterList.length === 0) return products;

    return products.filter(product => brandFilterList.some(item => item === product.brand));
}

function filterBySize(products, sizeFilterList){
    if(sizeFilterList.length === 0) return products;

    return products.filter(product => sizeFilterList.some(item => product.size.some(productSize => productSize === item)))
}

function filterByGender(products, genderFilter){
    if(genderFilter === "all") return products

    return products.filter(product => product.gender === genderFilter)
}

export{
    filterPrice,
    getBrandList,
    filterByBrand,
    filterBySize,
    filterByGender
}