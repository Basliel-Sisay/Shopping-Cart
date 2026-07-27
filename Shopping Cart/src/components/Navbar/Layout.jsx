function Layout({getTotalCartItems}){
    return (
      <div>
        <Navbar totalItems={getTotalCartItems()} />
        <Outlet />
      </div>
    );
}
export default Layout