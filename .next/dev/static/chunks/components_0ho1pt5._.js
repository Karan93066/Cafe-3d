(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/HomeExperience.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollWorld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollWorld.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const DIRECTIONS_URL = 'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwi4zurdnMeWAxUAAAAAHQAAAAAQCA..i&pvq=Cg0vZy8xMXQ2MDczemp2IhcKEWJsYWNrIGNvZmZlZSBjYWZlEAIYAw&lqi=ChFibGFjayBjb2ZmZWUgY2FmZUia9MeDmLmAgAhaHxAAEAEQAhgAGAEYAiIRYmxhY2sgY29mZmVlIGNhZmWSAQRjYWZl&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x390ce598b9649ea7:0x906185a44a4aa863';
const ASSETS = {
    cup: 'https://theblackcoffeecafe.com/wp-content/uploads/2024/04/bcccoffee.png',
    storefront: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/5-385x385.jpg',
    guest: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/2-385x385.jpg',
    counter: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/3-385x385.jpg',
    machine: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/4-385x385.jpg',
    pour: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/06/process-menu-385x385.jpg',
    food: 'https://theblackcoffeecafe.com/wp-content/uploads/2024/05/me-10-scaled-385x385.jpg'
};
const history = [
    [
        '2018',
        'The first pour',
        'BCC began as a small coffee shop with quick bites, classic frappes and a cozy place for friends to gather.'
    ],
    [
        '2022',
        'Noida, Sector 62',
        "The flagship store opened in Noida's Sector 62, followed by another outpost at Gaur City Mall."
    ],
    [
        '2023',
        'Into Gurugram',
        'BCC expanded into NCR with a flagship store in Vatika Business Park, Gurugram.'
    ],
    [
        '2024',
        'Keep evolving',
        'The focus moved toward menu innovation, sustainability and a bigger café footprint.'
    ]
];
const menuItems = [
    [
        '01',
        'Café Latte',
        '₹159',
        'espresso / steamed milk'
    ],
    [
        '02',
        'Cappuccino',
        '₹159',
        'espresso / milk foam'
    ],
    [
        '03',
        'Black Coffee',
        '₹159',
        'clean / rich / direct'
    ],
    [
        '04',
        'Caramel Macchiato',
        '₹169',
        'caramel / espresso / milk'
    ],
    [
        '05',
        'Espresso Tonic',
        '₹179',
        'tonic / ice / espresso'
    ],
    [
        '06',
        'Pumpkin Spice Latte',
        '₹179',
        'spiced / silky / seasonal'
    ],
    [
        '07',
        'Siphon',
        '₹429',
        'vacuum pot / serves two'
    ],
    [
        '08',
        'Blast Nachos',
        '₹269',
        'crispy / cheesy / loaded'
    ],
    [
        '09',
        'Whopper Burrito',
        '₹239',
        'veg / bold / filling'
    ]
];
const chapters = [
    [
        '01',
        'Intro',
        'hero'
    ],
    [
        '02',
        'Story',
        'story'
    ],
    [
        '03',
        'History',
        'history'
    ],
    [
        '04',
        'Menu',
        'menu'
    ],
    [
        '05',
        'Ambience',
        'ambience'
    ],
    [
        '06',
        'Promise',
        'promise'
    ],
    [
        '07',
        'Visit',
        'location'
    ]
];
const backgrounds = {
    hero: '#080604',
    story: '#0d0806',
    history: '#070707',
    menu: '#120806',
    ambience: '#090706',
    promise: '#0d0b08',
    location: '#060606'
};
function HomeExperience() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeExperience.useEffect": ()=>{
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "HomeExperience.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.nav-bar', {
                        y: -24,
                        opacity: 0,
                        duration: 0.9,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.hero-reveal', {
                        y: 48,
                        opacity: 0,
                        duration: 1.05,
                        stagger: 0.09,
                        ease: 'power3.out',
                        delay: 0.12
                    });
                    chapters.forEach({
                        "HomeExperience.useEffect.ctx": ([, , id], index)=>{
                            const section = document.getElementById(id);
                            const railItem = document.querySelector(`[data-rail="${id}"]`);
                            if (!section || !railItem) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: section,
                                start: 'top 48%',
                                end: 'bottom 48%',
                                onEnter: {
                                    "HomeExperience.useEffect.ctx": ()=>{
                                        document.querySelectorAll('.chapter-rail a').forEach({
                                            "HomeExperience.useEffect.ctx": (el)=>el.classList.remove('is-active')
                                        }["HomeExperience.useEffect.ctx"]);
                                        railItem.classList.add('is-active');
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.ambient-layer', {
                                            backgroundColor: backgrounds[id],
                                            duration: 0.8,
                                            overwrite: true
                                        });
                                    }
                                }["HomeExperience.useEffect.ctx"],
                                onEnterBack: {
                                    "HomeExperience.useEffect.ctx": ()=>{
                                        document.querySelectorAll('.chapter-rail a').forEach({
                                            "HomeExperience.useEffect.ctx": (el)=>el.classList.remove('is-active')
                                        }["HomeExperience.useEffect.ctx"]);
                                        railItem.classList.add('is-active');
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.ambient-layer', {
                                            backgroundColor: backgrounds[id],
                                            duration: 0.8,
                                            overwrite: true
                                        });
                                    }
                                }["HomeExperience.useEffect.ctx"]
                            });
                            if (!reduceMotion && index > 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(section.querySelectorAll('[data-reveal]')).forEach({
                                    "HomeExperience.useEffect.ctx": (element, itemIndex)=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(element, {
                                            y: 64,
                                            opacity: 0,
                                            duration: 1,
                                            delay: itemIndex * 0.035,
                                            ease: 'power3.out',
                                            scrollTrigger: {
                                                trigger: element,
                                                start: 'top 88%'
                                            }
                                        });
                                    }
                                }["HomeExperience.useEffect.ctx"]);
                            }
                        }
                    }["HomeExperience.useEffect.ctx"]);
                    if (!reduceMotion) {
                        document.querySelectorAll('.image-card img').forEach({
                            "HomeExperience.useEffect.ctx": (image)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(image, {
                                    yPercent: -7,
                                    scale: 1.08
                                }, {
                                    yPercent: 7,
                                    scale: 1.08,
                                    ease: 'none',
                                    scrollTrigger: {
                                        trigger: image.parentElement,
                                        start: 'top bottom',
                                        end: 'bottom top',
                                        scrub: 1.2
                                    }
                                });
                            }
                        }["HomeExperience.useEffect.ctx"]);
                        const menuTrack = document.querySelector('.menu-track');
                        if (menuTrack) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(menuTrack, {
                                x: {
                                    "HomeExperience.useEffect.ctx": ()=>-Math.max(0, menuTrack.scrollWidth - window.innerWidth + Math.min(150, window.innerWidth * 0.08))
                                }["HomeExperience.useEffect.ctx"],
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: '#menu',
                                    start: 'top top',
                                    end: 'bottom bottom',
                                    scrub: 1,
                                    invalidateOnRefresh: true
                                }
                            });
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.history-years', {
                            yPercent: -24,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: '#history',
                                start: 'top top',
                                end: 'bottom bottom',
                                scrub: 1
                            }
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.hero-word-outline', {
                            xPercent: 8,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: '#hero',
                                start: 'top top',
                                end: 'bottom top',
                                scrub: 1
                            }
                        });
                    }
                }
            }["HomeExperience.useEffect.ctx"], root);
            const refresh = window.setTimeout({
                "HomeExperience.useEffect.refresh": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
            }["HomeExperience.useEffect.refresh"], 350);
            return ({
                "HomeExperience.useEffect": ()=>{
                    window.clearTimeout(refresh);
                    ctx.revert();
                }
            })["HomeExperience.useEffect"];
        }
    }["HomeExperience.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "site",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ambient-layer"
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-layer"
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollWorld$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "nav-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        className: "logo-mark",
                        "aria-label": "Black Coffee Cafe home",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "B"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "CC"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 159,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "THE BLACK COFFEE CAFE"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 159,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Main navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#story",
                                children: "Story"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#menu",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#ambience",
                                children: "Café"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav-location",
                        href: DIRECTIONS_URL,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "NOIDA 62 ↗"
                    }, void 0, false, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "chapter-rail",
                "aria-label": "Page chapters",
                children: chapters.map(([n, label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${id}`,
                        "data-rail": id,
                        className: id === 'hero' ? 'is-active' : '',
                        "aria-label": label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: n
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 172,
                                columnNumber: 29
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter hero-chapter",
                id: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chapter-inner hero-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker hero-reveal",
                                        children: "Noida · Coffee · Culture"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "hero-reveal",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Black"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "red-word",
                                                children: "Coffee"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Café."
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-lead hero-reveal",
                                        children: "Specialty coffee, Mexican food and cool ambience — reimagined as a cinematic scroll experience."
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-actions hero-reveal",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#menu",
                                                className: "pill pill-light",
                                                children: [
                                                    "Explore menu ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "↘"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeExperience.js",
                                                        lineNumber: 188,
                                                        columnNumber: 72
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: DIRECTIONS_URL,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "pill pill-line",
                                                children: [
                                                    "Get directions ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeExperience.js",
                                                        lineNumber: 189,
                                                        columnNumber: 115
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-status hero-reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "01 / 07"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Scroll to move",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 195,
                                                columnNumber: 30
                                            }, this),
                                            "the coffee through",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 195,
                                                columnNumber: 54
                                            }, this),
                                            "the story."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-tags hero-reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Cool ambience"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Specialty coffee"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 199,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Mexican food"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 199,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-word-outline",
                        "aria-hidden": "true",
                        children: "BLACK"
                    }, void 0, false, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter story-chapter",
                id: "story",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chapter-inner story-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "story-number",
                            "data-reveal": true,
                            children: "02"
                        }, void 0, false, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "story-copy-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "kicker",
                                    "data-reveal": true,
                                    children: "The story behind our café"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-reveal": true,
                                    children: [
                                        "Good coffee.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 210,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "Better pauses."
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 210,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-copy",
                                    "data-reveal": true,
                                    children: "From classic espresso to lattes and cappuccinos, BCC builds around carefully selected coffee and food made for long conversations."
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "micro-list",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this),
                                                " Quality"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 213,
                                                    columnNumber: 51
                                                }, this),
                                                " Freshness"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 213,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "03"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 213,
                                                    columnNumber: 83
                                                }, this),
                                                " Hospitality"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 213,
                                            columnNumber: 77
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "product-cutout",
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: ASSETS.cup,
                                    alt: "Black Coffee Cafe branded takeaway cup"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    children: "Original BCC cup / source-site asset"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeExperience.js",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter history-chapter",
                id: "history",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "history-sticky",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chapter-inner history-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "history-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker",
                                        "data-reveal": true,
                                        children: "Since 2018"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-reveal": true,
                                        children: [
                                            "Built one",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 228,
                                                columnNumber: 40
                                            }, this),
                                            "pour at a time."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "body-copy",
                                        "data-reveal": true,
                                        children: "BCC’s own timeline becomes a vertical story while the cup crosses the frame."
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "history-window",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "history-years",
                                    children: history.map(([year, title, copy], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "year-row",
                                            "data-reveal": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "year-index",
                                                    children: [
                                                        "0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: year
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HomeExperience.js",
                                                            lineNumber: 237,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: copy
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HomeExperience.js",
                                                            lineNumber: 237,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, year, true, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomeExperience.js",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter menu-chapter",
                id: "menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-sticky",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-heading chapter-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "kicker",
                                            "data-reveal": true,
                                            children: "From the current BCC menu"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            "data-reveal": true,
                                            children: [
                                                "Pick your",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 251,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "ritual."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 251,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "menu-scroll-hint",
                                    children: "Scroll sideways by scrolling down →"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-track-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-track",
                                children: [
                                    menuItems.map(([n, title, price, note], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "menu-tile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "menu-art",
                                                    children: i === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: ASSETS.pour,
                                                        alt: "Coffee being poured"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeExperience.js",
                                                        lineNumber: 260,
                                                        columnNumber: 32
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `cup-graphic type-${i % 4}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeExperience.js",
                                                        lineNumber: 260,
                                                        columnNumber: 86
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "menu-tile-top",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: n
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HomeExperience.js",
                                                            lineNumber: 262,
                                                            columnNumber: 50
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: price
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HomeExperience.js",
                                                            lineNumber: 262,
                                                            columnNumber: 66
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: note
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeExperience.js",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, title, true, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "menu-tile menu-end",
                                        href: "https://theblackcoffeecafe.com/?page_id=3788",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Full menu"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "100+ choices"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 268,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 268,
                                                columnNumber: 68
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeExperience.js",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter ambience-chapter",
                id: "ambience",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chapter-inner ambience-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ambience-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "kicker",
                                    "data-reveal": true,
                                    children: "Inside BCC"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-reveal": true,
                                    children: [
                                        "Taste meets",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 279,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "aesthetics."
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 279,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-copy",
                                    "data-reveal": true,
                                    children: "The source-site gallery already has the raw material: storefront energy, warm interiors, espresso machinery and real café moments. Here they become a layered scroll collage."
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "review-stat",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "50,000+"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 281,
                                            columnNumber: 54
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "reviews claimed on the current BCC site"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 281,
                                            columnNumber: 78
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "collage",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "image-card image-a",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ASSETS.storefront,
                                            alt: "Black Coffee Cafe storefront"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 284,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            children: "Exterior / BCC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 284,
                                            columnNumber: 130
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "image-card image-b",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ASSETS.counter,
                                            alt: "Black Coffee Cafe counter interior"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 285,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            children: "Counter / BCC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 285,
                                            columnNumber: 133
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "image-card image-c",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ASSETS.machine,
                                            alt: "Espresso machines at Black Coffee Cafe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 286,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            children: "Bar / BCC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 286,
                                            columnNumber: 137
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "image-card image-d",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ASSETS.guest,
                                            alt: "Guest enjoying coffee at Black Coffee Cafe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 287,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            children: "Community / BCC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 287,
                                            columnNumber: 139
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeExperience.js",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter promise-chapter",
                id: "promise",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chapter-inner promise-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "promise-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "kicker",
                                    "data-reveal": true,
                                    children: "Our guarantee at BCC"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-reveal": true,
                                    children: [
                                        "Four things.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 296,
                                            columnNumber: 41
                                        }, this),
                                        "No compromise."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "promise-grid",
                            children: [
                                [
                                    '01',
                                    'Quality',
                                    'Only the freshest ingredients, with a commitment to excellence.'
                                ],
                                [
                                    '02',
                                    'Exceptional service',
                                    'Friendly, attentive service that aims to exceed expectations.'
                                ],
                                [
                                    '03',
                                    'Cleanliness',
                                    'Stringent standards designed for safety and comfort.'
                                ],
                                [
                                    '04',
                                    'Satisfaction',
                                    "If something isn't right, the BCC promise is to make it right."
                                ]
                            ].map(([n, title, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "promise-card",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: n
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 305,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 305,
                                            columnNumber: 89
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: text
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeExperience.js",
                                            lineNumber: 305,
                                            columnNumber: 105
                                        }, this)
                                    ]
                                }, title, true, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sustainability-strip",
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Sourced with care"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "100% organic · always fresh · reducing plastic impact"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeExperience.js",
                                    lineNumber: 309,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeExperience.js",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter location-chapter",
                id: "location",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "location-photo",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: ASSETS.food,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/components/HomeExperience.js",
                            lineNumber: 315,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chapter-inner location-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "location-meta",
                                "data-reveal": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker",
                                        children: "Find us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sector 62"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Noida, Uttar Pradesh"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "location-main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-reveal": true,
                                        children: [
                                            "Meet you",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 323,
                                                columnNumber: 37
                                            }, this),
                                            "over coffee."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "address",
                                        "data-reveal": true,
                                        children: [
                                            "A-40, i-Thum Tower,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 324,
                                                columnNumber: 67
                                            }, this),
                                            "Sector-62, Noida, UP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-row",
                                        "data-reveal": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "pill pill-light",
                                                href: DIRECTIONS_URL,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [
                                                    "Open Google Maps ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeExperience.js",
                                                        lineNumber: 326,
                                                        columnNumber: 118
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+917877799986",
                                                children: "+91 78 777 999 86"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:bccofficial0@gmail.com",
                                                children: "bccofficial0@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "location-stamp",
                                "data-reveal": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "BCC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 331,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            "NOIDA",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/HomeExperience.js",
                                                lineNumber: 331,
                                                columnNumber: 83
                                            }, this),
                                            "INDIA"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HomeExperience.js",
                                        lineNumber: 331,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "site-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "THE BLACK COFFEE CAFE"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "3D WEB EXPERIENCE / CONCEPT"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                children: "BACK TO TOP ↑"
                            }, void 0, false, {
                                fileName: "[project]/components/HomeExperience.js",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomeExperience.js",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomeExperience.js",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HomeExperience.js",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(HomeExperience, "/rr7G8WhLICCHRj4HQ5x5ovssB4=");
_c = HomeExperience;
var _c;
__turbopack_context__.k.register(_c, "HomeExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollWorld.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function makeCup() {
    const cup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const shellMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: 0x070707,
        roughness: 0.22,
        metalness: 0.08,
        clearcoat: 0.85,
        clearcoatRoughness: 0.2
    });
    const points = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.08, -1.28),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.26, -1.2),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.42, -0.72),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.56, 0.02),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.62, 0.78),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.58, 1.08),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.48, 1.18),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.34, 1.02),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.26, 0.32),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.12, -0.68)
    ];
    const shell = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LatheGeometry"](points, 96), shellMaterial);
    shell.castShadow = true;
    shell.receiveShadow = true;
    cup.add(shell);
    const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.535, 0.06, 18, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: 0x1d120d,
        roughness: 0.3,
        clearcoat: 0.6
    }));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 1.12;
    cup.add(rim);
    const coffee = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1.42, 1.42, 0.05, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: 0x351206,
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.06
    }));
    coffee.position.y = 1.065;
    cup.add(coffee);
    const crema = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    [
        0.86,
        0.57,
        0.32
    ].forEach((radius, i)=>{
        const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](radius, 0.035 - i * 0.006, 12, 72), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: i === 0 ? 0xe0a162 : 0xc27b3d,
            transparent: true,
            opacity: 0.5 - i * 0.08
        }));
        ring.rotation.x = Math.PI / 2;
        ring.position.set(0.08 * i, 1.097 + i * 0.004, -0.04 * i);
        ring.scale.y = 0.7 + i * 0.04;
        crema.add(ring);
    });
    cup.add(crema);
    const handle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.76, 0.2, 20, 72), shellMaterial);
    handle.position.set(1.58, -0.03, 0);
    handle.scale.set(1.12, 1.28, 1);
    handle.castShadow = true;
    cup.add(handle);
    const saucer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](2.02, 2.22, 0.11, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: 0x080808,
        roughness: 0.34,
        clearcoat: 0.55
    }));
    saucer.position.y = -1.39;
    saucer.castShadow = true;
    cup.add(saucer);
    // BCC-inspired mark, rendered as a canvas decal so the demo needs no external model.
    const logoCanvas = document.createElement('canvas');
    logoCanvas.width = 1024;
    logoCanvas.height = 512;
    const c = logoCanvas.getContext('2d');
    c.clearRect(0, 0, 1024, 512);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = '900 180px Arial';
    c.fillStyle = '#e0212d';
    c.fillText('B', 345, 220);
    c.fillStyle = '#f4eee7';
    c.fillText('CC', 610, 220);
    c.font = '600 38px Arial';
    c.letterSpacing = '3px';
    c.fillText('THE BLACK COFFEE CAFE', 520, 360);
    const logoTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](logoCanvas);
    logoTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    const decal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2.25, 1.12), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        map: logoTexture,
        transparent: true,
        depthWrite: false
    }));
    decal.position.set(0, -0.05, 1.54);
    decal.scale.set(0.62, 0.62, 0.62);
    cup.add(decal);
    return {
        cup,
        coffee,
        crema
    };
}
function makeSteam() {
    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    for(let i = 0; i < 4; i += 1){
        const x = (i - 1.5) * 0.34;
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"]([
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, 1.18, 0),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x + 0.18, 1.65, 0.06),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x - 0.16, 2.08, -0.05),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x + 0.12, 2.56, 0.05),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x - 0.08, 3.08, 0)
        ]);
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0xf3e7dc,
            transparent: true,
            opacity: 0.08 + i * 0.025,
            depthWrite: false
        });
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, 54, 0.018 + i * 0.003, 7, false), material);
        group.add(mesh);
    }
    return group;
}
function makeBeans() {
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 18, 14);
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x341509,
        roughness: 0.64,
        metalness: 0.02
    });
    const count = 54;
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](geometry, material, count);
    const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
    for(let i = 0; i < count; i += 1){
        const angle = i * 1.07;
        const radius = 2.25 + i % 9 * 0.27;
        const y = -2.5 + i * 1.37 % 6.6;
        dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius * 0.48);
        dummy.rotation.set(i * 0.61, i * 0.47, i * 0.19);
        const s = 0.55 + i % 5 * 0.12;
        dummy.scale.set(s * 0.88, s * 0.46, s * 1.25);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    return mesh;
}
function makeDust() {
    const count = 210;
    const positions = new Float32Array(count * 3);
    for(let i = 0; i < count; i += 1){
        positions[i * 3] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
        color: 0xbd7440,
        size: 0.022,
        transparent: true,
        opacity: 0.46
    }));
}
const DESKTOP_SCENES = [
    {
        id: 'hero',
        p: [
            1.65,
            -0.1,
            0
        ],
        s: 1.0,
        r: [
            -0.08,
            -0.28,
            -0.08
        ],
        camera: 9.4,
        bean: 1.0
    },
    {
        id: 'story',
        p: [
            -2.4,
            -0.15,
            0
        ],
        s: 0.78,
        r: [
            0.04,
            0.62,
            0.12
        ],
        camera: 8.8,
        bean: 0.8
    },
    {
        id: 'history',
        p: [
            2.65,
            -0.35,
            0
        ],
        s: 0.67,
        r: [
            0.18,
            -0.85,
            -0.16
        ],
        camera: 9.3,
        bean: 1.3
    },
    {
        id: 'menu',
        p: [
            0.2,
            -0.2,
            0
        ],
        s: 1.38,
        r: [
            -0.12,
            0.25,
            0.08
        ],
        camera: 7.6,
        bean: 1.7
    },
    {
        id: 'ambience',
        p: [
            -2.75,
            0.25,
            0
        ],
        s: 0.56,
        r: [
            0.13,
            1.18,
            -0.2
        ],
        camera: 9.7,
        bean: 0.72
    },
    {
        id: 'promise',
        p: [
            2.65,
            0.0,
            0
        ],
        s: 0.63,
        r: [
            -0.16,
            -1.08,
            0.14
        ],
        camera: 9.2,
        bean: 1.08
    },
    {
        id: 'location',
        p: [
            0.25,
            -0.25,
            0
        ],
        s: 1.18,
        r: [
            -0.08,
            0.12,
            0.02
        ],
        camera: 8.0,
        bean: 0.55
    }
];
const MOBILE_SCENES = [
    {
        id: 'hero',
        p: [
            0.2,
            1.05,
            0
        ],
        s: 0.72,
        r: [
            -0.06,
            -0.2,
            -0.06
        ],
        camera: 9.9,
        bean: 0.75
    },
    {
        id: 'story',
        p: [
            1.35,
            0.4,
            0
        ],
        s: 0.5,
        r: [
            0.05,
            0.5,
            0.08
        ],
        camera: 9.7,
        bean: 0.6
    },
    {
        id: 'history',
        p: [
            -1.25,
            0.2,
            0
        ],
        s: 0.48,
        r: [
            0.12,
            -0.7,
            -0.1
        ],
        camera: 9.9,
        bean: 0.8
    },
    {
        id: 'menu',
        p: [
            0,
            0.7,
            0
        ],
        s: 0.72,
        r: [
            -0.1,
            0.25,
            0.06
        ],
        camera: 9.1,
        bean: 1.0
    },
    {
        id: 'ambience',
        p: [
            1.4,
            0.25,
            0
        ],
        s: 0.46,
        r: [
            0.1,
            1.0,
            -0.16
        ],
        camera: 10.0,
        bean: 0.55
    },
    {
        id: 'promise',
        p: [
            -1.35,
            0.3,
            0
        ],
        s: 0.48,
        r: [
            -0.1,
            -0.9,
            0.12
        ],
        camera: 9.8,
        bean: 0.7
    },
    {
        id: 'location',
        p: [
            0,
            0.75,
            0
        ],
        s: 0.75,
        r: [
            -0.06,
            0.1,
            0.02
        ],
        camera: 9.1,
        bean: 0.45
    }
];
function ScrollWorld() {
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollWorld.useEffect": ()=>{
            const mount = mountRef.current;
            if (!mount) return undefined;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const mobile = window.matchMedia('(max-width: 760px)').matches;
            const states = mobile ? MOBILE_SCENES : DESKTOP_SCENES;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"](0x080504, mobile ? 0.07 : 0.055);
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](mobile ? 44 : 38, 1, 0.1, 100);
            camera.position.set(0, 0.2, states[0].camera);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance'
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.35 : 1.8));
            renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
            renderer.toneMappingExposure = 1.14;
            renderer.shadowMap.enabled = !mobile;
            renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
            mount.appendChild(renderer.domElement);
            const hemi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HemisphereLight"](0xffe0c4, 0x120906, 1.15);
            scene.add(hemi);
            const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotLight"](0xffa654, 48, 25, Math.PI / 5, 0.55, 1.25);
            key.position.set(4.8, 6, 6.5);
            key.castShadow = !mobile;
            scene.add(key);
            const redRim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xd82b35, 12, 16, 2);
            redRim.position.set(-4.2, 1.8, 2.4);
            scene.add(redRim);
            const warmFill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xb56833, 13, 18, 2);
            warmFill.position.set(1.6, -3.4, 2.8);
            scene.add(warmFill);
            const rig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            const idle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            const cupParts = makeCup();
            const steam = makeSteam();
            const beans = makeBeans();
            const dust = makeDust();
            idle.add(cupParts.cup, steam);
            rig.add(idle, beans);
            scene.add(rig, dust);
            const start = states[0];
            rig.position.set(...start.p);
            rig.rotation.set(...start.r);
            rig.scale.setScalar(start.s);
            beans.scale.setScalar(start.bean);
            const pointer = {
                x: 0,
                y: 0
            };
            const onPointerMove = {
                "ScrollWorld.useEffect.onPointerMove": (event)=>{
                    pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
                    pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
                }
            }["ScrollWorld.useEffect.onPointerMove"];
            window.addEventListener('pointermove', onPointerMove, {
                passive: true
            });
            const resize = {
                "ScrollWorld.useEffect.resize": ()=>{
                    const w = mount.clientWidth;
                    const h = mount.clientHeight;
                    if (!w || !h) return;
                    renderer.setSize(w, h, false);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                }
            }["ScrollWorld.useEffect.resize"];
            window.addEventListener('resize', resize);
            resize();
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ScrollWorld.useEffect.ctx": ()=>{
                    if (reduceMotion) return;
                    for(let i = 1; i < states.length; i += 1){
                        const from = states[i - 1];
                        const to = states[i];
                        const trigger = document.getElementById(to.id);
                        if (!trigger) continue;
                        const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                            scrollTrigger: {
                                trigger,
                                start: 'top 92%',
                                end: 'top 18%',
                                scrub: 1.15,
                                invalidateOnRefresh: true
                            }
                        });
                        timeline.fromTo(rig.position, {
                            x: from.p[0],
                            y: from.p[1],
                            z: from.p[2]
                        }, {
                            x: to.p[0],
                            y: to.p[1],
                            z: to.p[2],
                            ease: 'none',
                            immediateRender: false
                        }, 0).fromTo(rig.rotation, {
                            x: from.r[0],
                            y: from.r[1],
                            z: from.r[2]
                        }, {
                            x: to.r[0],
                            y: to.r[1],
                            z: to.r[2],
                            ease: 'none',
                            immediateRender: false
                        }, 0).fromTo(rig.scale, {
                            x: from.s,
                            y: from.s,
                            z: from.s
                        }, {
                            x: to.s,
                            y: to.s,
                            z: to.s,
                            ease: 'none',
                            immediateRender: false
                        }, 0).fromTo(beans.scale, {
                            x: from.bean,
                            y: from.bean,
                            z: from.bean
                        }, {
                            x: to.bean,
                            y: to.bean,
                            z: to.bean,
                            ease: 'none',
                            immediateRender: false
                        }, 0).fromTo(camera.position, {
                            z: from.camera
                        }, {
                            z: to.camera,
                            ease: 'none',
                            immediateRender: false
                        }, 0);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(beans.rotation, {
                        y: Math.PI * 3.4,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '#site',
                            start: 'top top',
                            end: 'bottom bottom',
                            scrub: 1.4
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust.rotation, {
                        y: -Math.PI * 0.75,
                        x: 0.16,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '#site',
                            start: 'top top',
                            end: 'bottom bottom',
                            scrub: 2
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cupParts.crema.rotation, {
                        y: Math.PI * 2,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '#site',
                            start: 'top top',
                            end: 'bottom bottom',
                            scrub: 1
                        }
                    });
                }
            }["ScrollWorld.useEffect.ctx"], mount);
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            let frame;
            const draw = {
                "ScrollWorld.useEffect.draw": ()=>{
                    const t = clock.getElapsedTime();
                    if (!reduceMotion) {
                        idle.rotation.y += (pointer.x * 0.07 - idle.rotation.y) * 0.035;
                        idle.rotation.x += (-pointer.y * 0.04 - idle.rotation.x) * 0.035;
                        idle.position.y = Math.sin(t * 0.86) * 0.055;
                        steam.position.y = t * 0.045 % 0.42;
                        steam.rotation.y = Math.sin(t * 0.42) * 0.08;
                        cupParts.coffee.rotation.y = t * 0.06;
                    }
                    renderer.render(scene, camera);
                    frame = requestAnimationFrame(draw);
                }
            }["ScrollWorld.useEffect.draw"];
            draw();
            return ({
                "ScrollWorld.useEffect": ()=>{
                    ctx.revert();
                    cancelAnimationFrame(frame);
                    window.removeEventListener('pointermove', onPointerMove);
                    window.removeEventListener('resize', resize);
                    if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
                    scene.traverse({
                        "ScrollWorld.useEffect": (object)=>{
                            if (object.geometry) object.geometry.dispose?.();
                            if (object.material) {
                                const materials = Array.isArray(object.material) ? object.material : [
                                    object.material
                                ];
                                materials.forEach({
                                    "ScrollWorld.useEffect": (material)=>{
                                        if (material.map) material.map.dispose?.();
                                        material.dispose?.();
                                    }
                                }["ScrollWorld.useEffect"]);
                            }
                        }
                    }["ScrollWorld.useEffect"]);
                    renderer.dispose();
                }
            })["ScrollWorld.useEffect"];
        }
    }["ScrollWorld.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "webgl-stage",
        ref: mountRef,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ScrollWorld.js",
        lineNumber: 359,
        columnNumber: 10
    }, this);
}
_s(ScrollWorld, "V9/qkEdV8GfsDZk7lMTA1T8g5Ps=");
_c = ScrollWorld;
var _c;
__turbopack_context__.k.register(_c, "ScrollWorld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0ho1pt5._.js.map