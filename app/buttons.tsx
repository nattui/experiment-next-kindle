import { buttonStyles } from "@/components/ui/button"
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components"

interface ButtonsProps {
  isAuthenticated?: boolean
}

export default function Buttons({ isAuthenticated }: ButtonsProps) {
  return (
    <div className="flex w-full max-w-384 flex-col gap-y-16">
      {!isAuthenticated && (
        <>
          <RegisterLink
            className={`${buttonStyles.base} ${buttonStyles.size["medium"]} ${buttonStyles.variant["primary"]}`}
          >
            Sign up
          </RegisterLink>
          <LoginLink
            authUrlParams={{
              connection_id:
                process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORD ?? "",
              login_hint: "test@gmail.com",
            }}
            className={`${buttonStyles.base} ${buttonStyles.size["medium"]} ${buttonStyles.variant["primary"]}`}
          >
            Sign in with email
          </LoginLink>
        </>
      )}

      {isAuthenticated && (
        <LogoutLink
          className={`${buttonStyles.base} ${buttonStyles.size["medium"]} ${buttonStyles.variant["primary"]}`}
        >
          Sign out
        </LogoutLink>
      )}
    </div>
  )
}
