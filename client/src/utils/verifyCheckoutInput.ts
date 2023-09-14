import Address from "../entities/Address"
import PaymentDetails from "../entities/PaymentDetails"

interface Params {
  paymentInfo: PaymentDetails
  shippingInfo: Address
  billingInfo: Address
}

const verifyCheckoutInput = ({
  paymentInfo,
  shippingInfo,
  billingInfo,
}: Params) => {
  let error = { active: false, message: "" }

  // These are arbitrary values used to simulate a checkout process
  if (paymentInfo.name.length <= 3)
    error = { active: true, message: "Please enter your full name." }
  else if (paymentInfo.email.length <= 5 || !paymentInfo.email.includes("@"))
    error = { active: true, message: "Please enter a valid email address." }
  else if (paymentInfo.cardNumber.length !== 16)
    error = {
      active: true,
      message: "Please enter your card number to complete the transaction.",
    }
  else if (paymentInfo.cvv.length !== 3)
    error = {
      active: true,
      message: "Please enter the CVV number on the back of your card.",
    }
  else if (paymentInfo.expDate.length !== 5)
    error = {
      active: true,
      message: "Please enter the expiration date of your card.",
    }
  else if (shippingInfo.streetAddr.length <= 5)
    error = {
      active: true,
      message: "Please enter a street address for shipping.",
    }
  else if (shippingInfo.city.length <= 3)
    error = { active: true, message: "Please enter a city for shipping." }
  else if (shippingInfo.state.length < 2)
    error = { active: true, message: "Please enter a state for shipping." }
  else if (shippingInfo.zip.length < 5)
    error = {
      active: true,
      message: "Please enter a zip code for shipping.",
    }
  else if (billingInfo.streetAddr.length <= 5)
    error = {
      active: true,
      message: "Please enter the street address associated with your card.",
    }
  else if (billingInfo.city.length <= 3)
    error = {
      active: true,
      message: "Please enter the city associated with your card.",
    }
  else if (billingInfo.state.length < 2)
    error = {
      active: true,
      message: "Please enter the state associated with your card.",
    }
  else if (billingInfo.zip.length < 5)
    error = {
      active: true,
      message: "Please enter the zip code associated with your card.",
    }

  return error
}

export default verifyCheckoutInput
