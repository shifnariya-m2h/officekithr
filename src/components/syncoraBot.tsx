// // utils/syncoraBot.ts
// export interface SyncoraWidget {
//   open?: () => void;
//   show?: () => void;
//   maximize?: () => void;
//   toggle?: () => void;
//   showForm?: () => void;
//   openDemo?: () => void;
//   [key: string]: unknown;
// }

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

// let botLoaded = false;
// let isOpening = false;

// /**
//  * Try opening Syncora chatbot with multiple strategies
//  */
// export const tryOpenChatbotWithForm = (): boolean => {
//   const globalObjects = [
//     window.SyncoraWidget,
//     window.Syncora,
//     window.syncoraAI,
//     window.chatbot,
//     window.widget,
//   ];

//   let opened = false;

//   globalObjects.forEach((obj) => {
//     if (obj && typeof obj === 'object') {
//       const demoMethods = ['openDemo', 'showForm', 'scheduleDemo'];
//       demoMethods.forEach((method) => {
//         if (!opened && typeof obj[method] === 'function') {
//           try {
//             (obj[method] as Function)();
//             opened = true;
//           } catch {}
//         }
//       });

//       const openMethods = ['open', 'show', 'maximize', 'toggle'];
//       openMethods.forEach((method) => {
//         if (!opened && typeof obj[method] === 'function') {
//           try {
//             (obj[method] as Function)();
//             opened = true;
//           } catch {}
//         }
//       });
//     }
//   });

//   if (!opened) {
//     const selectors = [
//       '[data-syncora-button]',
//       '[data-syncora-demo]',
//       '[class*="syncora"]',
//       '[id*="syncora"]',
//       '.chat-bubble',
//       '.chatbot-button',
//       '.demo-button',
//     ];
//     selectors.forEach((selector) => {
//       document.querySelectorAll(selector).forEach((el) => {
//         if (el instanceof HTMLElement) {
//           el.click();
//           opened = true;
//         }
//       });
//     });
//   }

//   // PostMessage for iframe
// //   document.querySelectorAll('iframe[src*="syncora"]').forEach((iframe) => {
// //     try {
// //       (iframe as HTMLIFrameElement).contentWindow?.postMessage({ type: 'openDemo' }, '*');
// //       opened = true;
// //     } catch {}
// //   });


//   return opened;
// };

// /**
//  * Load Syncora chatbot script if not loaded, then open it
//  */
// export const loadSyncoraBot = async (): Promise<void> => {
//   if (isOpening) return;
//   isOpening = true;

//   if (!botLoaded) {
//     const script = document.createElement('script');
//     script.src = 'https://www.syncoraai.com/api/widget/PUB_d9f73a87-a96f-4549-949e-c6acd8ff21b2';
//     script.defer = true;

//     script.onload = () => {
//       botLoaded = true;

//       // Try opening immediately and with delay
//       tryOpenChatbotWithForm();
//       setTimeout(tryOpenChatbotWithForm, 500);
//       setTimeout(tryOpenChatbotWithForm, 1000);
//       isOpening = false;
//     };

//     script.onerror = () => {
//       isOpening = false;
//     };

//     document.body.appendChild(script);

//     // Observe DOM changes for widget
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         mutation.addedNodes.forEach((node) => {
//           if (
//             node instanceof Element &&
//             (node.matches('[class*="syncora"]') ||
//               node.matches('[id*="syncora"]') ||
//               node.matches('iframe[src*="syncora"]'))
//           ) {
//             setTimeout(tryOpenChatbotWithForm, 1000);
//           }
//         });
//       });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
//     setTimeout(() => observer.disconnect(), 10000);
//   } else {
//     tryOpenChatbotWithForm();
//     isOpening = false;
//   }
// };

/** Legacy Syncora widget — disabled; AskMyBot is loaded via AskMyBotLoader. */
export async function loadSyncoraBot(): Promise<void> {
  /* no-op */
}
