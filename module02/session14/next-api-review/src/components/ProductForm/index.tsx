"use client"

import { Button, Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useFormik } from "formik"
import { IProductRequest } from "@/interfaces/IProductRequest"
import { postProduct } from "@/utils/api/product"

interface IProductFormProps {
    handleGetProducts:() => void
}

export default function ProductForm(props:IProductFormProps){

    const formik = useFormik({
        initialValues:{
            product_name:"",
            price:0,
            stock:0,
            image:""
        },
        onSubmit: async (values:IProductRequest) => {
            await postProduct(values) // setiap submit data 
            props.handleGetProducts()// maka dia akan load data product lagi 
        }
    })

    return (<form onSubmit={formik.handleSubmit} 
    style={{width:'50%', margin:"20px auto", 
    border:'1px solid black', 
    padding:'20px', 
    borderRadius:'20px'}}>
        <div className="mb-10">
           <Field label="Product Name">
            <Input 
                type="text" 
                name="product_name"
                value={formik.values.product_name}
                onChange={formik.handleChange}
                border={'1px solid grey'}
                padding={"10px"}
            />
            </Field>
        </div>
        <div className="mb-10">
            <Field label="Price">
                <Input 
                    type="number" 
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    border={'1px solid grey'}
                    padding={"10px"}
                />
            </Field>
        </div>
        <div className="mb-10">
            <Field label="Stock">
                <Input 
                    type="number" 
                    name="stock"
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    border={'1px solid grey'}
                    padding={"10px"}
                />
            </Field>
        </div>
        <div className="mb-10">
            <Field label="Image">
                <Input 
                    type="text" 
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    border={'1px solid grey'}
                    padding={"10px"}
                />
            </Field>
        </div>
        <div className="mb-10">
            <Button 
                type="submit" 
                bgColor={'blue.500'} 
                p={'0 10px'} 
                color={'white'}
            > Add Product </Button>
        </div>
    </form>)
}