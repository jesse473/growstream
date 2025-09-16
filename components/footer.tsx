"use client"

import { useEffect, useState } from "react"
import type { JSX } from "react/jsx-runtime"

export default function Footer() {
  const [starElements, setStarElements] = useState<JSX.Element[]>([])

  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText("rHdT63dBn7n3oVV97HSDoYJzv27g4iWp1w").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      },  1000);
    }).catch((err) => {
    })
  }

  return (
    <footer id="footer" className="relative bg-[] text-white py-12 overflow-hidden">
      {/* Star Animation Styles */}
      <style jsx global>{`
        @keyframes starBlink {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 text-[#4a4a4a] md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Brand */}
          <div className="text-center md:text-left">
            {/* <div className="flex items-center justify-center md:justify-start mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-skull-u1esGrkbCqRvOSBLMjcK5rFtFTksws.png"
                alt="SKULL Logo"
                className="h-12 w-12 mr-3"
              />
              <span
                className="text-2xl"
                style={{
                  background:
                    "linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SKULL OF SATOSHI
              </span>
            </div> */}
            <a href="/" className="flex items-start justify-center md:justify-start gap-1">
              <img src="/icon.png" className="h-6" />
              <h1 className="font-semibold text-xl pt-1">GrowStream</h1>
            </a>
            <p className="mt-3 text-sm leading-relaxed">Live Growth, Real Value.</p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="text-left flex items-center flex-col">
            <h3 className="font-semibold text-left text-lg mb-4">Dex</h3>
            <div className="flex gap-2 text-sm text-left">
              <a
                href="https://axiom.trade/discover"
                className="block hover:text-white transition-colors text-sm"
              >
                Axiom
              </a>
              <a
                href="https://photon-sol.tinyastro.io/"
                className="block hover:text-white transition-colors text-sm"
              >
                Photon
              </a>
              {/* <a
                href="#nft"
                className="block hover:text-white transition-colors text-sm"
              >
                NFT Collection
              </a> */}
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-lg mb-4 font-semibold">
              Community
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://x.com/growstreamfun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title="Follow us on Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 133.4 128.9">
                  <circle cx="66.5" cy="64.9" r="60.1" fill="#FC69EB" stroke="#000000" strokeWidth="3.1062" />
                  <circle cx="66.3" cy="64.9" r="45.6" fill="#1C1F25" stroke="#000000" strokeWidth="2.3296" />
                  <path
                    d="M79,45l6.7-0.1L71.2,61.6l17.6,22.3L75.2,84L64.4,70.5l-12,13.8l-6.7,0.1l15.6-17.8L44.4,45.3l13.9-0.1L68,57.5 L79,45z M77,80l3.7,0L56.3,48.9l-4,0L77,80z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title="Join our Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 126.2 134.9">
                  <path
                    d="M68.6,8.9c32.3,3.4,55.7,32.1,52.3,64.2c-3.4,32.1-32.4,55.4-64.7,52C23.9,121.8,0.5,93,3.9,60.9 C7.4,28.9,36.3,5.6,68.6,8.9z"
                    fill="#BD39FF"
                    stroke="#000000"
                    strokeWidth="3"
                  />
                  <path
                    d="M67.2,20.9c25.6,2.7,44.2,25.5,41.4,50.9C106,97.2,83,115.7,57.4,113S13.2,87.5,15.9,62.1 C18.7,36.7,41.6,18.2,67.2,20.9z"
                    fill="#1BCAFF"
                    stroke="#000000"
                    strokeWidth="2"
                  />
                  <path
                    d="M82.9,51.4c0.7-0.1,1.4-0.1,2,0.2c0.6,0.2,1.2,0.6,1.7,1.1c0.4,0.5,0.7,1.1,0.8,1.8c0.1,0.7,0,1.3-0.2,1.9 l-13,31.9c-1.3,3.1-5.3,4.1-8,1.9c-2.3-1.9-5.6-4.7-8.5-7.6c-1.5-1.4-5.9-6-4.8-8.3c1-2,11.5-7.9,17.5-11.5c2.4-1.4,1.7-2.7-1-1.5 c-6.7,2.9-17.4,7.3-20.8,8.4c-3.1,1-4.5,1-6.1,0.3c-3-1.2-5.7-2.5-7.8-4c-2.9-1.9-1.8-6,1.4-6.6L82.9,51.4z"
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://dexscreener.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title="View on DEXScreener"
              >
                <svg width="32" height="32" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M35.9645 1.11001C55.2191 1.12314 70.8762 16.8417 70.9215 36.2329C70.9668 55.6241 55.3832 71.3218 36.1285 71.3091C16.8736 71.2962 1.21579 55.5776 1.17048 36.1862C1.12523 16.7949 16.7096 1.09712 35.9645 1.11001Z"
                        fill="#FC69EB"
                        stroke="black"
                        strokeWidth="2.17194"
                      />
                      <path
                        d="M36.1289 6.11663C52.5415 6.12768 65.8868 19.5262 65.9254 36.0535C65.9639 52.5807 52.6813 65.9615 36.2687 65.9505C19.856 65.9395 6.51088 52.541 6.47219 36.0137C6.43358 19.4863 19.7162 6.10565 36.1289 6.11663Z"
                        fill="#1C1F25"
                        stroke="black"
                        strokeWidth="1.62895"
                      />
                    </g>
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.8553 31.7271C39.8748 31.2416 41.1717 30.5268 42.4704 29.5474C42.7442 30.0906 42.7744 30.5645 42.6331 30.9472C42.533 31.2168 42.3446 31.4514 42.0971 31.6381C41.829 31.8396 41.4938 31.9867 41.1236 32.0661C40.421 32.2172 39.6005 32.1292 38.8553 31.7271ZM39.0321 36.702L40.3814 37.4465C37.6262 38.9217 36.8771 41.661 35.9871 44.3288C35.0976 41.661 34.3484 38.9215 31.5933 37.4465L32.9427 36.702C33.2104 36.6052 33.3827 36.355 33.3691 36.0818C33.2454 33.5831 33.9517 32.4781 34.9046 31.7845C35.2461 31.5361 35.6192 31.4114 35.9873 31.4114C36.3554 31.4114 36.7285 31.5361 37.07 31.7845C38.0225 32.4784 38.7288 33.5831 38.6053 36.0818C38.5917 36.355 38.7646 36.6052 39.0321 36.702ZM35.9877 20.3872C37.5475 20.4273 39.1112 20.7164 40.4683 21.2791C41.4082 21.6694 42.2848 22.1846 43.079 22.801C43.4375 23.0792 43.7328 23.348 44.0581 23.6575C44.9353 23.6864 46.2174 22.7556 46.8126 21.8846C45.7881 25.0924 41.114 28.8803 37.8781 30.3299C37.8769 30.3294 37.876 30.3287 37.8751 30.3282C37.2944 29.9045 36.6412 29.6927 35.9879 29.6927C35.3347 29.6927 34.6815 29.9045 34.1007 30.3282C34.0998 30.3287 34.0989 30.3296 34.0977 30.3299C30.8612 28.8803 26.1875 25.0921 25.1631 21.8846C25.7583 22.7556 27.04 23.6867 27.9173 23.6575C28.2425 23.3483 28.5378 23.0792 28.8963 22.801C29.6903 22.1846 30.5672 21.6694 31.5071 21.2791C32.8645 20.7164 34.428 20.4273 35.9877 20.3872ZM33.1199 31.7271C32.1006 31.2416 30.8035 30.5268 29.5047 29.5474C29.231 30.0906 29.2008 30.5645 29.3418 30.9472C29.4418 31.2168 29.6303 31.4514 29.8778 31.6381C30.1462 31.8396 30.4813 31.9867 30.8516 32.0661C31.5542 32.2172 32.3749 32.1292 33.1199 31.7271Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.8937 28.3472C44.6087 27.6581 45.2388 26.8952 45.7452 26.2144L46.0025 26.6768C46.8307 28.2597 47.2611 29.8363 47.2611 31.6105L47.2592 34.426L47.2746 35.8853C47.3345 39.4684 48.1462 43.0932 49.9846 46.4108L46.1381 43.4479L43.4166 47.6667L40.5575 45.0955L35.9882 52.1785L31.4191 45.0959L28.56 47.667L25.8385 43.4482L21.992 46.4111C23.8304 43.0936 24.642 39.4684 24.7022 35.8856L24.7176 34.4262L24.7158 31.6108C24.7158 29.8363 25.146 28.26 25.9745 26.6771L26.2315 26.2146C26.7381 26.8952 27.3679 27.6581 28.0828 28.3475L27.8594 28.7906C27.4256 29.6509 27.2821 30.613 27.62 31.5282C27.8378 32.1175 28.2352 32.6229 28.7477 33.0088C29.2454 33.3834 29.8345 33.6361 30.451 33.7686C30.8528 33.855 31.2619 33.8907 31.6686 33.8786C31.5738 34.3924 31.5321 34.925 31.5297 35.468L27.9013 37.4699L30.7012 38.969C30.9249 39.089 31.1381 39.226 31.338 39.3797C33.6464 41.3595 35.0342 47.2166 35.9879 50.0775C36.9417 47.2166 38.3297 41.3595 40.6381 39.3797C40.838 39.2264 41.0512 39.089 41.2749 38.969L44.0748 37.4699L40.4465 35.468C40.4437 34.925 40.4023 34.3924 40.3076 33.8786C40.7143 33.8907 41.1235 33.855 41.5252 33.7686C42.1417 33.6361 42.7308 33.3834 43.2285 33.0088C43.741 32.6229 44.1385 32.1175 44.3563 31.5282C44.6942 30.6133 44.5507 29.6512 44.1169 28.7906L43.8937 28.3472Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="">

          <div className="">
            <p className="text-gray-500 text-xs font-['IHateComicSans'] max-w-[1000px]">
              GrowStream is a community-driven project launched on PumpFun. The concept of live plant growth symbolizes patience and organic growth but should not be interpreted as financial advice or a guarantee of returns. Cryptocurrencies are highly volatile and investing in $GROW involves risk, including the potential loss of your entire investment. Always do your own research (DYOR) before investing and never invest more than you can afford to lose. GrowStream and its affiliates are not responsible for market fluctuations, third-party platforms, or individual financial decisions. 

            </p>
          </div>
        </div>

      </div>

    </footer>
  )
}
