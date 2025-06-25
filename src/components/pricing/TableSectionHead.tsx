import React from "react";

const TableSectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <tr>
    <td
      colSpan={4}
      className="text-winterWay bg-superSilver border-secondary border-b px-3.5 py-3 text-start text-base leading-[115%] font-bold"
    >
      {title}
    </td>
  </tr>
);

export default TableSectionTitle;
