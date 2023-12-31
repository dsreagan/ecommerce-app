import { Flex, Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react"
import CartDetailsCard from "../components/CheckoutPage/CartDetailsCard"
import OrderCard from "../components/CheckoutPage/OrderCard"
import CheckoutCard from "../components/CheckoutPage/PlaceOrderCard"

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
    <Flex justify="center" align="center" paddingTop={150}>
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
        <OrderCard />
      )}
    </Flex>
  )
}

export default CheckoutPage
