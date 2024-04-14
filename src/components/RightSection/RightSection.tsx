
const rightSectionStyles = { 
  width: '80%', 
  height: '95vh', 
  display: 'flex', 
  justifyContent: 'center', 
  border: '1px solid #fff', 
  borderRadius: '6px' 
}

export const RightSection = ({ children }) => {
  return (
    <div style={rightSectionStyles}>
      {children}
    </div>
  )
}
