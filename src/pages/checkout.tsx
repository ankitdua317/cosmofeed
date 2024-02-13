import { ChangeEvent, SyntheticEvent, useState } from "react";
import Input from "@/components/Input";
import {
  validateCityOrState,
  validateMobileNumber,
  validatePincode,
} from "@/utils/common";

interface FormState {
  country: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  mobileNumber: string;
}

const intialErrorState = {
  country: "",
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  pincode: "",
  mobileNumber: "",
};

const initalFormState = {
  country: "",
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  pincode: "",
  mobileNumber: "",
};

const CheckoutPage = () => {
  const [formState, setFormState] = useState<FormState>(initalFormState);
  const [error, setError] = useState<FormState>(intialErrorState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "mobileNumber") {
      setError((prev) => {
        return {
          ...prev,
          mobileNumber:
            value.length > 10
              ? "Mobile Number cannot be more than 10 digits"
              : "",
        };
      });
      if (value.length > 10) return;
    } else if (name === "pincode") {
      setError((prev) => {
        return {
          ...prev,
          pincode:
            value.length > 6 ? "Pincode cannot be more than 6 digits" : "",
        };
      });
      if (value.length > 6) return;
    }

    if (error.city && name === "city") setError({ ...error, city: "" });
    if (error.state && name === "state") setError({ ...error, state: "" });

    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCheckout = (e: SyntheticEvent) => {
    e.preventDefault();
    const errorMessages = { ...error };
    let isError = false;
    if (!validateMobileNumber(formState.mobileNumber)) {
      errorMessages.mobileNumber = "Please enter valid mobile number";
      isError = true;
    }
    if (!validatePincode(formState.pincode)) {
      errorMessages.pincode = "Please enter valid pincode";
      isError = true;
    }

    if (!validateCityOrState(formState.city)) {
      errorMessages.city = "City name cannot have a number in it";
      isError = true;
    }

    if (!validateCityOrState(formState.state)) {
      errorMessages.state = "State name cannot have a number in it";
      isError = true;
    }
    setError(errorMessages);
    if (isError) {
      return;
    }
    window.alert("Payment Successful");
  };

  return (
    <>
      <section className="md:pt-16 pt-6 px-6 md:px-24 bg-[#FAFAFA]">
        <h5>Checkout</h5>

        <form onSubmit={handleCheckout} className="mt-4 max-w-[600px]">
          <label className="text-sm">
            Country <span className="text-[#ff0000]">*</span>
          </label>
          <select
            className="w-full mt-1 py-2 px-4 text-[#808080] border border-[#808080]"
            name="country"
            value={formState.country}
            required
            onChange={(e) =>
              setFormState((prev) => {
                return { ...prev, country: e.target.value };
              })
            }
          >
            <option value="">Select..</option>
            <option value="India">India</option>
            <option value="country 2">Country 2</option>
            <option value="country 4">Country 3</option>
            <option value="country 3">Country 4</option>
          </select>

          <div className="md:grid md:grid-cols-2 md:gap-4">
            <Input
              label="First Name"
              value={formState.firstName}
              type="text"
              isRequired
              handleInput={handleInputChange}
              placeholderText=""
              name="firstName"
              error={error.firstName}
            />
            <Input
              label="Last Name"
              value={formState.lastName}
              type="text"
              handleInput={handleInputChange}
              placeholderText=""
              name="lastName"
              error={error.lastName}
            />
          </div>
          <Input
            label="Address Line 1"
            value={formState.address1}
            type="text"
            isRequired
            handleInput={handleInputChange}
            placeholderText=""
            name="address1"
            error={error.address1}
          />
          <Input
            label="Address Line 2"
            value={formState.address2}
            type="text"
            handleInput={handleInputChange}
            placeholderText=""
            name="address2"
            error={error.address2}
          />
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <Input
              label="City"
              value={formState.city}
              type="text"
              isRequired
              handleInput={handleInputChange}
              placeholderText=""
              name="city"
              error={error.city}
            />
            <Input
              label="State"
              value={formState.state}
              type="text"
              isRequired
              handleInput={handleInputChange}
              placeholderText=""
              name="state"
              error={error.state}
            />
            <Input
              label="Pin code"
              value={formState.pincode}
              type="number"
              isRequired
              handleInput={handleInputChange}
              placeholderText=""
              name="pincode"
              handleBlur={() => setError({ ...error, pincode: "" })}
              error={error.pincode}
            />
          </div>
          <Input
            label="Mobile Number"
            value={formState.mobileNumber}
            type="number"
            isRequired
            handleInput={handleInputChange}
            placeholderText=""
            name="mobileNumber"
            handleBlur={() => setError({ ...error, mobileNumber: "" })}
            error={error.mobileNumber}
          />
          <input
            className="mt-6 outline-none border-none text-center bg-black text-white w-full py-3"
            type="submit"
            value="Continue to Payment"
          />
        </form>
      </section>
    </>
  );
};

export default CheckoutPage;
