import { Avatar } from '../Avatar/Avatar'

const navbarStyles = { 
  display: 'flex', 
  justifyContent: 'space-evenly', 
  border: '1px solid #fff', 
  borderRadius: '6px' 
}

export const Navbar = () => {
  return (
    <div style={navbarStyles}>
      <div>
        Navbar
      </div>
      <Avatar />
    </div>
  )
}
