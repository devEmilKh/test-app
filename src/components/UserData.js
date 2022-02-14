function UserData(props) {

    const { persons } = props

    if (!persons || persons.length === 0) return <p>Нет данных</p>

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
                        persons.map((person) =>
                            <tr key={person.id}>
                                <td>{person.authorId}</td>
                                <td>{person.created}</td>
                                <td>{person.id}</td>
                                <td>{person.imageUrl}</td>
                                <td>{person.locationId}</td>
                                <td>{person.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default UserData