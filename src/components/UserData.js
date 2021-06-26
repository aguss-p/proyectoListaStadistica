import React from 'react'
import { useRecoilValue } from 'recoil'
import { userDataSelector } from '../selectors'


const UserData = () => {
    const user = useRecoilValue(userDataSelector)
    return(
    <hi>
      {user.name}
    </hi>
    )
  }

export default UserData