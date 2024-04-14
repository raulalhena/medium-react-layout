import { Menu } from './Menu/Menu'
import { Header } from './Header/Header'

const leftSectionStyles = { 
  width: '20%', 
  height: '95vh', 
  display: 'flex', 
  flexDirection: 'column',
  border: '1px solid #fff', 
  borderRadius: '6px' 
}

export const LeftSection = () => {
  return (
    <div style={leftSectionStyles}>
        <Header />
        <Menu />
    </div>
  )
}
