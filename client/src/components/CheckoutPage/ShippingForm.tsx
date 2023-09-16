import { FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import Address from "../../entities/Address"
import inputStyles from "../../styles/inputStyles"

interface Props {
  shippingInfo: Address
  setShippingInfo: React.Dispatch<React.SetStateAction<Address>>
  invalidInput: number
}

const ShippingForm = ({
  shippingInfo,
  setShippingInfo,
  invalidInput,
}: Props) => {
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
      <Text fontSize="lg" fontWeight="bold">
        Shipping Address
      </Text>
      <FormControl>
        <VStack spacing={3}>
          <Input
            placeholder="Street Address"
            name="streetAddr"
            value={shippingInfo.streetAddr}
            onChange={handleChange}
            isInvalid={invalidInput === 6}
            {...inputStyles}
          />
          <Input
            placeholder="City"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            isInvalid={invalidInput === 7}
            {...inputStyles}
          />
          <Input
            placeholder="State"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
            isInvalid={invalidInput === 8}
            {...inputStyles}
          />
          <Input
            placeholder="Zip"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleChange}
            isInvalid={invalidInput === 9}
            {...inputStyles}
          />
        </VStack>
      </FormControl>
    </>
  )
}

export default ShippingForm
