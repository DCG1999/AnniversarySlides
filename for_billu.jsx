import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Anniversary() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "My Billu 🤍",
      content: `Two years.
Not just days passing —
but hearts learning each other.
And somehow…
it still feels like the beginning of forever.`
    },
    {
      title: "Us",
      content: `We didn’t happen overnight.
We unfolded.
Layer by layer.
Conversation by conversation.
Until one day,
you weren’t just part of my life —
you were my safe place.`
    },
    {
      title: "Distance",
      content: `Miles tried to test us.
Screens tried to replace touch.
But distance never stood a chance.
Because what we built
was deeper than geography.`
    },
    {
      title: "What I Love",
      content: `I love the softness in your voice.
The strength behind your silence.
The way you care without asking to be seen.
The way you make my chaos feel calm.
The way loving you feels… certain.`
    },
    {
      title: "Through Everything",
      content: `We’ve had doubts.
We’ve had overthinking.
We’ve had days that felt heavy.

There were moments when my mind was loud
and my days felt darker than I admitted.
And somehow,
you became the quiet light in all of it.

Not by fixing me.
Not by forcing strength.
But by sitting with me.
Understanding me.
Being my comfort when I didn’t know how to ask for it.

And we never stopped choosing each other.
That’s what makes this real.`
    },
    {
      title: "A Poem For My Billu",
      content: `If love had a quiet sound,
it would breathe like you.
Soft.
Steady.
Unshaken.

If home had a heartbeat,
it would echo your name in mine.

And if fate asked me again,
"Do you want this girl?"
In every lifetime,
in every universe,
I would still say yes.`
    },
    {
      title: "Always Yours 🤍",
      content: `Not with loud promises.
Not with dramatic vows.
But with something stronger —
consistency.

I am here.
I am choosing you.
And I will keep choosing us.

And before anything else,
before forever,
before every lifetime —

I love you.
So much.

— Darshan`
    },
    {
      title: "",
      content: `See you in our forever.`
    }
  ];

  const nextSlide = () => {
    if (slide < slides.length - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-purple-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating blurred background circles */}
      <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>

      <div className="max-w-3xl w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/60 shadow-2xl rounded-3xl p-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
              {slides[slide].title}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
              {slides[slide].content}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={prevSlide}
            className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition"
          >
            Back
          </button>

          <div className="text-sm text-gray-700 opacity-70">
            {slide + 1} / {slides.length}
          </div>

          <button
            onClick={nextSlide}
            className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
