const MAIN_API = "https://opslinkservers-backend.onrender.com";

async function authGuard() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("/auth/login/");
    return;
  }

  try {
    const res = await fetch(`${MAIN_API}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json().catch(() => null);

    // token invalid / expired
    if (!res.ok) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.replace("/auth/login/");
      return;
    }

    // banned user → force banned page
    if (data?.ban?.isBanned) {
      localStorage.setItem("banData", JSON.stringify(data.ban));
      window.location.replace("/banned");
      return;
    }

    // optional: keep fresh user in localStorage
    localStorage.setItem("user", JSON.stringify(data));

  } catch (err) {
    console.error("Auth guard failed:", err);
    window.location.replace("/auth/login/");
  }
}

// run immediately on page load
authGuard();
