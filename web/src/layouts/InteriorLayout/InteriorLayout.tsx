import Nav from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <div className="grid grid-cols-[355px_1fr]">
      <aside className="px-10">
        <Nav />
      </aside>
      <main className="my-10 border-l-2 border-black">{children}</main>
    </div>
  )
}

export default InteriorLayout
