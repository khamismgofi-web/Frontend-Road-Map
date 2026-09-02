// src/components/Dashboard.tsx
import { useState } from "react";
import { useLanguage } from "../components/LanguageContext";

const MOCK_QUESTIONS = [
  {
    id: "1",
    author: "Mushi Dopa",
    question: "Je, ni taratibu gani za kufuata kuwasilisha ripoti ya dharura?",
    timeAgo: "2 hours ago",
    replies: [
      { id: "r1", user: "John", avatar: "https://i.pravatar.cc/150?u=a" },
      { id: "r2", user: "Asha", avatar: "https://i.pravatar.cc/150?u=b" },
      { id: "r3", user: "Dev", avatar: "https://i.pravatar.cc/150?u=c" },
      { id: "r4", user: "Kevo", avatar: "https://i.pravatar.cc/150?u=d" },
      { id: "r5", user: "Mary", avatar: "https://i.pravatar.cc/150?u=e" },
    ],
  },
  {
    id: "2",
    author: "Baraka_tz",
    question: "Where can I view active updates regarding safety in regional areas?",
    timeAgo: "5 hours ago",
    replies: [
      { id: "r6", user: "Sarah", avatar: "https://i.pravatar.cc/150?u=f" },
      { id: "r7", user: "Alex", avatar: "https://i.pravatar.cc/150?u=g" },
    ],
  },
];

const Dashboard = () => {
  const { language, t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleReportClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
    } else {
      alert("Opening Report Editor...");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="max-w-4xl mx-auto w-full px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
        </div>

        {/* Section Header with Right-Aligned Button */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            {/* Title Block */}
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
                {language === "sw" ? "Maswali na Majadiliano" : "Community Discussions"}
              </h2>
              <span className="text-xl font-extrabold tracking-tight text-gray-400/60 leading-tight">
                {language === "sw" ? "Community Discussions" : "Maswali na Majadiliano"}
              </span>
            </div>


            {/* + Andika / + Chat Button on the Right */}
            <button
              onClick={handleReportClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              + {t("writeChat")}
            </button>
          </div>

          {/* Discussion List */}
          {MOCK_QUESTIONS.map((q) => {
            const visibleAvatars = q.replies.slice(0, 3);
            const extraRepliesCount = q.replies.length - 3;

            return (
              <div
                key={q.id}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{q.author}</span>
                  <span className="text-xs text-gray-400">{q.timeAgo}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {q.question}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <span className="text-xs font-medium text-gray-500">
                    Replies ({q.replies.length})
                  </span>

                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 overflow-hidden">
                      {visibleAvatars.map((r) => (
                        <img
                          key={r.id}
                          src={r.avatar}
                          alt={r.user}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        />
                      ))}
                    </div>

                    {extraRepliesCount > 0 && (
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                        +{extraRepliesCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full space-y-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">Login Required</h3>
            <p className="text-sm text-gray-600">
              You must log in or register to submit confidential complaints, suggestions, or incident reports to the editor.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowAuthModal(false)}
                className="w-1/2 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setShowAuthModal(false);
                }}
                className="w-1/2 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600"
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Statistics */}
      <footer id="statistics" className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-4">
            {t("statsTitle")}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-orange-400 uppercase">
                {t("activePending")}
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">37</p>
            </div>

            <div className="p-4 border border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-orange-400 uppercase">
                {t("resolved")}
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">152</p>
            </div>

            <div className="p-4 border border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-orange-400 uppercase">
                {t("anonymous")}
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">68%</p>
            </div>

            <div className="p-4 border border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-orange-400 uppercase">
                {t("totalReports")}
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">1,284</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;