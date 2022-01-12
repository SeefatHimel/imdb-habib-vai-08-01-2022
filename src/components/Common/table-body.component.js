import Rating from "../rating.component";

const TableBody = ({ data, handleIsRated, columns }) => {
    console.log(columns);
    return (
        <tbody>
            {
                data.map((row,index) => {
                    return (
                        <tr key={index}>
                            {
                                columns.map(column => {
                                    return column.content(row, column.path);
                                })
                            }
                        </tr>
                    )
                })
            }                  

            {/* {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{item.rank}</th>

                        <td>{item.title}</td>
                        <td>{item.imdbRating}</td>
                        <td>
                            <Rating
                                isRated={item.yourRating}
                                handleIsRated={handleIsRated}
                                // rank={this.rankAndTitle}
                            />
                        </td>
                    </tr>
                );
            })} */}
        </tbody>
    );
};

export default TableBody;
