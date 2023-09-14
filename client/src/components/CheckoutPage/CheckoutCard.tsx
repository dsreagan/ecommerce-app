import { Button, Card, Checkbox, Divider, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
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
  const [error, setError] = useState({ active: false, message: "" })
  const [sameBilling, setSameBilling] = useState(true)

  const onSubmit = () => {
    // !! Arbitrary Error Handling !!
    // No payment system in place at this time
    setError(verifyCheckoutInput({ paymentInfo, shippingInfo, billingInfo }))
    if (!error.active) setOrderPlaced(true)
  }

  return (
    <Card h="70vh" p={5} overflowY="scroll" textAlign="center">
      <VStack spacing={5}>
        <PaymentForm
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
        />
        <Divider />
        <ShippingForm
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
              billingInfo={billingInfo}
              setBillingInfo={setBillingInfo}
            />
          </>
        )}
        {error.active && <Text color="red.400">{"*" + error.message}</Text>}
        <Button size={{ base: "md", sm: "lg" }} onClick={onSubmit}>
          Place Order
        </Button>
      </VStack>
    </Card>
  )
}

export default CheckoutCard
