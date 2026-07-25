import { useEffect, useState } from "react";
import FadeIn from "../common/FadeIn";
import {
  FaGithub,
  FaCodeBranch,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";

export default function GitHubStats() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mohammedaasim-dev")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) {
    return (
      <section className="bg-slate-950 text-white py-24 text-center">
        Loading GitHub Stats...
      </section>
    );
  }

  return (
    <FadeIn>
      <section
        id="github-stats"
        className="bg-slate-950 text-white py-24 px-8"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">
            GitHub Statistics
          </h2>

          <p className="text-center text-gray-400 mb-12">
            My GitHub Profile Overview
          </p>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition duration-300 text-center">

              <FaCodeBranch className="text-5xl text-blue-500 mx-auto mb-4" />

              <h1 className="text-5xl font-bold">
                {user.public_repos}
              </h1>

              <p className="text-gray-400 mt-3">
                Public Repositories
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition duration-300 text-center">

              <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />

              <h1 className="text-5xl font-bold">
                {user.followers}
              </h1>

              <p className="text-gray-400 mt-3">
                Followers
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition duration-300 text-center">

              <FaUserFriends className="text-5xl text-blue-500 mx-auto mb-4" />

              <h1 className="text-5xl font-bold">
                {user.following}
              </h1>

              <p className="text-gray-400 mt-3">
                Following
              </p>

            </div>

          </div>

          {/* GitHub Images */}

          <div className="grid lg:grid-cols-2 gap-8 justify-items-center">

            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api?username=mohammedaasim-dev&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
              className="rounded-xl"
            />

            <img
              src={`https://streak-stats.demolab.com?user=${user.login}&theme=tokyonight&hide_border=true`}
              alt="GitHub Streak"
              className="rounded-xl"
            />

          </div>

        </div>
      </section>
    </FadeIn>
  );
}