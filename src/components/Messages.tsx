"use  client"

import { useRef, useEffect } from "react"
import { type Message as TMessage } from "ai/react"
import { Message } from "./Message"
import { MessageSquare } from "lucide-react"

interface MessagesProps {
    messages: TMessage[]
}

export const Messages = ({ messages }: MessagesProps) => {
    const endOfMessagesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    return (
        <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
            {messages.length ? (
                messages.map((message, i) => (
                    <Message
                        key={i}
                        content={message.content}
                        isUserMessage={message.role === "user"}
                    />
                ))
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <MessageSquare className="size-8 text-blue-500" />
                    <h3 className="font-bold text-xl text-white">You're all set!</h3>
                    <p className="text-zinc-500">
                        Ask your first question to get started.
                    </p>
                </div>
            )}
            <div ref={endOfMessagesRef} />
        </div>
    )
}
