import { Center, Grid, GridItem } from "@chakra-ui/react"
import CheckoutDetails from "../components/CheckoutPage/CartDetails"
import PaymentForm from "../components/CheckoutPage/PaymentForm"

const CheckoutPage = () => {
  return (
    <Center paddingTop={150}>
      <Grid gridTemplateColumns="3fr 1.5fr" w="90vw" gap={25}>
        <GridItem>
          <CheckoutDetails />
        </GridItem>
        <GridItem>
          <PaymentForm />
        </GridItem>
      </Grid>
    </Center>
  )
}

export default CheckoutPage
