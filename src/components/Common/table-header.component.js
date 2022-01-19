const TableHeader = ({ columns, sortColumn, onSort }) => {
    // sortColumn = { path : id, order : desc/asc }
    const handleSort = ({ path, sorting }) => {
        if (!sorting) return;
        sortColumn.path === path
            ? sortColumn.order === "asc"
                ? onSort({ path, order: "desc" })
                : onSort({ path, order: "asc" })
            : onSort({ path, order: "asc" });
    };

    const getIcon = (path) => {
        if (sortColumn.path === path) {
            if (sortColumn.order === "asc") {
                return <i className="bi bi-sort-down"></i>;
            } else {
                return <i className="bi bi-sort-down-alt"></i>;
            }
        } else return null;
    };

    return (
        <thead>
            <tr>
                {columns.map((col, index) => {
                    return (
                        <th key={index} onClick={() => handleSort(col)}>
                            {col.label}
                            {getIcon(col.path)}
                            {/* {sortColumn.path === col.path ? (
                                sortColumn.order === "asc" ? (
                                    <i className="bi bi-sort-down"></i>
                                ) : (
                                    <i className="bi bi-sort-down-alt"></i>
                                )
                            ) : null} */}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
