function UserData(props) {

    const { gallery } = props
    const baseUrl = 'https://test-front.framework.team';

    if (!gallery || gallery.length === 0) return <p>Нет данных</p>

    return (
    <div class="l-wrap">
            <div class="three-col-grid">
                <div className="item">
                    {
                        gallery.map((picture) =>
                            <tr key={picture.id}>
                                <td>
                                    <img width="360px" height="275px" src = {baseUrl + picture.imageUrl} />
                                </td>
                            </tr>
                        )
                    }
                </div>    
            </div>
      </div>
    )
}

export default UserData