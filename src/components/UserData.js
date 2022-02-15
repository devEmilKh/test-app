function UserData(props) {

    const { gallery } = props
    const baseUrl = 'https://test-front.framework.team';

    if (!gallery || gallery.length === 0) return <p>Нет данных</p>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>authorId</th>
                        <th>created</th>
                        <th>id</th>
                        <th>imageUrl</th>
                        <th>locationId</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gallery.map((picture) =>
                            <tr key={picture.id}>
                                <td>{picture.authorId}</td>
                                <td>{picture.created}</td>
                                <td>{picture.id}</td>
                                <td>
                                    <img src = {baseUrl}{picture.imageUrl}/>
                                </td>
                                <td>{picture.locationId}</td>
                                <td>{picture.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default UserData