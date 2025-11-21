"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function VitrineComments() {
  const [newCommentsList, setNewCommentsList] = useState<CommentType[]>([]);
  const [test, setTest] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if(test < comments.length) {
      timeoutId = setTimeout(() => {
        setNewCommentsList(prev => [...prev, comments[test]]);
        setTest(test + 1);
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [test]);

  return (
    <div className="relative w-full h-[440px] flex items-start justify-center px-4 py-2 rounded-xl">
      <motion.div
        className="w-full h-full flex flex-col items-start overflow-hidden p-0 relative"
        style={{
          borderRadius: 20,
          /*height: activeTransaction ? 300 : 408,*/
        }}
        layoutId="container"
      >
        {/*<ScrollShadow className="w-full h-[440px]" orientation={"vertical"}>*/}
          <div className="flex flex-col w-full gap-y-2 items-center justify-center py-2">
            {newCommentsList.map((comment, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between w-full gap-2 py-1.5 px-4 bg-[#00000080] backdrop-blur-lg rounded-2xl"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
              >
                <motion.div
                  className="w-full flex items-center justify-between gap-2"
                  key={`subinfos-${comment.author.username}`}
                  layoutId={`subinfos-${comment.author.username}`}
                >
                  <div className="w-full space-y-1">
                      <h3 className="text-sm font-bold">{comment.author.username}</h3>
                      <p className="break-words text-white">{comment.content}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        {/*</ScrollShadow>*/}
      </motion.div>
    </div>
  );
}

type CommentType = {
    author: {
        username: string,
        profile_picture: string
    };
    content: string;
    created_at: string;
};

const comments: CommentType[] = [
  {
      author: {
          username: "dj_shadow",
          profile_picture: "https://github.com/shadcn.png",
      },
      content: "Ce beat est incroyable 🔥 je l’ai ajouté direct à ma playlist.",
      created_at: "2025-09-01T08:15:00Z",
  },
  {
      author: {
          username: "rockfan92",
          profile_picture: "https://github.com/mrzachnugent.png",
      },
      content: "Ça me rappelle un vieux riff de Nirvana 🤘",
      created_at: "2025-09-01T09:00:00Z",
  },
  {
      author: {
          username: "trapqueen",
          profile_picture: "https://github.com/leerob.png",
      },
      content: "Le drop à 1:32 m’a tuée 😍",
      created_at: "2025-09-01T09:12:00Z",
  },
    {
        author: {
            username: "dazfef322",
            profile_picture: "https://github.com/shadcn.png",
        },
        content: "Ce beat est incroyable 🔥 je l’ai ajouté direct à ma playlist.",
        created_at: "2025-09-01T08:15:00Z",
    },
    {
        author: {
            username: "reded23",
            profile_picture: "https://github.com/mrzachnugent.png",
        },
        content: "Ça me rappelle un vieux riff de Nirvana 🤘",
        created_at: "2025-09-01T09:00:00Z",
    },
    {
        author: {
            username: "REVERSS",
            profile_picture: "https://github.com/leerob.png",
        },
        content: "Le drop à 1:32 m’a tuée 😍",
        created_at: "2025-09-01T09:12:00Z",
    }
];

