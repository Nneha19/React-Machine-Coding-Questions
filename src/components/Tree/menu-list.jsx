import MenuItem from "./menu-item"


export default function MenuList({list=[]}){
 
    return <ul className="menu-list-container"
    style={{
       alignItems: 'center',
       gap: '20px',
      cursor: 'pointer',
      listStyle: 'none',

    }}>
        {
            list && list.length?
            list.map(listItem=> <MenuItem item={listItem}/>)
            :null
         
        }
    </ul>
}