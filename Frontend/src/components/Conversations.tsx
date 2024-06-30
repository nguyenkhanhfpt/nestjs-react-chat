import { ContactUser } from "./ContactUser";

export function Conversations() {
  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Active Conversations</span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-96 overflow-y-auto">
          <ContactUser></ContactUser>
          <ContactUser></ContactUser>
          <ContactUser></ContactUser>
        </div>
      </div>
    </>
  );
}
