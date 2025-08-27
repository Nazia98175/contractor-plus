import { ZipCodeDataTableProps } from "@/types";
import ZipCodeView from "./ZipCodeView";

const DataTable = (props: ZipCodeDataTableProps) => {
  // Check if we're using zipcode mode
  if (props.viewType === "zipcode") {
    return (
      <ZipCodeView
        industries={props.industries}
        filters={props.filters}
        className={props.className}
        viewType="zipcode"
        laborRates={props.laborRates}
        searchedZipCode={props.searchedZipCode}
      />
    );
  } else {
    return (
      <StateView
        industries={props.industries}
        filters={props.filters}
        className={props.className}
        viewType="state"
        states={props.states}
        laborRates={props.laborRates}
      />
    );
  }
};

export default DataTable;
