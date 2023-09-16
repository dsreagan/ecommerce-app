import { FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import Address from "../../entities/Address"
import inputStyles from "../../styles/inputStyles"

interface Props {
  billingInfo: Address
  setBillingInfo: React.Dispatch<React.SetStateAction<Address>>
  invalidInput: number
}

const BillingForm = ({ billingInfo, setBillingInfo, invalidInput }: Props) => {
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
      <Text fontSize="lg" fontWeight="bold">
        Billing Address
      </Text>
      <FormControl>
        <VStack spacing={3}>
          <Input
            placeholder="Street Address"
            name="streetAddr"
            value={billingInfo.streetAddr}
            onChange={handleChange}
            isInvalid={invalidInput === 10}
            {...inputStyles}
          />
          <Input
            placeholder="City"
            name="city"
            value={billingInfo.city}
            onChange={handleChange}
            isInvalid={invalidInput === 11}
            {...inputStyles}
          />
          <Input
            placeholder="State"
            name="state"
            value={billingInfo.state}
            onChange={handleChange}
            isInvalid={invalidInput === 12}
            {...inputStyles}
          />
          <Input
            placeholder="Zip"
            name="zip"
            value={billingInfo.zip}
            onChange={handleChange}
            isInvalid={invalidInput === 13}
            {...inputStyles}
          />
        </VStack>
      </FormControl>
    </>
  )
}

export default BillingForm
