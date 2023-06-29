import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import React, { useState, useEffect } from "react";
import axios from "axios";


function Contact() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://cities-qd9i.onrender.com/agents"
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "First Name",
                accessor: "first_name",
            },
            {
                Header: "Last Name",
                accessor: "last_name",
            },
            {
                Header: "State",
                accessor: "state",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "City",
                accessor: "city",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex, pageSize },
        prepareRow,
        setGlobalFilter,
    } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 20 } }, useGlobalFilter, useSortBy, usePagination);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setGlobalFilter(value);
    };

    return (
        <div className="roomcontact ">

            <div className="roomcontact ">
                <hr className="style1" />
                <h3 className="styleh3">Prices Trend by Cities in Texas State. </h3>
                <hr className="style1" />

            </div>

            <div>
                <label htmlFor="search">Search: </label>
                <input
                className="searchText "
                    id="search"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "sorted-desc"
                                                : "sorted-asc"
                                            : ""
                                    }
                                >
                                    {column.render("Header")}
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <span>&darr;</span>
                                        ) : (
                                            <span>&uarr;</span>
                                        )
                                    ) : null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Contact;





















