const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {_id,CRMID, name, email,batch,contact} = curUser;
                    

                    return (
                        <div className="table">
                        <tr key={_id}>
                            <td>{CRMID}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{batch}</td>
                            <td>{contact}</td>
                        </tr>
                        </div>
                    )
                })

            }
        </>
    )
}
export default UserData;