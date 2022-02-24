/* eslint-disable jsx-a11y/alt-text */
function UserData(props) {

    const { gallery } = props
    const baseUrl = 'https://test-front.framework.team';

    if (!gallery || gallery.length === 0) return <p>Нет данных</p>

    return (
            <div className="item">
                    {
                        gallery.map((picture) =>
                            <div key={picture.id}>
                                
                                    <img width="360px" height="275px" src = {baseUrl + picture.imageUrl} />
                                    <ul>{picture.name}</ul>
                                
                            </div>
                        )
                    }
            </div>    
    )
}

export default UserData