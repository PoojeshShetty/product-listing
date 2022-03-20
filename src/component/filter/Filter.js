import React from 'react'
import { getBrandList } from '../../utils/utils'

function Filter({filter, setFilter, products}) {

    const brandList = getBrandList(products)

    function priceFilter(priceType){
        setFilter({
            ...filter,
            price:priceType
        })
    } 
    
    function brandFilter(brandName){
        if(filter.brand.some(item => item === brandName))
            setFilter({
                ...filter,
                brand: filter.brand.filter(item => item !== brandName)
            })
        else
            setFilter({
                ...filter,
                brand: filter.brand.concat([brandName])
            })
    }

    function sizeFilter(size){
        if(filter.size.some(item => item === size))
            setFilter({
                ...filter,
                size: filter.size.filter(item => item !== size)
            })
        else{
            setFilter({
                ...filter,
                size: filter.size.concat([size])
            })
        }
    }

    function genderFilter(genderChoice){
        setFilter({
            ...filter,
            gender: genderChoice
        })
    }

  return (
    <div className='filter'>
        <div className="filter__type">
            <div className="filter__title">
                Price
            </div>
            <div className="filter__content">
                <input type="radio" 
                    name="price_filter"
                    placeholder="Low To High"
                    value="low_to_high" 
                    checked={filter.price === "low_to_high"}
                    onChange={()=>priceFilter("low_to_high")}/>
                <label>Low To High</label>
            </div>
            <div className="filter__content">
                
            <input 
                    type="radio" 
                    name="price_filter"
                    placeholder="High to Low"
                    value="high_to_low" 
                    checked={filter.price === "high_to_low"}
                    onChange={()=>priceFilter("high_to_low")}/>
                <label>High To Low</label>
            </div>
        </div>

        <div className="filter__type">
            <div className="filter__title">
                Brand
            </div>
            
            {
                brandList.map((brand,index) => ( 
                    <div className="filter__content" key={index}>
                        <input 
                            onChange={() => brandFilter(brand)}
                            type="checkbox"
                            checked={filter.brand.some(item => item === brand)}
                            value={brand} />
                        <label>{brand.toUpperCase()}</label>
                    </div>
                ))
            }
        </div>

        <div className="filter__type">
            <div className="filter__title">
                Size
            </div>
            <div className="filter__content">
                <input type="checkbox"
                    value="S" 
                    onChange={() => sizeFilter("S")}
                    checked={filter.size.some(item => item === "S")}
                    />
                <label>Small</label>
            </div>
            <div className="filter__content">
                <input type="checkbox"
                    value="M" 
                    onChange={() => sizeFilter("M")}
                    checked={filter.size.some(item => item === "M")}
                    />
                <label>Medium</label>
            </div>
            <div className="filter__content">
                <input type="checkbox"
                    value="L" 
                    onChange={() => sizeFilter("L")}
                    checked={filter.size.some(item => item === "L")}
                    />
                <label>Large</label>
            </div>
            <div className="filter__content">
                <input type="checkbox"
                    value="XL"
                    onChange={() => sizeFilter("XL")}
                    checked={filter.size.some(item => item === "XL")}
                    />
                <label>XL</label>
            </div>
        </div>

        <div className="filter__type">
            <div className="filter__title">
                Ideal for
            </div>
            <div className="filter__content">
                <input type="radio" 
                    name="gender_filter"
                    value="all" 
                    checked={filter.gender === "all"}
                    onChange={()=> genderFilter("all")}
                />
                <label>All</label>
            </div>

            <div className="filter__content">
                <input type="radio" 
                    name="gender_filter"
                    value="men"
                    checked={filter.gender === "male"}
                    onChange={()=> genderFilter("male")} 
                />
                <label>Male</label>
            </div>

            <div className="filter__content">
                <input type="radio"
                    name="gender_filter"
                    value="women" 
                    checked={filter.gender === "female"}
                    onChange={()=> genderFilter("female")}
                />
                <label>Female</label>
            </div>
        </div>

    </div>
  )
}

export default Filter