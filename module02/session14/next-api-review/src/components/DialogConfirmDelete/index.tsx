"use client"

import { Button } from "@/components/ui/button"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,

} from "@/components/ui/dialog"

import { deleteProduct } from "@/utils/api/product"

interface IDialogConfirmDelete { 
    id:string
    product_name:string
    open:boolean
    onOpenChange:(e:any) => void
    handleGetProducts:() => void
}

export default function DialogConfirmDelete(props:IDialogConfirmDelete){
    
    const handleDeleteProduct = async () => {
        const res = await deleteProduct(props.id)
        alert(JSON.stringify(res))
    }
    
    return (<DialogRoot size={'sm'} open={props.open} >
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>
             Are you sure want to delete this :  {props.product_name} 
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" onClick={() => props.onOpenChange(!props.open)}>Cancel</Button>
              <Button 
                bgColor={'red.500'} 
                color={'white'} 
                onClick={() => { 
                    handleDeleteProduct()
                    props.onOpenChange(false)
                    props.handleGetProducts()
                }}> Delete 
              </Button>
            </DialogActionTrigger>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>)
}