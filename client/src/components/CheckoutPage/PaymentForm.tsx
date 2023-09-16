import { FormControl, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import PaymentDetails from "../../entities/PaymentDetails"
import inputStyles from "../../styles/inputStyles"

interface Props {
  paymentInfo: PaymentDetails
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentDetails>>
  invalidInput: number
}

const PaymentForm = ({ paymentInfo, setPaymentInfo, invalidInput }: Props) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPaymentInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <>
      <Text fontSize="lg" fontWeight="bold">
        Enter Payment Details
      </Text>
      <FormControl>
        <VStack spacing={3}>
          <Input
            placeholder="Full Name"
            name="name"
            value={paymentInfo.name}
            onChange={handleChange}
            isInvalid={invalidInput === 1}
            {...inputStyles}
          />
          <Input
            placeholder="Email"
            name="email"
            value={paymentInfo.email}
            onChange={handleChange}
            isInvalid={invalidInput === 2}
            {...inputStyles}
          />
          <Input
            placeholder="Card Number"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            isInvalid={invalidInput === 3}
            {...inputStyles}
          />
          <HStack>
            <Input
              placeholder="CVV"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handleChange}
              isInvalid={invalidInput === 4}
              {...inputStyles}
            />
            <Input
              placeholder="Exp Date: mm/yy"
              name="expDate"
              value={paymentInfo.expDate}
              onChange={handleChange}
              isInvalid={invalidInput === 5}
              {...inputStyles}
            />
          </HStack>
        </VStack>
      </FormControl>
    </>
  )
}

export default PaymentForm
