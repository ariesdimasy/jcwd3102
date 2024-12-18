"use client"
import { useState, useEffect } from "react";
import { getProducts } from "@/utils/api/product";
import { Button, Card } from "@chakra-ui/react"
import ProductForm from "@/components/ProductForm";
import DialogConfirmDelete from "@/components/DialogConfirmDelete";

export default function Home() {

  const [openModal, setOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    handleGetProducts()
  },[]) // pertama kali halaman di load

  return (
    <>
      <div>
        <ProductForm handleGetProducts={handleGetProducts} />
      </div>
      <div className="grid grid-cols-1 grid-cols-4">
      {products.map( (item, index) => {
        return (<Card.Root className="justify-item-center" key={index} variant={'elevated'} width={'250px'} margin={'20px'}>
          <Card.Header className="flexbox justify-content-between align-items-center">
            <div style={{  width:'150px'}}>{item?.product_name} </div>
            <Button 
              size={'xs'}
              float={'right'}
              w={'20px'} 
              bgColor={'red.500'} 
              color={'white'}
              onClick={() => { 
                setSelectedProduct({
                  id:item?.objectId,
                  product_name:item?.product_name
                })
                setOpenModal(!openModal) 
               
              }}
            > X </Button>
          </Card.Header>
          <img src={item.image != "" ? item.image : "https://via.placeholder.com/150"} alt={item.product_name} />
          <Card.Body>
           
            <div>Price : {item?.price}</div>
            <div>Stock : {item?.stock}</div>
          </Card.Body>
          <Card.Footer>
            <a href="#"> Buy </a>
          </Card.Footer>
        </Card.Root>)
      } )}
      </div>
      <DialogConfirmDelete 
        id={selectedProduct?.id}
        product_name={selectedProduct?.product_name}
        open={openModal} 
        onOpenChange={(e) => setOpenModal(e.open)}
        handleGetProducts={handleGetProducts}
      />
    </>
  );
}
