import { unicodeCurrency } from './formatter';

const searchFields = ['itemName', 'itemDescription', 'category'];

const profileMenuItems = [
  {
    label: 'Settings',
    icon: 'ph:gear-six-duotone',
  },
  {
    label: 'Sign Out',
    icon: 'ph:sign-out-duotone',
  },
];

const tableHead = [
  'Item Name',
  'Category',
  'Options Available',
  'Amount In Stock',
  `Price (${unicodeCurrency()})`,
  `Cost (${unicodeCurrency()})`,
  'Action',
];

const utakPhLogo =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAMAAAAqGX2oAAAALVBMVEVHcEwhqpgkrpwlrpwkrZskrZslrpwirJojrZokrZwkrJsjrZsjrJskrZslrpxdfTXbAAAADnRSTlMAD832knvmQTGvU2oeoJGwNoYAAACwSURBVCiRhZJXAsMgDEMNNsMM3/+4haQNEEb1q4fARgCPlA+GraboEiykjEb5ynKYbJJRekSclkmkmh9nu4aks9+IsPELcd2i7BYQqkDe+yIOwB8CRHj/wlvogY+ARFisqJcGcwYseDwCZdD3N40qcwLtM9Bcu/Ym03Ib6NqHhlWM7avluYZYNh1JY6mSC7WNbW5WsFQlsJTXre2b0Gpz+qnY0a8ZU+/fGfkPAOF3xwfbyhvZ7eAPbAAAAABJRU5ErkJggg==';

export { searchFields, tableHead, utakPhLogo, profileMenuItems };
