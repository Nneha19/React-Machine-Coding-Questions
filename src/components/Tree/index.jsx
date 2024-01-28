import MenuList from './menu-list'




export default function Tree({menus=[]}){
    return( <div className='tree-view-container' 
    style={{
            padding: '20px',
           minHeight: '100vh',
            width: '350px',
            background: '#00476e',
            color: 'aliceblue',
            fontSize: 'larger',
        }
    }>
        <MenuList list={menus}/>
    </div>)
}