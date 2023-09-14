import { FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import Address from "../../entities/Address"

interface Props {
  shippingInfo: Address
  setShippingInfo: React.Dispatch<React.SetStateAction<Address>>
  
}

const ShippingForm = ({ shippingInfo, setShippingInfo }: Props) => {
  
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setShippingInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <>
      <Text fontSize="lg">Shipping Address</Text>
      <FormControl>
        <VStack spacing={3}>
          <Input
            placeholder="Street Address"
            name="streetAddr"
            value={shippingInfo.streetAddr}
            onChange={handleChange}
          />
          <Input
            placeholder="City"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
          />
          <Input
            placeholder="State"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
          />
          <Input
            placeholder="Zip"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleChange}
          />
        </VStack>
      </FormControl>
    </>
  )
}

export default ShippingForm
