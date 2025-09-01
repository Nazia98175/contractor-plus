import AnimatedNumber from "../AnimatedNumber";
import { StateTableDataRow } from "./processStateTableData";
import { DataSource } from "@/types";

interface StateTableRowProps {
  row: StateTableDataRow;
  dataSources: DataSource[];
}

const StateTableRow = ({ row, dataSources }: StateTableRowProps) => {
  return (
    <tr className="hover:bg-muted/20 h-16 transition-colors">
      <td className="font-medium">{row.industryName}</td>
      <td className="text-center">
        {row.stateName === "Region" ? (
          row.regionName
        ) : (
          <>
            {row.stateName} {row.stateAbbr ? `(${row.stateAbbr})` : ""}
          </>
        )}
      </td>
      {dataSources.includes("Contractor+") && (
        <td className="text-center">
          {row.contractorPlusRate != null ? (
            <AnimatedNumber
              value={row.contractorPlusRate}
              prefix="$"
              suffix={`/${row.uom}`}
              decimals={2}
            />
          ) : (
            "N/A"
          )}
        </td>
      )}
      {dataSources.includes("BLS.gov") && (
        <td className="text-center">
          {row.blsRate != null ? (
            <AnimatedNumber
              value={row.blsRate}
              prefix="$"
              suffix={`/${row.uom}`}
              decimals={2}
            />
          ) : (
            "N/A"
          )}
        </td>
      )}
      {dataSources.includes("Average") && (
        <td className="text-center">
          {row.averageRate != null ? (
            <AnimatedNumber
              value={row.averageRate}
              prefix="$"
              suffix={`/${row.uom}`}
              decimals={2}
            />
          ) : (
            "N/A"
          )}
        </td>
      )}
      <td className="text-center">
        {row.contractorPlusRate != null ? (
          <AnimatedNumber
            value={row.contractorPlusRate * 0.35}
            prefix="$"
            suffix={`/${row.uom}`}
            decimals={2}
          />
        ) : (
          "N/A"
        )}
      </td>
      <td className="text-aliceBlue text-center">{row.period}</td>
    </tr>
  );
};

export default StateTableRow;
