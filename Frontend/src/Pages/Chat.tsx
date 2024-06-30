import { ChatLogo } from "../components/ChatLogo";
import { Conversations } from "../components/Conversations";
import { InputMessage } from "../components/InputMessage";
import { Profile } from "../components/Profile";
import { ReceiveMessage } from "../components/ReceiveMessage";
import { SendMessage } from "../components/SendMessage";

export function Chat() {
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <ChatLogo></ChatLogo>
            <Profile></Profile>
            <Conversations></Conversations>
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    <ReceiveMessage></ReceiveMessage>
                    <ReceiveMessage></ReceiveMessage>
                    <SendMessage></SendMessage>
                    <SendMessage></SendMessage>
                    <ReceiveMessage></ReceiveMessage>
                    <SendMessage></SendMessage>
                    <ReceiveMessage></ReceiveMessage>
                  </div>
                </div>
              </div>

              <InputMessage></InputMessage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
