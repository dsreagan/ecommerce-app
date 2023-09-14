import { FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import Address from "../../entities/Address"

interface Props {
  billingInfo: Address
  setBillingInfo: React.Dispatch<React.SetStateAction<Address>>
}

const BillingForm = ({ billingInfo, setBillingInfo }: Props) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBillingInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <>
      <Text fontSize="lg">Billing Address</Text>
      <FormControl>
        <VStack spacing={3}>
          <Input
            placeholder="Street Address"
            name="streetAddr"
            value={billingInfo.streetAddr}
            onChange={handleChange}
          />
          <Input
            placeholder="City"
            name="city"
            value={billingInfo.city}
            onChange={handleChange}
          />
          <Input
            placeholder="State"
            name="state"
            value={billingInfo.state}
            onChange={handleChange}
          />
          <Input
            placeholder="Zip"
            name="zip"
            value={billingInfo.zip}
            onChange={handleChange}
          />
        </VStack>
      </FormControl>
    </>
  )
}

export default BillingForm
