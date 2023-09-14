import { Card, Center, Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react"
import CartDetailsCard from "../components/CheckoutPage/CartDetailsCard"
import CheckoutCard from "../components/CheckoutPage/CheckoutCard"

const CheckoutPage = () => {
  const [orderPlaced, setOrderPlaced] = useState(false)
  // This only lives this high because I'm not saving it to a db
  // And I want to display it back to the user when the order is submitted
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    cardNumber: "",
    cvv: "",
    expDate: "",
  })

  const [billingInfo, setBillingInfo] = useState({
    streetAddr: "",
    city: "",
    state: "",
    zip: "",
  })
  const [shippingInfo, setShippingInfo] = useState({
    streetAddr: "",
    city: "",
    state: "",
    zip: "",
  })


  return (
    <Center paddingTop={150}>
      {!orderPlaced ? (
        <Grid gridTemplateColumns={{ lg: "3fr 1.5fr" }} w="90vw" gap={25}>
          <GridItem>
            <CartDetailsCard />
          </GridItem>
          <GridItem>
            <CheckoutCard
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            billingInfo={billingInfo}
            setBillingInfo={setBillingInfo}
            setOrderPlaced={setOrderPlaced} />
          </GridItem>
        </Grid>
      ) : (
        <Card h="70vh" p={5}>Thanks for your order...</Card>
      )}
    </Center>
  )
}

export default CheckoutPage
