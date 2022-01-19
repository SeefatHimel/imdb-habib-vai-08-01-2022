import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

const Table = ({ items, handleIsRated, columns, sortColumn, onSort }) => {
    return (
        <div>
            <table className="table">
                <TableHeader columns={columns} 
                    sortColumn={sortColumn}
                    onSort={onSort}/>
                <TableBody
                    items={items}
                    columns={columns}
                    handleIsRated={handleIsRated}
                />
            </table>
        </div>
    );
};

export default Table;
