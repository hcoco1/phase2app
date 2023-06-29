import { useTable, useSortBy } from "react-table";
import { useSticky } from "react-table-sticky";
import React, { useState, useEffect } from "react";


function Contact({ properties }) {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  console.log(properties)

  useEffect(() => {
    setData(properties);
    setSearchResults(properties);
    setIsLoading(false);
  }, [properties]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        sortable: true,
      },
      {
        Header: "Operation",
        accessor: "operation_type",
        sortable: true,
      },
      {
        Header: "Property",
        accessor: "property_type",
        sortable: true,
      },
      {
        Header: "Price",
        accessor: "listing_price",
        sortable: true,
      },
      {
        Header: "State",
        accessor: "state",
        sortable: true,
      },
      {
        Header: "City",
        accessor: "city",
        sortable: true,
      },
      {
        Header: "Square Feet",
        accessor: "square_feet",
        sortable: true,
      },
    ],
    []
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const filteredData = properties.filter((row) => {
      return (
        row.id?.toString().toLowerCase().includes(value.toLowerCase()) ||
        row.operation_type?.toLowerCase().includes(value.toLowerCase()) ||
        row.property_type?.toLowerCase().includes(value.toLowerCase()) ||
        row.listing_price?.toString().toLowerCase().includes(value.toLowerCase()) ||
        row.state?.toLowerCase().includes(value.toLowerCase()) ||
        row.city?.toLowerCase().includes(value.toLowerCase()) ||
        row.square_feet?.toString().toLowerCase().includes(value.toLowerCase())
      );
    });
    setSearchResults(filteredData);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: searchResults }, useSortBy, useSticky);
  

  return (
    <div className="container" style={{ maxHeight: "1000px", overflowY: "auto" }}>
      <hr className="style1" />
      <h2 className="filterFormh2">
        <strong>Search by typing something or Sort by clicking on the headings:</strong>
      </h2>
      <hr className="style1" />
      <input
        type="text"
        placeholder="Search by typing something..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <table {...getTableProps()} className="striped-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="sticky">
  {headerGroup.headers.map((column) => (
    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
      {column.render("Header")}
      <span>
        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
      </span>
    </th>
  ))}
</tr>

          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;











