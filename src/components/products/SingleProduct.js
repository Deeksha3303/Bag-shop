
import { Stack } from "@mui/material"
import {    ProductActionsWrapper, Product, ProductActionButton, ProductAddToCart, ProductFavButton, ProductImage, Productmetawrapper } from "../../styles/product"
import ProductMeta from "./ProductMeta"




export default function SingleProduct ({product, matches}){
    

   

    return (
    <>
  <Product>
        <ProductImage src={product.image}></ProductImage>
        <ProductMeta product={product} matches={matches}></ProductMeta>
        <ProductAddToCart onClick={handleBookClick}>BOOK</ProductAddToCart>
      </Product>
        
        </>
        
        
    )


}
