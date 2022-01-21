import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { RiVideoAddFill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AvatarBlock16 from 'components/AvatarBlock16'
import { useProvideUser } from 'hooks/useUser'
import IconButton from './components/IconButton'

const Header = () => {
    const { userInfo } = useProvideUser()
    return (
        <div className="p-2 flex flex-row items-center space-x-2 hidden lg:flex">
            <Link to="/">
                <AvatarBlock16 src={userInfo?.avatar} className="w-10 h-10" />
            </Link>
            <span className="flex-grow font-bold text-2xl">Chats</span>
            <IconButton component={<FiMoreHorizontal size="20" />} />
            <IconButton component={<RiVideoAddFill size="20" />} />
            <IconButton component={<AiFillEdit size="20" />} />
        </div>
    )
}

export default Header
