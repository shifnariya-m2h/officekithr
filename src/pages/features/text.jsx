// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// // Extended interface for Syncora AI widget
// interface SyncoraWidget {
//   open?: () => void;
//   show?: () => void;
//   maximize?: () => void;
//   toggle?: () => void;
//   showForm?: () => void;
//   openDemo?: () => void;
//   [key: string]: unknown;
// }

// // Extend Window interface for multiple possible global objects
// declare global {
//   interface Window {
//     SyncoraWidget?: SyncoraWidget;
//     Syncora?: SyncoraWidget;
//     syncoraAI?: SyncoraWidget;
//     chatbot?: SyncoraWidget;
//     widget?: SyncoraWidget;
//     [key: string]: any;
//   }
// }

// const HeroSection = () => {
//   const [botLoaded, setBotLoaded] = useState(false);
//   const [isOpening, setIsOpening] = useState(false);

//   // Enhanced function to try opening the chatbot with form
//   const tryOpenChatbotWithForm = () => {
//     console.log("Attempting to open Syncora AI chatbot with form...");
    
//     // Method 1: Try multiple global objects
//     const globalObjects = [
//       window.SyncoraWidget,
//       window.Syncora,
//       window.syncoraAI,
//       window.chatbot,
//       window.widget
//     ];

//     let opened = false;
    
//     globalObjects.forEach((obj, index) => {
//       if (obj && typeof obj === 'object') {
//         console.log(`Found chatbot object at index ${index}:`, obj);
        
//         // Try demo-specific methods first
//         const demoMethods = ['openDemo', 'showForm', 'scheduleDemo'];
//         demoMethods.forEach(method => {
//           if (typeof obj[method] === 'function') {
//             console.log(`Calling ${method}() for demo form`);
//             try {
//               (obj[method] as Function)();
//               opened = true;
//             } catch (error) {
//               console.warn(`Error calling ${method}:`, error);
//             }
//           }
//         });
        
//         // Try general open methods
//         const openMethods = ['open', 'show', 'maximize', 'toggle'];
//         openMethods.forEach(method => {
//           if (!opened && typeof obj[method] === 'function') {
//             console.log(`Calling ${method}()`);
//             try {
//               (obj[method] as Function)();
//               opened = true;
//             } catch (error) {
//               console.warn(`Error calling ${method}:`, error);
//             }
//           }
//         });
//       }
//     });

//     // Method 2: Try clicking DOM elements
//     if (!opened) {
//       const selectors = [
//         '[data-syncora-button]',
//         '[data-syncora-demo]',
//         '[class*="syncora"]',
//         '[id*="syncora"]',
//         '.chat-bubble',
//         '.chatbot-button',
//         '.demo-button'
//       ];

//       selectors.forEach(selector => {
//         const elements = document.querySelectorAll(selector);
//         elements.forEach(element => {
//           if (element instanceof HTMLElement) {
//             console.log(`Clicking element: ${selector}`);
//             element.click();
//             opened = true;
//           }
//         });
//       });
//     }

//     // Method 3: Send postMessage to iframe for demo form (FIXED TypeScript)
//     const iframes = document.querySelectorAll('iframe[src*="syncora"]');
//     iframes.forEach(iframe => {
//       try {
//         // Cast to HTMLIFrameElement to access contentWindow
//         const iframeElement = iframe as HTMLIFrameElement;
        
//         const messages = [
//           { type: 'openDemo' },
//           { type: 'showForm' },
//           { action: 'scheduleDemo' },
//           { command: 'open', intent: 'demo' }
//         ];
        
//         messages.forEach(message => {
//           iframeElement.contentWindow?.postMessage(message, '*');
//         });
//         opened = true;
//       } catch (error) {
//         console.warn('Error sending postMessage to iframe:', error);
//       }
//     });

//     // Method 4: Dispatch custom events
//     const customEvents = [
//       'openDemo',
//       'scheduleDemo', 
//       'showDemoForm',
//       'syncora:demo',
//       'syncora:open'
//     ];

