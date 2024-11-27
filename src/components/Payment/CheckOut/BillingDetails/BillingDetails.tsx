
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


const BillingDetails = () => {
  return (
    <div className="max-w-2xl  p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
    <div className=" space-y-7">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className=" space-y-2">
          <Label htmlFor="firstName">
            First name <span className="text-red-500">*</span>
          </Label>
          <Input id="firstName" type="text" placeholder="First name" required />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="lastName">
            Last name <span className="text-red-500">*</span>
          </Label>
          <Input id="lastName" type="text" placeholder="Last name" required />
        </div>
      </div>

      {/* Phone and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className=" space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input id="phone" type="tel" placeholder="Phone" required />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="email">
            Email address <span className="text-red-500">*</span>
          </Label>
          <Input id="email" type="email" placeholder="Email address" required />
        </div>
      </div>

      {/* Country / Region and City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className=" space-y-2">
          <Label htmlFor="country">
            Country / Region <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a country / region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className=" space-y-2">
          <Label htmlFor="city">
            Town / City <span className="text-red-500">*</span>
          </Label>
          <Input id="city" type="text" placeholder="City" required />
        </div>
      </div>

      {/* Street Address and ZIP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className=" space-y-2">
        <Label htmlFor="streetAddress">
          Street address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="streetAddress"
          type="text"
          placeholder="House number and street name"
          required
        />
      </div>
      <div className=" space-y-2">
        <Label htmlFor="zip">
          Postcode / ZIP <span className="text-red-500">*</span>
        </Label>
        <Input id="zip" type="text" placeholder="ZIP Code" required />
      </div>
      </div>
     
     {/* Checkbox Options */}
     <div className="mt-4 space-y-5">
        <div className="flex items-center space-x-2">
          <Checkbox id="createAccount" />
          <Label htmlFor="createAccount">Create an account?</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="shipToDifferent" />
          <Label htmlFor="shipToDifferent">Ship to a different address?</Label>
        </div>
      </div>

      {/* Order Notes */}
      <div className=" space-y-2">
        <Label htmlFor="orderNotes">Order notes (optional)</Label>
        <Textarea
          id="orderNotes"
          placeholder="Notes about your order, e.g., special instructions for delivery."
          className=" h-[150px]"
        />
      </div>

      

     
    </div>
  </div>
  );
};

export default BillingDetails;
