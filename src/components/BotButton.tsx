// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// const BotButton = () => {
//   const [botLoaded, setBotLoaded] = useState(false);

//   const handleLoadBot = () => {
//     if (!botLoaded) {
//       const script = document.createElement("script");
//       script.src = "https://www.syncoraai.com/api/widget/PUB_d9f73a87-a96f-4549-949e-c6acd8ff21b2";
//       script.defer = true;
//       document.body.appendChild(script);
//       setBotLoaded(true);
//     }
//   };

//   return (
//     <Button
//       onClick={handleLoadBot}
//       className="fixed bottom-6 right-6 z-50 rounded-full p-4 bg-blue-600 text-white"
//     >
//       💬 Chat with us
//     </Button>
//   );
// };

// export default BotButton;
