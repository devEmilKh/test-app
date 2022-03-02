function UserData(props) {

    const { gallery } = props
    const baseUrl = 'https://test-front.framework.team';

    if (!gallery || gallery.length === 0) return <p className="text">Нет данных</p>

    return (
            <div className="card">
                    {
                        gallery.map((picture) =>
                            <div key={picture.id}>
                                
                                    <img src = {baseUrl + picture.imageUrl} alt="card"/>
                                    <ul>{picture.name}</ul>
                                
                            </div>
                        )
                    }
            </div>    
    )
}

export default UserData