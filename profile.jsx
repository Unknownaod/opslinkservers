import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const url = userId ? `/api/profile/${userId}` : '/api/profile';
        const res = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="text-xl font-semibold tracking-wide">OpsLink Servers</div>
        <div className="flex items-center gap-8 text-sm" id="navLinks">
          <a href="index.html" className="hover:opacity-80">Home</a>
          <a href="browse.html" className="hover:opacity-80">Browse</a>
          <a href="submit.html" className="hover:opacity-80">Submit</a>
          <a href="login.html" id="loginBtn" className="rounded-full border border-white px-4 py-2 hover:bg-white/10">Login</a>
        </div>
      </nav>

      {/* PROFILE SECTION */}
      <section className="px-10 py-10 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Profile</h1>

        {loading && <p className="text-zinc-400">Loading profile...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {profile && (
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded border border-zinc-700 bg-zinc-900/50">
              <h2 className="text-2xl font-semibold mb-2">{profile.discordUsername}</h2>
              {profile.discordTag && (
                <p className="text-zinc-400 mb-1">Discord Tag: {profile.discordTag}</p>
              )}
              <p className="text-zinc-400 mb-1">Role: 
                <span className={`ml-2 font-semibold ${
                  profile.role === 'admin' ? 'text-red-500' : 'text-blue-400'
                }`}>{profile.role}</span>
              </p>
              {profile.email && <p className="text-zinc-400">Email: {profile.email}</p>}
              {profile.isVerified !== undefined && (
                <p className="text-zinc-400">
                  Verified: {profile.isVerified ? 'Yes' : 'No'}
                </p>
              )}
            </div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 border-t border-zinc-800 text-sm text-zinc-400 flex justify-between">
        <span>© 2026 OpsLink Servers</span>
        <span>Not affiliated with Discord</span>
      </footer>
    </div>
  );
};

export default Profile;
