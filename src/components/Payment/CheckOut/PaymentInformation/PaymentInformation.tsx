import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const PaymentInformation = () => {
  return (
    <div className="max-w-2xl  p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
    <div>
      {/* Payment Methods */}
      <RadioGroup defaultValue="bank-transfer" className="space-y-4">
        {/* Direct Bank Transfer */}
        <div className="flex items-start space-x-4">
          <RadioGroupItem id="bank-transfer" value="bank-transfer" />
          <div>
            <Label htmlFor="bank-transfer" className="font-medium">
              Direct bank transfer
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference. Your order will not be shipped until the funds have cleared in
              our account.
            </p>
          </div>
        </div>

        {/* Check Payments */}
        <div className="flex items-center space-x-4">
          <RadioGroupItem id="check-payments" value="check-payments" />
          <Label htmlFor="check-payments" className="font-medium">
            Check payments
          </Label>
        </div>

        {/* Cash on Delivery */}
        <div className="flex items-center space-x-4">
          <RadioGroupItem id="cash-on-delivery" value="cash-on-delivery" />
          <Label htmlFor="cash-on-delivery" className="font-medium">
            Cash on delivery
          </Label>
        </div>
      </RadioGroup>

      {/* Terms and Conditions */}
      <div className="mt-6">
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms">
            I have read and agree to the website{" "}
            <a href="/terms" className="text-blue-600 underline">
              terms and conditions
            </a>{" "}
            <span className="text-red-500">*</span>
          </Label>
        </div>
      </div>

      {/* Place Order Button */}
      <Button type="submit" className="mt-6 w-full bg-blue-500 p-5 hover:bg-blue-600">
        Place Order
      </Button>
    </div>
  </div>
  );
};

export default PaymentInformation;