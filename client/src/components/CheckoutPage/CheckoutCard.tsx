import { Button, Card, Checkbox, Divider, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Address from "../../entities/Address"
import PaymentDetails from "../../entities/PaymentDetails"
import verifyCheckoutInput from "../../utils/verifyCheckoutInput"
import BillingForm from "./BillingForm"
import PaymentForm from "./PaymentForm"
import ShippingForm from "./ShippingForm"

interface Props {
  paymentInfo: PaymentDetails
  shippingInfo: Address
  billingInfo: Address
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentDetails>>
  setShippingInfo: React.Dispatch<React.SetStateAction<Address>>
  setBillingInfo: React.Dispatch<React.SetStateAction<Address>>
  setOrderPlaced: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckoutCard = ({
  paymentInfo,
  setPaymentInfo,
  shippingInfo,
  setShippingInfo,
  billingInfo,
  setBillingInfo,
  setOrderPlaced,
}: Props) => {
  const [error, setError] = useState({ active: true, element: 0, message: "" })
  const [sameBilling, setSameBilling] = useState(true)

  useEffect(() => {
    if (!error.active) setOrderPlaced(true)
  })

  const onSubmit = () => {
    // !! Semi-Arbitrary Error Handling !!
    // No payment system in place at this time
    let newError = { active: true, element: 0, message: "" }
    sameBilling
      ? (newError = verifyCheckoutInput({ paymentInfo, shippingInfo }))
      : (newError = verifyCheckoutInput({
          paymentInfo,
          shippingInfo,
          billingInfo,
        }))
    setError(newError)
  }

  return (
    <Card h="70vh" p={5} overflowY="scroll" textAlign="center">
      <VStack spacing={5}>
        <PaymentForm
          invalidInput={error.element}
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
        />
        <Divider />
        <ShippingForm
          invalidInput={error.element}
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
        />
        <Checkbox
          isChecked={sameBilling}
          onChange={() => setSameBilling((prev) => !prev)}
        >
          Billing address same as shipping.
        </Checkbox>
        {!sameBilling && (
          <>
            <Divider />
            <BillingForm
              invalidInput={error.element}
              billingInfo={billingInfo}
              setBillingInfo={setBillingInfo}
            />
          </>
        )}
        {error.active && <Text color="red.400">{error.message}</Text>}
        <Button size={{ base: "md", sm: "lg" }} onClick={onSubmit}>
          Place Order
        </Button>
      </VStack>
    </Card>
  )
}

export default CheckoutCard
