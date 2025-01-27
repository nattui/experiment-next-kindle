import Buttons from "@/app/buttons"
import Button from "@/components/ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function RootPage() {
  const { isAuthenticated: getIsAuthenticated } = getKindeServerSession()
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="ghost">Click me</Button>

      <Buttons isAuthenticated={isAuthenticated} />

      {isAuthenticated ? (
        <p>User is authenticated</p>
      ) : (
        <p>User is not authenticated</p>
      )}
    </div>
  )
}
