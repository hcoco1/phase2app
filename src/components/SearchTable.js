
import { useTable, useSortBy } from "react-table";
import { useSticky } from "react-table-sticky";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SearchTable({ properties }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  //console.log(properties)

  useEffect(() => {
    try {
      setData(properties);
      setSearchResults(properties);
      setError(null);
    } catch (error) {
      setError("Error occurred while setting data");
    }
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
    <Container>
    <Row>
      <Col lg>
      <div className="container" style={{ maxHeight: "1000px", overflowY: "auto" }}>
        <hr className="stylehr" />
        <h3 className="styleh3">
          Search or Sort by clicking on the headings:
        </h3>
        <hr className="stylehr" />
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
      <Footer />
      </Col>
      </Row>
    </Container>


  );
}

export default SearchTable;











