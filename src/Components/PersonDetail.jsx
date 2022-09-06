import React, { useState } from 'react';


function PersonDetail() {
    const [person, setPerson] = useState({
        userName: "rocky",
        age: 22,
    });
    return <div>{person.userName.filter()}</div>

}

export default PersonDetail;
