export default function UserDynamicLayout({ children }) {
const user = null;

if(!user){
    throw new Error('User not Found')
}

  return <>
  <div>{children}</div>
  <div>
    This is individual user ID Page
  </div>
  </>;
}
