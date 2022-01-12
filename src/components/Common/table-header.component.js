const TableHeader = ({columns}) => {
    return (
        <thead>
            <tr>
                {columns.map((item, index) => {
                    return (
                        <th key={index} scope="col">
                            {item.label}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
