import { Center, Grid, GridItem } from "@chakra-ui/react"
import CheckoutDetails from "../components/CheckoutDetails"
import PaymentForm from "../components/PaymentForm"

const CheckoutPage = () => {
  return (
    <Center paddingY={150}>
      <Grid gridTemplateColumns="3fr 1.5fr" w="90vw"  gap={25}>
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
