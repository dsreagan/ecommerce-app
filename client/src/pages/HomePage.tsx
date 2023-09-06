import useLamaStore from "../store"

export default function HomePage() {
  const user = useLamaStore((s) => s.user)


  return <div>{user?.id}</div>
}
