import Menu from "../Menu"

// render the menu app 

//get menuData from app js and put it into the menu array.
//map the menuData array into the menu. array
const MenuApp = ({ data }) => {
  return (
    <div className="App">
        {data.map((menu, index) => (
        <Menu
          key={index}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </div>
  )
}
export default MenuApp