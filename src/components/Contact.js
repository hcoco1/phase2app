import { useTable, useSortBy } from "react-table";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://cities-qd9i.onrender.com/agents"
                );
                setData(response.data);
                setSearchResults(response.data);
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
                sortable: true,
            },
            {
                Header: "First Name",
                accessor: "first_name",
                sortable: true,
            },
            {
                Header: "Last Name",
                accessor: "last_name",
                sortable: true,
            },
            {
                Header: "State",
                accessor: "state",
                sortable: true,
            },
            {
                Header: "Email",
                accessor: "email",
                sortable: true,
            },
            {
                Header: "City",
                accessor: "city",
                sortable: true,
            },
            {
                Header: "Phone",
                accessor: "phone",
                sortable: true,
            },
        ],
        []
    );

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        const filteredData = data.filter((row) => {
            return (
                row.id?.toString().toLowerCase().includes(value.toLowerCase()) ||
                row.first_name?.toLowerCase().includes(value.toLowerCase()) ||
                row.last_name?.toLowerCase().includes(value.toLowerCase()) ||
                row.state?.toLowerCase().includes(value.toLowerCase()) ||
                row.email?.toLowerCase().includes(value.toLowerCase()) ||
                row.city?.toLowerCase().includes(value.toLowerCase()) ||
                row.phone?.toLowerCase().includes(value.toLowerCase())
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
    } = useTable({ columns, data: searchResults }, useSortBy);

    return (
        <div className="container" style={{ maxHeight: "1000px", overflowY: "auto" }}>
            <hr className="style1" />
            <h2 className="filterFormh2"> <strong>Let's find an agent for you!:</strong></h2>
            <hr className="style1" />
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <table {...getTableProps()} className="striped-table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " 🔽"
                                                : " 🔼"
                                            : ""}
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
                            <tr {...row.getRowProps()} className={index % 2 === 0 ? "even-row" : "odd-row"}>
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











