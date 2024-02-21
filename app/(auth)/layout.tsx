const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <section className="relative w-full h-screen bg-blue-500 overflow-hidden">
      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
      <div className="h-full flex items-center justify-center z-50">
        {children}
      </div>
    </section>
   );
}
 
export default AuthLayout;