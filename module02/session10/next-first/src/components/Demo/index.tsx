import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"

const Demo = () => {
  return (
    <HStack>
      <Button bgColor={'blue.500'}> Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}

export default Demo