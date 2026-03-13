import Script from "next/script";

export default function LoginPage() {

  return (
    <div>
      <h1 className="text-red">Login</h1>

      <Script
        id="telegram-button"
        src="https://telegram.org/js/telegram-widget.js?23"
        data-telegram-login="testhubcc_bot"
        data-size="large"
        data-auth-url="https://justifiable-vivian-manatoid.ngrok-free.dev/auth/telegram"
        data-request-access="write"
      />
    </div>
  )
}