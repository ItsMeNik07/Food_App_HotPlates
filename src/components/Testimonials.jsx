import React, { useEffect, useState } from 'react';

function Testimonials() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Top 3 Feedbacks
  const customFeedbacks = [
    {
      rating: 5,
      message: "The burger was absolutely delicious! 🔥🔥 Will order again.",
      image: "https://i.pravatar.cc/150?img=1",
      name: "Ravi Sharma"
    },
    {
      rating: 4,
      message: "Great service and fast delivery!",
      image: "https://i.pravatar.cc/150?img=2",
      name: "Ananya Verma"
    },
    {
      rating: 5,
      message: "Best food app UI I've ever seen. Loved the experience!",
      image: "https://i.pravatar.cc/150?img=3",
      name: "Kunal Mehta"
    }
  ];

  useEffect(() => {
    const stored = localStorage.getItem('feedbacks');
    if (stored) setFeedbacks(JSON.parse(stored));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && message.trim()) {
      const newFeedback = { rating, message };
      const updated = [...feedbacks, newFeedback];
      localStorage.setItem('feedbacks', JSON.stringify(updated));
      setFeedbacks(updated);
      setRating(0);
      setMessage('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="testimonials" className="px-6 py-16 text-black">
      {/* <h2 className="text-2xl font-bold text-center mb-10">What Our Users Say</h2> */}

      {/* Highlighted Feedbacks */}
      <h3 className="md:text-2xl font-semibold mb-6">🎖️ Highlighted Feedbacks</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16 ">
        {customFeedbacks.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-200 shadow-lg rounded-lg p-6 bg-[#f6f4bf] hover:border-1 hover:border-yellow-600"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={item.image}
                alt="user"
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold text-sm text-black">{item.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-sm">{item.message}</p>
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">✍️ Leave Your Feedback</h3>

        {submitted && (
          <div className="text-green-600 text-center mb-2 font-semibold">
            ✅ Thank you for your feedback!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center w-full"
        >
          {/* Stars */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => {
              const starVal = i + 1;
              return (
                <span
                  key={i}
                  className={`text-3xl cursor-pointer ${
                    (hover || rating) >= starVal ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onMouseEnter={() => setHover(starVal)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(starVal)}
                >
                  ★
                </span>
              );
            })}
          </div>

          {/* Textarea */}
          <textarea
            className="w-full p-3 border rounded bg-yellow-50 text-sm resize-none focus:outline-none"
            rows="4"
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          ></textarea>

          <button
            type="submit"
            className="bg-[#fe0100] text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 shadow-sm"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}

export default Testimonials;
