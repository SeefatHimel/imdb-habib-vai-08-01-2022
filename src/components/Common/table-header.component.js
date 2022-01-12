const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                {props.headers.map((item, index) => {
                    return (
                        <th key={index} scope="col">
                            {item}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
