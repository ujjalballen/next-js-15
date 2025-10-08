export default function DashboardLayout({
  children,
  analitic,
  timer,
  song,
  signin,
}) {
  let isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{analitic}</div>
          <div>{timer}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{song}</div>
      </div>
    </div>
  ): signin
}