//     customEvents.forEach(eventName => {
//       window.dispatchEvent(new CustomEvent(eventName, {
//         detail: { 
//           action: 'scheduleDemo',
//           source: 'schedule-button',
//           intent: 'demo-form'
//         }
//       }));
//     });

//     return opened;
//   };

//   // Enhanced loadBot function
//   const loadBot = async () => {
//      setIsOpening(true);

//     if (!botLoaded) {
//       const script = document.createElement("script");
//       script.src = "https://www.syncoraai.com/api/widget/PUB_d9f73a87-a96f-4549-949e-c6acd8ff21b2";
//       script.defer = true;
      
//       script.onload = () => {
//          setBotLoaded(true);
        
//         // Try opening immediately after load
//         setTimeout(() => {
//           tryOpenChatbotWithForm();
//         }, 0);

//         // Try again after more initialization time
//         setTimeout(() => {
//           tryOpenChatbotWithForm();
//         }, 0);

//         // Final attempt
//         setTimeout(() => {
//           tryOpenChatbotWithForm();
//           setIsOpening(false);
//         }, 0);
//       };

//       script.onerror = () => {
//          setIsOpening(false);
//       };

//       document.body.appendChild(script);

//       // Use MutationObserver to detect when widget appears
//       const observer = new MutationObserver((mutations: MutationRecord[]) => {
//         mutations.forEach((mutation) => {
//           mutation.addedNodes.forEach((node) => {
//             if (node.nodeType === Node.ELEMENT_NODE) {
//               const element = node as Element;
              
//               // Check for Syncora widget
//               if (element.matches && (
//                 element.matches('[class*="syncora"]') ||
//                 element.matches('[id*="syncora"]') ||
//                 element.matches('iframe[src*="syncora"]')
//               )) {
//                 console.log('Syncora widget detected in DOM:', element);
//                 setTimeout(() => {
//                   tryOpenChatbotWithForm();
//                 }, 1000);
//               }
//             }
//           });
//         });
//       });

//       observer.observe(document.body, {
//         childList: true,
//         subtree: true
//       });

//       // Stop observing after 10 seconds
//       setTimeout(() => observer.disconnect(), 10000);

//     } else {
//       // Bot already loaded, just open it
//        tryOpenChatbotWithForm();
//       setIsOpening(false);
//     }
//   };


//   return (
//     <section className="relative bg-[url('/hero.svg')] bg-cover bg-center rounded-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
//       <div className="container mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="section-fade-in text-center lg:text-left">
//             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
//               AI Powered HR Built for the
//               <span className="gradient-text"> Future</span>
//             </h1>

//             <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
//               Your journey matters. Our tailored software streamlines operations,
//               supports your team, and fuels growth. Together, let’s build a brighter tomorrow.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               {/* <Link to="/contact"> */}
//               <Button className="btn-cta h-[44px] py-[22px] group w-full sm:w-auto" onClick={loadBot}>
//                 Schedule Demo

//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>

//               {/* </Link> */}
//               <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k">
//                 <Button
//                   variant="outline"
//                   className="btn-cta text-black h-[44px] px-6 group w-full sm:w-auto"
//                 >
//                   <Play className="mr-2 h-4 w-4" />
//                   Watch Overview
//                 </Button>
//               </Link>
//             </div>

//             {/* Trust Indicators */}
//             <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
//               <div className="text-center sm:text-left text-base text-muted-foreground">
//                 <span className="block font-bold text-foreground text-2xl sm:text-3xl">25+</span>
//                 Worldwide countries
//               </div>
//               <div className="text-center sm:text-left text-base text-muted-foreground">
//                 <span className="block font-bold text-foreground text-2xl sm:text-3xl">100K+</span>
//                 Total users
//               </div>
//               <div className="text-center sm:text-left text-base text-muted-foreground">
//                 <span className="block font-bold text-foreground text-2xl sm:text-3xl">20+</span>
//                 Industries covered
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <img
//               className="max-w-full h-auto rounded-3xl"
//               src="/hero-main.png"
//               alt="Hero"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
