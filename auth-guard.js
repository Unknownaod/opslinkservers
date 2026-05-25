const MAIN_API = "https://opslinkservers-backend.onrender.com";

async function authGuard() {
  const token = localStorage.getItem("token");

  // No token = do nothing (NO redirects)
  if (!token) return;

  try {
    const res = await fetch(`${MAIN_API}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json().catch(() => null);

    // If request fails or token is invalid, just stop
    // (do NOT redirect users anywhere)
    if (!res.ok || !data) return;

    // BAN ONLY LOGIC
    if (data?.ban?.isBanned) {
      localStorage.setItem("banData", JSON.stringify(data.ban));
      window.location.replace("/banned");
      return;
    }

    // keep user fresh if available
    localStorage.setItem("user", JSON.stringify(data));

  } catch (err) {
    console.error("Auth guard failed:", err);
    // do nothing (no redirects)
  }
}

// run on load
authGuard();
