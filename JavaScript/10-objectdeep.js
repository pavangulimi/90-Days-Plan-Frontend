let amazonMobileProperties={
  "marketplaceId": "A21TJRUUN4KGV",
  "language": "en_IN",
  "baseAsin": "B0FYGBSKFB",
  "productPrice": 74999.0,
  "currency": "INR",
  "currencySymbol": "₹",
  "sellerId": "AQUYM0O99MFUT",
  "isPrimeMember": false,
  "customerLoggedIn": false,
  "exchangeOffer": {
    "available": true,
    "maximumDiscount": 36650.0
  },
  "warrantyPlan": {
    "asin": "B0DJPJHBR3",
    "title": "OneAssist 1 Year Extended Warranty Plan for Mobile Between INR 70001-100000",
    "provider": "One Assist",
    "rating": 3.7,
    "reviewCount": 58,
    "price": 3199.0
  },
  "product": {
    "brand": "iQOO",
    "price": 74999.0,
    "asin": "B0FYGBSKFB",
    "category": "mobile"
  }
}

amazonMobileProperties.currency="USD";
console.log(amazonMobileProperties);

//shallow copy
//Shallow copy creates a new object but does not create copies of nested objects. Instead, it references the same nested objects in memory. Therefore, changes to nested objects in the copied object will affect the original object and vice versa.
let amazonMobilePropertiesCopy=amazonMobileProperties;
console.log(amazonMobilePropertiesCopy);

amazonMobilePropertiesCopy.currency="INR";
console.log(amazonMobilePropertiesCopy.currency);
console.log(amazonMobileProperties.currency);

if(amazonMobilePropertiesCopy.warrantyPlan.price>3000){
    console.log("Warranty plan is available.");
    console.table(amazonMobilePropertiesCopy.warrantyPlan);
}

if(amazonMobilePropertiesCopy.exchangeOffer.available){
    console.log("Exchange offer is available.");
    console.table(amazonMobilePropertiesCopy.exchangeOffer);
}


const person={
  name:"John",
  age:30,
  address:{
    street:"123 Main St",
    city:"New York",
    state:"NY",
    zipCode:"10001"
  }
}

const deepCopyPerson=structuredClone(person);
const shallowCopyPerson=person;

console.log(deepCopyPerson===person); // false
console.log(deepCopyPerson!==person); // true
console.log(shallowCopyPerson===person); // true


const spread={...person};
console.log(spread===person);