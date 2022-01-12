import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

const Table = ({ headers, data, handleIsRated }) => {
    return (
        <div>
            <table className="table">
                <TableHeader headers={headers} />
                <tbody>
                    <TableBody data={data} handleIsRated={handleIsRated} />
                </tbody>
            </table>
        </div>
    );
};

export default Table;
