import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

const Table = ({ data, handleIsRated, columns }) => {
    return (
        <div>
            <table className="table">
                <TableHeader columns={columns} />
                    <TableBody
                        data={data}
                        columns={columns}
                        handleIsRated={handleIsRated}
                    />
                
            </table>
        </div>
    );
};

export default Table;
