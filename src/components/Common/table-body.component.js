import Rating from "../rating.component";

const TableBody = ({ data ,handleIsRated }) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{item.id}</th>

                        <td>{item.rankAndTitle}</td>
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
            })}
        </>
    );
};

export default TableBody;
